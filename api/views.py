from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.twitter.views import TwitterOAuthAdapter
from django.contrib.postgres.search import TrigramSimilarity
from drf_spectacular.utils import extend_schema
from newspaper import Article
from rest_auth.registration.views import SocialConnectView
from rest_auth.social_serializers import TwitterConnectSerializer
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Entity, Source, Claim, Evidence, EvidenceReview, ReviewInvitation, Topic
from api.serializers import EntitySerializer, SourceSerializer, ClaimSerializer, EvidenceSerializer, \
    ClaimWithEvidenceSerializer, EvidenceReviewSerializer, EvidenceWithReviewSerializer, ClaimCreateSerializer, \
    ReviewInvitationSerializer, ReviewInvitationDetailsSerializer, TopicSerializer


@extend_schema(operation_id='api_review_invitations', methods=['GET'], responses=ReviewInvitationSerializer(many=True))
class ReviewInvitations(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request: Request):
        user = request.user
        if user.is_authenticated:
            invitations = user.review_invitations.all()
            return Response(ReviewInvitationSerializer(invitations, many=True).data)


@extend_schema(responses=ReviewInvitationDetailsSerializer(many=True))
class ReviewInvitationsDetails(generics.ListAPIView):
    """
    List user's ReviewInvitation objects.
    """
    permission_classes = [IsAuthenticated]

    def list(self, request, **kwargs):
        queryset = request.user.review_invitations.all()
        serializer = ReviewInvitationDetailsSerializer(queryset, many=True)
        return Response(serializer.data)


@extend_schema(responses=ReviewInvitationDetailsSerializer)
class ReviewInvitationsDetailsSingle(generics.RetrieveDestroyAPIView):
    """
    Retrieve or delete a Review Invitation object.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, **kwargs):
        queryset = request.user.review_invitations.get(id=kwargs.get('pk'))
        serializer = ReviewInvitationDetailsSerializer(queryset)
        return Response(serializer.data)

    def delete(self, request, **kwargs):
        instance = request.user.review_invitations.get(id=kwargs.get('pk'))
        cached_data = ReviewInvitationDetailsSerializer(instance).data
        instance.delete()
        return Response(cached_data)


@extend_schema(operation_id='api_article_info', methods=['GET'])
class ArticleInfo(APIView):
    """
    Takes a URL, checks if this is an article, and if so, returns parsed metadata
    """

    def get(self, request):
        article_url = request.query_params.get('url')
        article = Article(article_url)
        article.download()
        article.parse()
        article.nlp()
        return Response({
            'summary': article.summary,
            'authors': article.authors,
            'title': article.title,
            'date_published': article.publish_date
        })


@extend_schema(operation_id='api_author_info', methods=['GET'], responses=EntitySerializer(many=True))
class AuthorMatch(APIView):
    """
    Takes a partial author name and returns a list of possibly matching entities
    """

    def get(self, request):
        partial_name = request.query_params.get('name')
        matches = Entity.objects.annotate(similarity=TrigramSimilarity('name', partial_name)) \
            .filter(similarity__gt=0.25) \
            .order_by('-similarity') \
            .all()

        return Response(EntitySerializer(matches, many=True).data)


class EntitiesList(generics.ListCreateAPIView):
    """
    REST endpoints for viewing and submitting entities
    """
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer


@extend_schema(operation_id='api_entity_detail', methods=['GET'])
class EntityDetail(generics.RetrieveUpdateAPIView):
    """
    REST endpoints for viewing and modifying individual entities
    """
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer


class SourcesList(generics.ListCreateAPIView):
    """
    REST endpoints for viewing and submitting sources
    """
    queryset = Source.objects.all()
    serializer_class = SourceSerializer


@extend_schema(operation_id='api_source_detail', methods=['GET', 'POST'])
class SourceDetail(generics.RetrieveUpdateAPIView):
    """
    REST endpoints for viewing and modifying individual sources
    """
    queryset = Source.objects
    serializer_class = SourceSerializer


class ClaimsList(generics.ListCreateAPIView):
    """
    REST endpoints for viewing and submitting claims
    """
    queryset = Claim.objects.all()
    serializer_class = ClaimSerializer

    def post(self, request: Request, **kwargs):
        serializer = ClaimCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            queryset = self.get_queryset()
            serializer = ClaimSerializer(queryset, many=True)
            return Response(serializer.data)
        else:
            # Filter out claims for which the user is invited to review evidence
            invited_to_review_evidence = [invitation.evidence for invitation in request.user.review_invitations.all()]
            queryset = Claim.objects.exclude(related_evidence__in=invited_to_review_evidence)
            serializer = ClaimSerializer(queryset, many=True)
            return Response(serializer.data)


@extend_schema(operation_id='api_claim_detail', methods=['GET'])
class ClaimDetail(generics.RetrieveUpdateAPIView):
    """
    REST endpoints for viewing and modifying individual claims
    """
    queryset = Claim.objects.all()
    serializer_class = ClaimWithEvidenceSerializer

    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            queryset = self.get_queryset()
            instance = queryset.get(id=kwargs.get('pk'))
            serializer = ClaimWithEvidenceSerializer(instance)
            return Response(serializer.data)
        else:
            # Filter out claims for which the user is invited to review evidence
            invited_to_review_evidence = [invitation.evidence for invitation in request.user.review_invitations.all()]
            queryset = Claim.objects.exclude(related_evidence__in=invited_to_review_evidence)
            instance = queryset.get(id=kwargs.get('pk'))
            serializer = ClaimWithEvidenceSerializer(instance)
            return Response(serializer.data)


class EvidenceList(generics.ListCreateAPIView):
    """
    REST endpoints for viewing and submitting evidence
    """
    queryset = Evidence.objects.all()
    serializer_class = EvidenceWithReviewSerializer


@extend_schema(operation_id='api_evidence_detail', methods=['GET'])
class EvidenceDetail(generics.RetrieveUpdateAPIView):
    """
    REST endpoints for viewing and modifying individual pieces of evidence
    """
    queryset = Evidence.objects.all()
    serializer_class = EvidenceSerializer


class EvidenceReviewList(generics.ListCreateAPIView):
    """
    REST endpoints for viewing and submitting evidence reviews
    """
    # TODO: Add permission only allowing viewing own reviews
    queryset = EvidenceReview.objects.all()
    serializer_class = EvidenceReviewSerializer

    def post(self, request: Request, **kwargs):
        serializer = EvidenceReviewSerializer(data=request.data)
        if serializer.is_valid():
            user_invitations = ReviewInvitation.objects.filter(user=request.user)
            evidence = Evidence.objects.get(id=request.data['evidence'])
            relevant_invitation = user_invitations.filter(evidence=evidence).first()
            user_was_invited_to_review = relevant_invitation is not None
            if user_was_invited_to_review:
                serializer.save(reviewer=request.user, evidence=evidence)
                relevant_invitation.delete()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(operation_id='api_evidence_review_detail', methods=['GET'])
class EvidenceReviewDetail(generics.RetrieveUpdateAPIView):
    """
    REST endpoints for viewing and modifying individual evidence reviews
    """
    # TODO: Add permission only allowing view/modify of own reviews
    queryset = EvidenceReview.objects.all()
    serializer_class = EvidenceReviewSerializer


class TopicList(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class FacebookConnect(SocialConnectView):
    adapter_class = FacebookOAuth2Adapter


class TwitterConnect(SocialConnectView):
    serializer_class = TwitterConnectSerializer
    adapter_class = TwitterOAuthAdapter
