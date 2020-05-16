from rest_framework import serializers
from api.models import Entity, Source, Claim, Evidence


class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entity
        fields = ['name', 'description']


class SourceSerializer(serializers.ModelSerializer):
    authors = EntitySerializer(many=True, read_only=True)

    class Meta:
        model = Source
        fields = ['url', 'description', 'authors', 'date_retrieved']


class ClaimSerializer(serializers.ModelSerializer):
    source = SourceSerializer(read_only=True)

    class Meta:
        model = Claim
        fields = ['claim_text', 'source', 'description']


class EvidenceSerializer(serializers.ModelSerializer):
    claim = ClaimSerializer(read_only=True)
    source = SourceSerializer(read_only=True)

    class Meta:
        model = Evidence
        fields = ['claim', 'source', 'evidence_relationship', 'description', 'community_verified', 'expert_verified']
