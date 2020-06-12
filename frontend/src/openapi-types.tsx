/* Generated by restful-react */

import React from "react";
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from "restful-react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Claim {
  id: number;
  claim_text: string;
  description?: string;
  topic: Topic;
  source_of_claim: Source;
}

export interface ClaimWithEvidence {
  id: number;
  claim_text: string;
  description?: string;
  topic: Topic;
  source_of_claim: Source;
  related_evidence: Evidence[];
}

export interface Entity {
  id: number;
  name: string;
  description?: string;
}

export interface Evidence {
  id: number;
  source_of_evidence: Source;
  description?: string;
  expert_consensus_relationship: EvidenceRelationship;
  num_expert_reviews: number;
  community_consensus_relationship: EvidenceRelationship;
  num_community_reviews: number;
}

export type EvidenceRelationship = "PROVES" | "SUPPORTS" | "UNRELATED" | "INCONCLUSIVE" | "DISPUTES" | "DISPROVES" | "SPLIT";

export interface EvidenceReview {
  deduced_evidence_relationship: EvidenceRelationship;
  deduced_source_degree: SourceDegree;
  is_reliable: boolean;
  additional_comments?: string;
}

export interface EvidenceWithReview {
  source_of_evidence: Source;
  reviews: EvidenceReview[];
  claim: number;
}

export interface Login {
  username?: string;
  email?: string;
  password: string;
}

export interface PasswordChange {
  new_password1: string;
  new_password2: string;
}

/**
 * Serializer for requesting a password reset e-mail.
 */
export interface PasswordReset {
  email: string;
}

/**
 * Serializer for requesting a password reset e-mail.
 */
export interface PasswordResetConfirm {
  new_password1: string;
  new_password2: string;
  uid: string;
  token: string;
}

export interface PatchedClaimWithEvidence {
  id?: number;
  claim_text?: string;
  description?: string;
  topic?: Topic;
  source_of_claim?: Source;
  related_evidence?: Evidence[];
}

export interface PatchedEntity {
  id?: number;
  name?: string;
  description?: string;
}

export interface PatchedEvidence {
  id?: number;
  source_of_evidence?: Source;
  description?: string;
  expert_consensus_relationship?: EvidenceRelationship;
  num_expert_reviews?: number;
  community_consensus_relationship?: EvidenceRelationship;
  num_community_reviews?: number;
}

export interface PatchedEvidenceReview {
  deduced_evidence_relationship?: EvidenceRelationship;
  deduced_source_degree?: SourceDegree;
  is_reliable?: boolean;
  additional_comments?: string;
}

export interface PatchedSource {
  id?: number;
  authors?: PatchedEntity[];
  url?: string;
  title?: string;
  summary?: string;
  date_retrieved?: string;
  date_published?: string | null;
  source_degree?: SourceDegree | null;
}

/**
 * User model w/o password
 */
export interface PatchedUserDetails {
  pk?: number;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_
   * only.
   */
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

export type ProviderEnum = "facebook" | "twitter";

export interface Register {
  username: string;
  email?: string;
  password1: string;
  password2: string;
}

/**
 * serialize allauth SocialAccounts for use with a REST API
 */
export interface SocialAccount {
  id: number;
  provider: ProviderEnum;
  uid: string;
  last_login: string;
  date_joined: string;
}

export interface SocialConnect {
  access_token?: string;
  code?: string;
}

export interface Source {
  id: number;
  authors: Entity[];
  url?: string;
  title?: string;
  summary?: string;
  date_retrieved: string;
  date_published?: string | null;
  source_degree?: SourceDegree | null;
}

export type SourceDegree = "ORIGINAL" | "PRIMARY" | "SECONDARY" | "TERTIARY";

export interface Topic {
  name: string;
}

export interface TwitterConnect {
  access_token: string;
  token_secret: string;
}

/**
 * User model w/o password
 */
export interface UserDetails {
  pk: number;
  /**
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_
   * only.
   */
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

export interface VerifyEmail {
  key: string;
}

export interface ApiArticleInfoResponse {[key: string]: any}

export type ApiArticleInfoProps = Omit<GetProps<ApiArticleInfoResponse, unknown, void>, "path">;

export const ApiArticleInfo = (props: ApiArticleInfoProps) => (
  <Get<ApiArticleInfoResponse, unknown, void>
    path={`/api/article/`}
    {...props}
  />
);

export type UseApiArticleInfoProps = Omit<UseGetProps<ApiArticleInfoResponse, void>, "path">;

export const useApiArticleInfo = (props: UseApiArticleInfoProps) => useGet<ApiArticleInfoResponse, unknown, void>(`/api/article/`, props);


export interface ApiAuthorsRetrieveResponse {[key: string]: any}

export type ApiAuthorsRetrieveProps = Omit<GetProps<ApiAuthorsRetrieveResponse, unknown, void>, "path">;

/**
 * Takes a list of author names, gets or creates a list of matching
 * Entities and returns them.
 */
export const ApiAuthorsRetrieve = (props: ApiAuthorsRetrieveProps) => (
  <Get<ApiAuthorsRetrieveResponse, unknown, void>
    path={`/api/authors/`}
    {...props}
  />
);

export type UseApiAuthorsRetrieveProps = Omit<UseGetProps<ApiAuthorsRetrieveResponse, void>, "path">;

/**
 * Takes a list of author names, gets or creates a list of matching
 * Entities and returns them.
 */
export const useApiAuthorsRetrieve = (props: UseApiAuthorsRetrieveProps) => useGet<ApiAuthorsRetrieveResponse, unknown, void>(`/api/authors/`, props);


export type ApiAuthorInfoProps = Omit<GetProps<Entity, unknown, void>, "path">;

export const ApiAuthorInfo = (props: ApiAuthorInfoProps) => (
  <Get<Entity, unknown, void>
    path={`/api/authors/match/`}
    {...props}
  />
);

export type UseApiAuthorInfoProps = Omit<UseGetProps<Entity, void>, "path">;

export const useApiAuthorInfo = (props: UseApiAuthorInfoProps) => useGet<Entity, unknown, void>(`/api/authors/match/`, props);


export type ApiClaimsListProps = Omit<GetProps<Claim[], unknown, void>, "path">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const ApiClaimsList = (props: ApiClaimsListProps) => (
  <Get<Claim[], unknown, void>
    path={`/api/claims/`}
    {...props}
  />
);

export type UseApiClaimsListProps = Omit<UseGetProps<Claim[], void>, "path">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const useApiClaimsList = (props: UseApiClaimsListProps) => useGet<Claim[], unknown, void>(`/api/claims/`, props);


export type ApiClaimsCreateProps = Omit<MutateProps<Claim, unknown, void, Claim>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const ApiClaimsCreate = (props: ApiClaimsCreateProps) => (
  <Mutate<Claim, unknown, void, Claim>
    verb="POST"
    path={`/api/claims/`}
    {...props}
  />
);

export type UseApiClaimsCreateProps = Omit<UseMutateProps<Claim, void, Claim>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const useApiClaimsCreate = (props: UseApiClaimsCreateProps) => useMutate<Claim, unknown, void, Claim>("POST", `/api/claims/`, props);


export type ApiClaimDetailProps = Omit<GetProps<ClaimWithEvidence, unknown, void>, "path"> & {id: number};

export const ApiClaimDetail = ({id, ...props}: ApiClaimDetailProps) => (
  <Get<ClaimWithEvidence, unknown, void>
    path={`/api/claims/${id}`}
    {...props}
  />
);

export type UseApiClaimDetailProps = Omit<UseGetProps<ClaimWithEvidence, void>, "path"> & {id: number};

export const useApiClaimDetail = ({id, ...props}: UseApiClaimDetailProps) => useGet<ClaimWithEvidence, unknown, void>(`/api/claims/${id}`, props);


export type ApiClaimsUpdateProps = Omit<MutateProps<ClaimWithEvidence, unknown, void, ClaimWithEvidence>, "path" | "verb"> & {id: number};

export const ApiClaimsUpdate = ({id, ...props}: ApiClaimsUpdateProps) => (
  <Mutate<ClaimWithEvidence, unknown, void, ClaimWithEvidence>
    verb="PUT"
    path={`/api/claims/${id}`}
    {...props}
  />
);

export type UseApiClaimsUpdateProps = Omit<UseMutateProps<ClaimWithEvidence, void, ClaimWithEvidence>, "path" | "verb"> & {id: number};

export const useApiClaimsUpdate = ({id, ...props}: UseApiClaimsUpdateProps) => useMutate<ClaimWithEvidence, unknown, void, ClaimWithEvidence>("PUT", `/api/claims/${id}`, props);


export type ApiClaimsPartialUpdateProps = Omit<MutateProps<ClaimWithEvidence, unknown, void, PatchedClaimWithEvidence>, "path" | "verb"> & {id: number};

export const ApiClaimsPartialUpdate = ({id, ...props}: ApiClaimsPartialUpdateProps) => (
  <Mutate<ClaimWithEvidence, unknown, void, PatchedClaimWithEvidence>
    verb="PATCH"
    path={`/api/claims/${id}`}
    {...props}
  />
);

export type UseApiClaimsPartialUpdateProps = Omit<UseMutateProps<ClaimWithEvidence, void, PatchedClaimWithEvidence>, "path" | "verb"> & {id: number};

export const useApiClaimsPartialUpdate = ({id, ...props}: UseApiClaimsPartialUpdateProps) => useMutate<ClaimWithEvidence, unknown, void, PatchedClaimWithEvidence>("PATCH", `/api/claims/${id}`, props);


export type ApiEntitiesListProps = Omit<GetProps<Entity[], unknown, void>, "path">;

/**
 * REST endpoints for viewing and submitting entities
 */
export const ApiEntitiesList = (props: ApiEntitiesListProps) => (
  <Get<Entity[], unknown, void>
    path={`/api/entities/`}
    {...props}
  />
);

export type UseApiEntitiesListProps = Omit<UseGetProps<Entity[], void>, "path">;

/**
 * REST endpoints for viewing and submitting entities
 */
export const useApiEntitiesList = (props: UseApiEntitiesListProps) => useGet<Entity[], unknown, void>(`/api/entities/`, props);


export type ApiEntitiesCreateProps = Omit<MutateProps<Entity, unknown, void, Entity>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting entities
 */
export const ApiEntitiesCreate = (props: ApiEntitiesCreateProps) => (
  <Mutate<Entity, unknown, void, Entity>
    verb="POST"
    path={`/api/entities/`}
    {...props}
  />
);

export type UseApiEntitiesCreateProps = Omit<UseMutateProps<Entity, void, Entity>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting entities
 */
export const useApiEntitiesCreate = (props: UseApiEntitiesCreateProps) => useMutate<Entity, unknown, void, Entity>("POST", `/api/entities/`, props);


export type ApiEntityDetailProps = Omit<GetProps<Entity, unknown, void>, "path"> & {id: number};

export const ApiEntityDetail = ({id, ...props}: ApiEntityDetailProps) => (
  <Get<Entity, unknown, void>
    path={`/api/entities/${id}`}
    {...props}
  />
);

export type UseApiEntityDetailProps = Omit<UseGetProps<Entity, void>, "path"> & {id: number};

export const useApiEntityDetail = ({id, ...props}: UseApiEntityDetailProps) => useGet<Entity, unknown, void>(`/api/entities/${id}`, props);


export type ApiEntitiesUpdateProps = Omit<MutateProps<Entity, unknown, void, Entity>, "path" | "verb"> & {id: number};

export const ApiEntitiesUpdate = ({id, ...props}: ApiEntitiesUpdateProps) => (
  <Mutate<Entity, unknown, void, Entity>
    verb="PUT"
    path={`/api/entities/${id}`}
    {...props}
  />
);

export type UseApiEntitiesUpdateProps = Omit<UseMutateProps<Entity, void, Entity>, "path" | "verb"> & {id: number};

export const useApiEntitiesUpdate = ({id, ...props}: UseApiEntitiesUpdateProps) => useMutate<Entity, unknown, void, Entity>("PUT", `/api/entities/${id}`, props);


export type ApiEntitiesPartialUpdateProps = Omit<MutateProps<Entity, unknown, void, PatchedEntity>, "path" | "verb"> & {id: number};

export const ApiEntitiesPartialUpdate = ({id, ...props}: ApiEntitiesPartialUpdateProps) => (
  <Mutate<Entity, unknown, void, PatchedEntity>
    verb="PATCH"
    path={`/api/entities/${id}`}
    {...props}
  />
);

export type UseApiEntitiesPartialUpdateProps = Omit<UseMutateProps<Entity, void, PatchedEntity>, "path" | "verb"> & {id: number};

export const useApiEntitiesPartialUpdate = ({id, ...props}: UseApiEntitiesPartialUpdateProps) => useMutate<Entity, unknown, void, PatchedEntity>("PATCH", `/api/entities/${id}`, props);


export type ApiEvidenceListProps = Omit<GetProps<EvidenceWithReview[], unknown, void>, "path">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const ApiEvidenceList = (props: ApiEvidenceListProps) => (
  <Get<EvidenceWithReview[], unknown, void>
    path={`/api/evidence/`}
    {...props}
  />
);

export type UseApiEvidenceListProps = Omit<UseGetProps<EvidenceWithReview[], void>, "path">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const useApiEvidenceList = (props: UseApiEvidenceListProps) => useGet<EvidenceWithReview[], unknown, void>(`/api/evidence/`, props);


export type ApiEvidenceCreateProps = Omit<MutateProps<EvidenceWithReview, unknown, void, EvidenceWithReview>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const ApiEvidenceCreate = (props: ApiEvidenceCreateProps) => (
  <Mutate<EvidenceWithReview, unknown, void, EvidenceWithReview>
    verb="POST"
    path={`/api/evidence/`}
    {...props}
  />
);

export type UseApiEvidenceCreateProps = Omit<UseMutateProps<EvidenceWithReview, void, EvidenceWithReview>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting claims
 */
export const useApiEvidenceCreate = (props: UseApiEvidenceCreateProps) => useMutate<EvidenceWithReview, unknown, void, EvidenceWithReview>("POST", `/api/evidence/`, props);


export type ApiEvidenceReviewsListProps = Omit<GetProps<EvidenceReview[], unknown, void>, "path">;

/**
 * REST endpoints for viewing and submitting evidence reviews
 */
export const ApiEvidenceReviewsList = (props: ApiEvidenceReviewsListProps) => (
  <Get<EvidenceReview[], unknown, void>
    path={`/api/evidence/reviews/`}
    {...props}
  />
);

export type UseApiEvidenceReviewsListProps = Omit<UseGetProps<EvidenceReview[], void>, "path">;

/**
 * REST endpoints for viewing and submitting evidence reviews
 */
export const useApiEvidenceReviewsList = (props: UseApiEvidenceReviewsListProps) => useGet<EvidenceReview[], unknown, void>(`/api/evidence/reviews/`, props);


export type ApiEvidenceReviewsCreateProps = Omit<MutateProps<EvidenceReview, unknown, void, EvidenceReview>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting evidence reviews
 */
export const ApiEvidenceReviewsCreate = (props: ApiEvidenceReviewsCreateProps) => (
  <Mutate<EvidenceReview, unknown, void, EvidenceReview>
    verb="POST"
    path={`/api/evidence/reviews/`}
    {...props}
  />
);

export type UseApiEvidenceReviewsCreateProps = Omit<UseMutateProps<EvidenceReview, void, EvidenceReview>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting evidence reviews
 */
export const useApiEvidenceReviewsCreate = (props: UseApiEvidenceReviewsCreateProps) => useMutate<EvidenceReview, unknown, void, EvidenceReview>("POST", `/api/evidence/reviews/`, props);


export type ApiEvidenceReviewDetailProps = Omit<GetProps<EvidenceReview, unknown, void>, "path"> & {id: number};

export const ApiEvidenceReviewDetail = ({id, ...props}: ApiEvidenceReviewDetailProps) => (
  <Get<EvidenceReview, unknown, void>
    path={`/api/evidence/reviews/${id}`}
    {...props}
  />
);

export type UseApiEvidenceReviewDetailProps = Omit<UseGetProps<EvidenceReview, void>, "path"> & {id: number};

export const useApiEvidenceReviewDetail = ({id, ...props}: UseApiEvidenceReviewDetailProps) => useGet<EvidenceReview, unknown, void>(`/api/evidence/reviews/${id}`, props);


export type ApiEvidenceReviewsUpdateProps = Omit<MutateProps<EvidenceReview, unknown, void, EvidenceReview>, "path" | "verb"> & {id: number};

export const ApiEvidenceReviewsUpdate = ({id, ...props}: ApiEvidenceReviewsUpdateProps) => (
  <Mutate<EvidenceReview, unknown, void, EvidenceReview>
    verb="PUT"
    path={`/api/evidence/reviews/${id}`}
    {...props}
  />
);

export type UseApiEvidenceReviewsUpdateProps = Omit<UseMutateProps<EvidenceReview, void, EvidenceReview>, "path" | "verb"> & {id: number};

export const useApiEvidenceReviewsUpdate = ({id, ...props}: UseApiEvidenceReviewsUpdateProps) => useMutate<EvidenceReview, unknown, void, EvidenceReview>("PUT", `/api/evidence/reviews/${id}`, props);


export type ApiEvidenceReviewsPartialUpdateProps = Omit<MutateProps<EvidenceReview, unknown, void, PatchedEvidenceReview>, "path" | "verb"> & {id: number};

export const ApiEvidenceReviewsPartialUpdate = ({id, ...props}: ApiEvidenceReviewsPartialUpdateProps) => (
  <Mutate<EvidenceReview, unknown, void, PatchedEvidenceReview>
    verb="PATCH"
    path={`/api/evidence/reviews/${id}`}
    {...props}
  />
);

export type UseApiEvidenceReviewsPartialUpdateProps = Omit<UseMutateProps<EvidenceReview, void, PatchedEvidenceReview>, "path" | "verb"> & {id: number};

export const useApiEvidenceReviewsPartialUpdate = ({id, ...props}: UseApiEvidenceReviewsPartialUpdateProps) => useMutate<EvidenceReview, unknown, void, PatchedEvidenceReview>("PATCH", `/api/evidence/reviews/${id}`, props);


export type ApiEvidenceDetailProps = Omit<GetProps<Evidence, unknown, void>, "path"> & {id: number};

export const ApiEvidenceDetail = ({id, ...props}: ApiEvidenceDetailProps) => (
  <Get<Evidence, unknown, void>
    path={`/api/evidence/${id}`}
    {...props}
  />
);

export type UseApiEvidenceDetailProps = Omit<UseGetProps<Evidence, void>, "path"> & {id: number};

export const useApiEvidenceDetail = ({id, ...props}: UseApiEvidenceDetailProps) => useGet<Evidence, unknown, void>(`/api/evidence/${id}`, props);


export type ApiEvidenceUpdateProps = Omit<MutateProps<Evidence, unknown, void, Evidence>, "path" | "verb"> & {id: number};

export const ApiEvidenceUpdate = ({id, ...props}: ApiEvidenceUpdateProps) => (
  <Mutate<Evidence, unknown, void, Evidence>
    verb="PUT"
    path={`/api/evidence/${id}`}
    {...props}
  />
);

export type UseApiEvidenceUpdateProps = Omit<UseMutateProps<Evidence, void, Evidence>, "path" | "verb"> & {id: number};

export const useApiEvidenceUpdate = ({id, ...props}: UseApiEvidenceUpdateProps) => useMutate<Evidence, unknown, void, Evidence>("PUT", `/api/evidence/${id}`, props);


export type ApiEvidencePartialUpdateProps = Omit<MutateProps<Evidence, unknown, void, PatchedEvidence>, "path" | "verb"> & {id: number};

export const ApiEvidencePartialUpdate = ({id, ...props}: ApiEvidencePartialUpdateProps) => (
  <Mutate<Evidence, unknown, void, PatchedEvidence>
    verb="PATCH"
    path={`/api/evidence/${id}`}
    {...props}
  />
);

export type UseApiEvidencePartialUpdateProps = Omit<UseMutateProps<Evidence, void, PatchedEvidence>, "path" | "verb"> & {id: number};

export const useApiEvidencePartialUpdate = ({id, ...props}: UseApiEvidencePartialUpdateProps) => useMutate<Evidence, unknown, void, PatchedEvidence>("PATCH", `/api/evidence/${id}`, props);


export type ApiSourcesListProps = Omit<GetProps<Source[], unknown, void>, "path">;

/**
 * REST endpoints for viewing and submitting sources
 */
export const ApiSourcesList = (props: ApiSourcesListProps) => (
  <Get<Source[], unknown, void>
    path={`/api/sources/`}
    {...props}
  />
);

export type UseApiSourcesListProps = Omit<UseGetProps<Source[], void>, "path">;

/**
 * REST endpoints for viewing and submitting sources
 */
export const useApiSourcesList = (props: UseApiSourcesListProps) => useGet<Source[], unknown, void>(`/api/sources/`, props);


export type ApiSourcesCreateProps = Omit<MutateProps<Source, unknown, void, Source>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting sources
 */
export const ApiSourcesCreate = (props: ApiSourcesCreateProps) => (
  <Mutate<Source, unknown, void, Source>
    verb="POST"
    path={`/api/sources/`}
    {...props}
  />
);

export type UseApiSourcesCreateProps = Omit<UseMutateProps<Source, void, Source>, "path" | "verb">;

/**
 * REST endpoints for viewing and submitting sources
 */
export const useApiSourcesCreate = (props: UseApiSourcesCreateProps) => useMutate<Source, unknown, void, Source>("POST", `/api/sources/`, props);


export type ApiSourceDetailProps = Omit<GetProps<Source, unknown, void>, "path"> & {id: number};

export const ApiSourceDetail = ({id, ...props}: ApiSourceDetailProps) => (
  <Get<Source, unknown, void>
    path={`/api/sources/${id}`}
    {...props}
  />
);

export type UseApiSourceDetailProps = Omit<UseGetProps<Source, void>, "path"> & {id: number};

export const useApiSourceDetail = ({id, ...props}: UseApiSourceDetailProps) => useGet<Source, unknown, void>(`/api/sources/${id}`, props);


export type ApiSourcesUpdateProps = Omit<MutateProps<Source, unknown, void, Source>, "path" | "verb"> & {id: number};

export const ApiSourcesUpdate = ({id, ...props}: ApiSourcesUpdateProps) => (
  <Mutate<Source, unknown, void, Source>
    verb="PUT"
    path={`/api/sources/${id}`}
    {...props}
  />
);

export type UseApiSourcesUpdateProps = Omit<UseMutateProps<Source, void, Source>, "path" | "verb"> & {id: number};

export const useApiSourcesUpdate = ({id, ...props}: UseApiSourcesUpdateProps) => useMutate<Source, unknown, void, Source>("PUT", `/api/sources/${id}`, props);


export type ApiSourcesPartialUpdateProps = Omit<MutateProps<Source, unknown, void, PatchedSource>, "path" | "verb"> & {id: number};

export const ApiSourcesPartialUpdate = ({id, ...props}: ApiSourcesPartialUpdateProps) => (
  <Mutate<Source, unknown, void, PatchedSource>
    verb="PATCH"
    path={`/api/sources/${id}`}
    {...props}
  />
);

export type UseApiSourcesPartialUpdateProps = Omit<UseMutateProps<Source, void, PatchedSource>, "path" | "verb"> & {id: number};

export const useApiSourcesPartialUpdate = ({id, ...props}: UseApiSourcesPartialUpdateProps) => useMutate<Source, unknown, void, PatchedSource>("PATCH", `/api/sources/${id}`, props);


export type RestAuthFacebookConnectCreateProps = Omit<MutateProps<SocialConnect, unknown, void, SocialConnect>, "path" | "verb">;

export const RestAuthFacebookConnectCreate = (props: RestAuthFacebookConnectCreateProps) => (
  <Mutate<SocialConnect, unknown, void, SocialConnect>
    verb="POST"
    path={`/rest-auth/facebook/connect/`}
    {...props}
  />
);

export type UseRestAuthFacebookConnectCreateProps = Omit<UseMutateProps<SocialConnect, void, SocialConnect>, "path" | "verb">;

export const useRestAuthFacebookConnectCreate = (props: UseRestAuthFacebookConnectCreateProps) => useMutate<SocialConnect, unknown, void, SocialConnect>("POST", `/rest-auth/facebook/connect/`, props);


export type RestAuthLoginCreateProps = Omit<MutateProps<Login, unknown, void, Login>, "path" | "verb">;

/**
 * Check the credentials and return the REST Token
 * if the credentials are valid and authenticated.
 * Calls Django Auth login method to register User ID
 * in Django session framework
 * 
 * Accept the following POST parameters: username, password
 * Return the REST Framework Token Object's key.
 */
export const RestAuthLoginCreate = (props: RestAuthLoginCreateProps) => (
  <Mutate<Login, unknown, void, Login>
    verb="POST"
    path={`/rest-auth/login/`}
    {...props}
  />
);

export type UseRestAuthLoginCreateProps = Omit<UseMutateProps<Login, void, Login>, "path" | "verb">;

/**
 * Check the credentials and return the REST Token
 * if the credentials are valid and authenticated.
 * Calls Django Auth login method to register User ID
 * in Django session framework
 * 
 * Accept the following POST parameters: username, password
 * Return the REST Framework Token Object's key.
 */
export const useRestAuthLoginCreate = (props: UseRestAuthLoginCreateProps) => useMutate<Login, unknown, void, Login>("POST", `/rest-auth/login/`, props);


export interface RestAuthLogoutRetrieveResponse {[key: string]: any}

export type RestAuthLogoutRetrieveProps = Omit<GetProps<RestAuthLogoutRetrieveResponse, unknown, void>, "path">;

/**
 * Calls Django logout method and delete the Token object
 * assigned to the current User object.
 * 
 * Accepts/Returns nothing.
 */
export const RestAuthLogoutRetrieve = (props: RestAuthLogoutRetrieveProps) => (
  <Get<RestAuthLogoutRetrieveResponse, unknown, void>
    path={`/rest-auth/logout/`}
    {...props}
  />
);

export type UseRestAuthLogoutRetrieveProps = Omit<UseGetProps<RestAuthLogoutRetrieveResponse, void>, "path">;

/**
 * Calls Django logout method and delete the Token object
 * assigned to the current User object.
 * 
 * Accepts/Returns nothing.
 */
export const useRestAuthLogoutRetrieve = (props: UseRestAuthLogoutRetrieveProps) => useGet<RestAuthLogoutRetrieveResponse, unknown, void>(`/rest-auth/logout/`, props);


export interface RestAuthLogoutCreateResponse {[key: string]: any}

export interface RestAuthLogoutCreateRequestBody {[key: string]: any}

export type RestAuthLogoutCreateProps = Omit<MutateProps<RestAuthLogoutCreateResponse, unknown, void, RestAuthLogoutCreateRequestBody>, "path" | "verb">;

/**
 * Calls Django logout method and delete the Token object
 * assigned to the current User object.
 * 
 * Accepts/Returns nothing.
 */
export const RestAuthLogoutCreate = (props: RestAuthLogoutCreateProps) => (
  <Mutate<RestAuthLogoutCreateResponse, unknown, void, RestAuthLogoutCreateRequestBody>
    verb="POST"
    path={`/rest-auth/logout/`}
    {...props}
  />
);

export type UseRestAuthLogoutCreateProps = Omit<UseMutateProps<RestAuthLogoutCreateResponse, void, RestAuthLogoutCreateRequestBody>, "path" | "verb">;

/**
 * Calls Django logout method and delete the Token object
 * assigned to the current User object.
 * 
 * Accepts/Returns nothing.
 */
export const useRestAuthLogoutCreate = (props: UseRestAuthLogoutCreateProps) => useMutate<RestAuthLogoutCreateResponse, unknown, void, RestAuthLogoutCreateRequestBody>("POST", `/rest-auth/logout/`, props);


export type RestAuthPasswordChangeCreateProps = Omit<MutateProps<PasswordChange, unknown, void, PasswordChange>, "path" | "verb">;

/**
 * Calls Django Auth SetPasswordForm save method.
 * 
 * Accepts the following POST parameters: new_password1, new_password2
 * Returns the success/fail message.
 */
export const RestAuthPasswordChangeCreate = (props: RestAuthPasswordChangeCreateProps) => (
  <Mutate<PasswordChange, unknown, void, PasswordChange>
    verb="POST"
    path={`/rest-auth/password/change/`}
    {...props}
  />
);

export type UseRestAuthPasswordChangeCreateProps = Omit<UseMutateProps<PasswordChange, void, PasswordChange>, "path" | "verb">;

/**
 * Calls Django Auth SetPasswordForm save method.
 * 
 * Accepts the following POST parameters: new_password1, new_password2
 * Returns the success/fail message.
 */
export const useRestAuthPasswordChangeCreate = (props: UseRestAuthPasswordChangeCreateProps) => useMutate<PasswordChange, unknown, void, PasswordChange>("POST", `/rest-auth/password/change/`, props);


export type RestAuthPasswordResetCreateProps = Omit<MutateProps<PasswordReset, unknown, void, PasswordReset>, "path" | "verb">;

/**
 * Calls Django Auth PasswordResetForm save method.
 * 
 * Accepts the following POST parameters: email
 * Returns the success/fail message.
 */
export const RestAuthPasswordResetCreate = (props: RestAuthPasswordResetCreateProps) => (
  <Mutate<PasswordReset, unknown, void, PasswordReset>
    verb="POST"
    path={`/rest-auth/password/reset/`}
    {...props}
  />
);

export type UseRestAuthPasswordResetCreateProps = Omit<UseMutateProps<PasswordReset, void, PasswordReset>, "path" | "verb">;

/**
 * Calls Django Auth PasswordResetForm save method.
 * 
 * Accepts the following POST parameters: email
 * Returns the success/fail message.
 */
export const useRestAuthPasswordResetCreate = (props: UseRestAuthPasswordResetCreateProps) => useMutate<PasswordReset, unknown, void, PasswordReset>("POST", `/rest-auth/password/reset/`, props);


export type RestAuthPasswordResetConfirmCreateProps = Omit<MutateProps<PasswordResetConfirm, unknown, void, PasswordResetConfirm>, "path" | "verb">;

/**
 * Password reset e-mail link is confirmed, therefore
 * this resets the user's password.
 * 
 * Accepts the following POST parameters: token, uid,
 *     new_password1, new_password2
 * Returns the success/fail message.
 */
export const RestAuthPasswordResetConfirmCreate = (props: RestAuthPasswordResetConfirmCreateProps) => (
  <Mutate<PasswordResetConfirm, unknown, void, PasswordResetConfirm>
    verb="POST"
    path={`/rest-auth/password/reset/confirm/`}
    {...props}
  />
);

export type UseRestAuthPasswordResetConfirmCreateProps = Omit<UseMutateProps<PasswordResetConfirm, void, PasswordResetConfirm>, "path" | "verb">;

/**
 * Password reset e-mail link is confirmed, therefore
 * this resets the user's password.
 * 
 * Accepts the following POST parameters: token, uid,
 *     new_password1, new_password2
 * Returns the success/fail message.
 */
export const useRestAuthPasswordResetConfirmCreate = (props: UseRestAuthPasswordResetConfirmCreateProps) => useMutate<PasswordResetConfirm, unknown, void, PasswordResetConfirm>("POST", `/rest-auth/password/reset/confirm/`, props);


export type RestAuthRegistrationCreateProps = Omit<MutateProps<Register, unknown, void, Register>, "path" | "verb">;

export const RestAuthRegistrationCreate = (props: RestAuthRegistrationCreateProps) => (
  <Mutate<Register, unknown, void, Register>
    verb="POST"
    path={`/rest-auth/registration/`}
    {...props}
  />
);

export type UseRestAuthRegistrationCreateProps = Omit<UseMutateProps<Register, void, Register>, "path" | "verb">;

export const useRestAuthRegistrationCreate = (props: UseRestAuthRegistrationCreateProps) => useMutate<Register, unknown, void, Register>("POST", `/rest-auth/registration/`, props);


export type RestAuthRegistrationVerifyEmailCreateProps = Omit<MutateProps<VerifyEmail, unknown, void, VerifyEmail>, "path" | "verb">;

export const RestAuthRegistrationVerifyEmailCreate = (props: RestAuthRegistrationVerifyEmailCreateProps) => (
  <Mutate<VerifyEmail, unknown, void, VerifyEmail>
    verb="POST"
    path={`/rest-auth/registration/verify-email/`}
    {...props}
  />
);

export type UseRestAuthRegistrationVerifyEmailCreateProps = Omit<UseMutateProps<VerifyEmail, void, VerifyEmail>, "path" | "verb">;

export const useRestAuthRegistrationVerifyEmailCreate = (props: UseRestAuthRegistrationVerifyEmailCreateProps) => useMutate<VerifyEmail, unknown, void, VerifyEmail>("POST", `/rest-auth/registration/verify-email/`, props);


export type RestAuthTwitterConnectCreateProps = Omit<MutateProps<TwitterConnect, unknown, void, TwitterConnect>, "path" | "verb">;

export const RestAuthTwitterConnectCreate = (props: RestAuthTwitterConnectCreateProps) => (
  <Mutate<TwitterConnect, unknown, void, TwitterConnect>
    verb="POST"
    path={`/rest-auth/twitter/connect/`}
    {...props}
  />
);

export type UseRestAuthTwitterConnectCreateProps = Omit<UseMutateProps<TwitterConnect, void, TwitterConnect>, "path" | "verb">;

export const useRestAuthTwitterConnectCreate = (props: UseRestAuthTwitterConnectCreateProps) => useMutate<TwitterConnect, unknown, void, TwitterConnect>("POST", `/rest-auth/twitter/connect/`, props);


export type RestAuthUserRetrieveProps = Omit<GetProps<UserDetails, unknown, void>, "path">;

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 * 
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 * 
 * Returns UserModel fields.
 */
export const RestAuthUserRetrieve = (props: RestAuthUserRetrieveProps) => (
  <Get<UserDetails, unknown, void>
    path={`/rest-auth/user/`}
    {...props}
  />
);

export type UseRestAuthUserRetrieveProps = Omit<UseGetProps<UserDetails, void>, "path">;

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 * 
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 * 
 * Returns UserModel fields.
 */
export const useRestAuthUserRetrieve = (props: UseRestAuthUserRetrieveProps) => useGet<UserDetails, unknown, void>(`/rest-auth/user/`, props);


export type RestAuthUserUpdateProps = Omit<MutateProps<UserDetails, unknown, void, UserDetails>, "path" | "verb">;

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 * 
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 * 
 * Returns UserModel fields.
 */
export const RestAuthUserUpdate = (props: RestAuthUserUpdateProps) => (
  <Mutate<UserDetails, unknown, void, UserDetails>
    verb="PUT"
    path={`/rest-auth/user/`}
    {...props}
  />
);

export type UseRestAuthUserUpdateProps = Omit<UseMutateProps<UserDetails, void, UserDetails>, "path" | "verb">;

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 * 
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 * 
 * Returns UserModel fields.
 */
export const useRestAuthUserUpdate = (props: UseRestAuthUserUpdateProps) => useMutate<UserDetails, unknown, void, UserDetails>("PUT", `/rest-auth/user/`, props);


export type RestAuthUserPartialUpdateProps = Omit<MutateProps<UserDetails, unknown, void, PatchedUserDetails>, "path" | "verb">;

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 * 
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 * 
 * Returns UserModel fields.
 */
export const RestAuthUserPartialUpdate = (props: RestAuthUserPartialUpdateProps) => (
  <Mutate<UserDetails, unknown, void, PatchedUserDetails>
    verb="PATCH"
    path={`/rest-auth/user/`}
    {...props}
  />
);

export type UseRestAuthUserPartialUpdateProps = Omit<UseMutateProps<UserDetails, void, PatchedUserDetails>, "path" | "verb">;

/**
 * Reads and updates UserModel fields
 * Accepts GET, PUT, PATCH methods.
 * 
 * Default accepted fields: username, first_name, last_name
 * Default display fields: pk, username, email, first_name, last_name
 * Read-only fields: pk, email
 * 
 * Returns UserModel fields.
 */
export const useRestAuthUserPartialUpdate = (props: UseRestAuthUserPartialUpdateProps) => useMutate<UserDetails, unknown, void, PatchedUserDetails>("PATCH", `/rest-auth/user/`, props);


export type SocialaccountsListProps = Omit<GetProps<SocialAccount[], unknown, void>, "path">;

/**
 * List SocialAccounts for the currently logged in user
 */
export const SocialaccountsList = (props: SocialaccountsListProps) => (
  <Get<SocialAccount[], unknown, void>
    path={`/socialaccounts/`}
    {...props}
  />
);

export type UseSocialaccountsListProps = Omit<UseGetProps<SocialAccount[], void>, "path">;

/**
 * List SocialAccounts for the currently logged in user
 */
export const useSocialaccountsList = (props: UseSocialaccountsListProps) => useGet<SocialAccount[], unknown, void>(`/socialaccounts/`, props);


export type SocialaccountsDisconnectCreateProps = Omit<MutateProps<SocialConnect, unknown, void, SocialConnect>, "path" | "verb"> & {id: string};

/**
 * Disconnect SocialAccount from remote service for
 * the currently logged in user
 */
export const SocialaccountsDisconnectCreate = ({id, ...props}: SocialaccountsDisconnectCreateProps) => (
  <Mutate<SocialConnect, unknown, void, SocialConnect>
    verb="POST"
    path={`/socialaccounts/${id}/disconnect/`}
    {...props}
  />
);

export type UseSocialaccountsDisconnectCreateProps = Omit<UseMutateProps<SocialConnect, void, SocialConnect>, "path" | "verb"> & {id: string};

/**
 * Disconnect SocialAccount from remote service for
 * the currently logged in user
 */
export const useSocialaccountsDisconnectCreate = ({id, ...props}: UseSocialaccountsDisconnectCreateProps) => useMutate<SocialConnect, unknown, void, SocialConnect>("POST", `/socialaccounts/${id}/disconnect/`, props);

