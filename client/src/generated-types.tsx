/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackObjectID: string;
};

/** @model */
export type Bike = {
  __typename?: 'Bike';
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  /**
   * @oneToOne(key: 'ownerId')
   * @oneToOne
   */
  owner: User;
  /** @manyToOne(field: 'bikes', key: 'theftId') */
  theft?: Maybe<Theft>;
};

export type BikeFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  description?: Maybe<StringInput>;
  ownerId?: Maybe<GraphbackObjectIdInput>;
  theftId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<BikeFilter>>;
  or?: Maybe<Array<BikeFilter>>;
  not?: Maybe<BikeFilter>;
};

export type BikeResultList = {
  __typename?: 'BikeResultList';
  items: Array<Maybe<Bike>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type BikeSubscriptionFilter = {
  and?: Maybe<Array<BikeSubscriptionFilter>>;
  or?: Maybe<Array<BikeSubscriptionFilter>>;
  not?: Maybe<BikeSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  description?: Maybe<StringInput>;
};

export type CreateBikeInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  description?: Maybe<Scalars['String']>;
  ownerId: Scalars['GraphbackObjectID'];
  theftId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateTheftInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  date: Scalars['String'];
  location: Scalars['String'];
  comments?: Maybe<Scalars['String']>;
  ownerId: Scalars['GraphbackObjectID'];
};

export type CreateUserInput = {
  _id?: Maybe<Scalars['GraphbackObjectID']>;
  name: Scalars['String'];
  contact: Scalars['String'];
};

export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

export type MutateBikeInput = {
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['GraphbackObjectID']>;
  theftId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateTheftInput = {
  _id: Scalars['GraphbackObjectID'];
  date?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateUserInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTheft?: Maybe<Theft>;
  updateTheft?: Maybe<Theft>;
  deleteTheft?: Maybe<Theft>;
  createBike?: Maybe<Bike>;
  updateBike?: Maybe<Bike>;
  deleteBike?: Maybe<Bike>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
};

export type MutationCreateTheftArgs = {
  input: CreateTheftInput;
};

export type MutationUpdateTheftArgs = {
  input: MutateTheftInput;
};

export type MutationDeleteTheftArgs = {
  input: MutateTheftInput;
};

export type MutationCreateBikeArgs = {
  input: CreateBikeInput;
};

export type MutationUpdateBikeArgs = {
  input: MutateBikeInput;
};

export type MutationDeleteBikeArgs = {
  input: MutateBikeInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  input: MutateUserInput;
};

export type MutationDeleteUserArgs = {
  input: MutateUserInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getTheft?: Maybe<Theft>;
  findThefts: TheftResultList;
  getBike?: Maybe<Bike>;
  findBikes: BikeResultList;
  getUser?: Maybe<User>;
  findUsers: UserResultList;
};

export type QueryGetTheftArgs = {
  id: Scalars['GraphbackObjectID'];
};

export type QueryFindTheftsArgs = {
  filter?: Maybe<TheftFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export type QueryGetBikeArgs = {
  id: Scalars['GraphbackObjectID'];
};

export type QueryFindBikesArgs = {
  filter?: Maybe<BikeFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export type QueryGetUserArgs = {
  id: Scalars['GraphbackObjectID'];
};

export type QueryFindUsersArgs = {
  filter?: Maybe<UserFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC',
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newTheft: Theft;
  updatedTheft: Theft;
  deletedTheft: Theft;
  newBike: Bike;
  updatedBike: Bike;
  deletedBike: Bike;
  newUser: User;
  updatedUser: User;
  deletedUser: User;
};

export type SubscriptionNewTheftArgs = {
  filter?: Maybe<TheftSubscriptionFilter>;
};

export type SubscriptionUpdatedTheftArgs = {
  filter?: Maybe<TheftSubscriptionFilter>;
};

export type SubscriptionDeletedTheftArgs = {
  filter?: Maybe<TheftSubscriptionFilter>;
};

export type SubscriptionNewBikeArgs = {
  filter?: Maybe<BikeSubscriptionFilter>;
};

export type SubscriptionUpdatedBikeArgs = {
  filter?: Maybe<BikeSubscriptionFilter>;
};

export type SubscriptionDeletedBikeArgs = {
  filter?: Maybe<BikeSubscriptionFilter>;
};

export type SubscriptionNewUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type SubscriptionUpdatedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type SubscriptionDeletedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

/** @model */
export type Theft = {
  __typename?: 'Theft';
  _id: Scalars['GraphbackObjectID'];
  date: Scalars['String'];
  location: Scalars['String'];
  /**
   * @oneToMany(field: 'theft', key: 'theftId')
   * @oneToMany(field: 'theft')
   */
  bikes?: Maybe<Array<Bike>>;
  comments?: Maybe<Scalars['String']>;
  /**
   * @oneToOne(key: 'ownerId')
   * @oneToOne
   */
  owner: User;
};

/** @model */
export type TheftBikesArgs = {
  filter?: Maybe<BikeFilter>;
};

export type TheftFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  date?: Maybe<StringInput>;
  location?: Maybe<StringInput>;
  comments?: Maybe<StringInput>;
  ownerId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<TheftFilter>>;
  or?: Maybe<Array<TheftFilter>>;
  not?: Maybe<TheftFilter>;
};

export type TheftResultList = {
  __typename?: 'TheftResultList';
  items: Array<Maybe<Theft>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type TheftSubscriptionFilter = {
  and?: Maybe<Array<TheftSubscriptionFilter>>;
  or?: Maybe<Array<TheftSubscriptionFilter>>;
  not?: Maybe<TheftSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  date?: Maybe<StringInput>;
  location?: Maybe<StringInput>;
  comments?: Maybe<StringInput>;
};

/** @model */
export type User = {
  __typename?: 'User';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  contact: Scalars['String'];
};

export type UserFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  contact?: Maybe<StringInput>;
  and?: Maybe<Array<UserFilter>>;
  or?: Maybe<Array<UserFilter>>;
  not?: Maybe<UserFilter>;
};

export type UserResultList = {
  __typename?: 'UserResultList';
  items: Array<Maybe<User>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type UserSubscriptionFilter = {
  and?: Maybe<Array<UserSubscriptionFilter>>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  not?: Maybe<UserSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  contact?: Maybe<StringInput>;
};

export type TheftFieldsFragment = { __typename?: 'Theft' } & Pick<Theft, any>;

export type TheftExpandedFieldsFragment = { __typename?: 'Theft' } & Pick<
  Theft,
  any
> & {
    bikes?: Maybe<Array<{ __typename?: 'Bike' } & Pick<Bike, any>>>;
    owner: { __typename?: 'User' } & Pick<User, any>;
  };

export type BikeFieldsFragment = { __typename?: 'Bike' } & Pick<Bike, any>;

export type BikeExpandedFieldsFragment = { __typename?: 'Bike' } & Pick<
  Bike,
  any
> & {
    owner: { __typename?: 'User' } & Pick<User, any>;
    theft?: Maybe<{ __typename?: 'Theft' } & Pick<Theft, any>>;
  };

export type UserFieldsFragment = { __typename?: 'User' } & Pick<User, any>;

export type UserExpandedFieldsFragment = { __typename?: 'User' } & Pick<
  User,
  any
>;

export type FindTheftsQueryVariables = Exact<{
  filter?: Maybe<TheftFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;

export type FindTheftsQuery = { __typename?: 'Query' } & {
  findThefts: { __typename?: 'TheftResultList' } & Pick<
    TheftResultList,
    any
  > & {
      items: Array<
        Maybe<{ __typename?: 'Theft' } & TheftExpandedFieldsFragment>
      >;
    };
};

export type GetTheftQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;

export type GetTheftQuery = { __typename?: 'Query' } & {
  getTheft?: Maybe<{ __typename?: 'Theft' } & TheftExpandedFieldsFragment>;
};

export type FindBikesQueryVariables = Exact<{
  filter?: Maybe<BikeFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;

export type FindBikesQuery = { __typename?: 'Query' } & {
  findBikes: { __typename?: 'BikeResultList' } & Pick<BikeResultList, any> & {
      items: Array<Maybe<{ __typename?: 'Bike' } & BikeExpandedFieldsFragment>>;
    };
};

export type GetBikeQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;

export type GetBikeQuery = { __typename?: 'Query' } & {
  getBike?: Maybe<{ __typename?: 'Bike' } & BikeExpandedFieldsFragment>;
};

export type FindUsersQueryVariables = Exact<{
  filter?: Maybe<UserFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;

export type FindUsersQuery = { __typename?: 'Query' } & {
  findUsers: { __typename?: 'UserResultList' } & Pick<UserResultList, any> & {
      items: Array<Maybe<{ __typename?: 'User' } & UserExpandedFieldsFragment>>;
    };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;

export type GetUserQuery = { __typename?: 'Query' } & {
  getUser?: Maybe<{ __typename?: 'User' } & UserExpandedFieldsFragment>;
};

export type CreateTheftMutationVariables = Exact<{
  input: CreateTheftInput;
}>;

export type CreateTheftMutation = { __typename?: 'Mutation' } & {
  createTheft?: Maybe<{ __typename?: 'Theft' } & TheftFieldsFragment>;
};

export type UpdateTheftMutationVariables = Exact<{
  input: MutateTheftInput;
}>;

export type UpdateTheftMutation = { __typename?: 'Mutation' } & {
  updateTheft?: Maybe<{ __typename?: 'Theft' } & TheftFieldsFragment>;
};

export type DeleteTheftMutationVariables = Exact<{
  input: MutateTheftInput;
}>;

export type DeleteTheftMutation = { __typename?: 'Mutation' } & {
  deleteTheft?: Maybe<{ __typename?: 'Theft' } & TheftFieldsFragment>;
};

export type CreateBikeMutationVariables = Exact<{
  input: CreateBikeInput;
}>;

export type CreateBikeMutation = { __typename?: 'Mutation' } & {
  createBike?: Maybe<{ __typename?: 'Bike' } & BikeFieldsFragment>;
};

export type UpdateBikeMutationVariables = Exact<{
  input: MutateBikeInput;
}>;

export type UpdateBikeMutation = { __typename?: 'Mutation' } & {
  updateBike?: Maybe<{ __typename?: 'Bike' } & BikeFieldsFragment>;
};

export type DeleteBikeMutationVariables = Exact<{
  input: MutateBikeInput;
}>;

export type DeleteBikeMutation = { __typename?: 'Mutation' } & {
  deleteBike?: Maybe<{ __typename?: 'Bike' } & BikeFieldsFragment>;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>;
};

export type UpdateUserMutationVariables = Exact<{
  input: MutateUserInput;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>;
};

export type DeleteUserMutationVariables = Exact<{
  input: MutateUserInput;
}>;

export type DeleteUserMutation = { __typename?: 'Mutation' } & {
  deleteUser?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>;
};

export type NewTheftSubscriptionVariables = Exact<{
  filter?: Maybe<TheftSubscriptionFilter>;
}>;

export type NewTheftSubscription = { __typename?: 'Subscription' } & {
  newTheft: { __typename?: 'Theft' } & TheftFieldsFragment;
};

export type UpdatedTheftSubscriptionVariables = Exact<{
  filter?: Maybe<TheftSubscriptionFilter>;
}>;

export type UpdatedTheftSubscription = { __typename?: 'Subscription' } & {
  updatedTheft: { __typename?: 'Theft' } & TheftFieldsFragment;
};

export type DeletedTheftSubscriptionVariables = Exact<{
  filter?: Maybe<TheftSubscriptionFilter>;
}>;

export type DeletedTheftSubscription = { __typename?: 'Subscription' } & {
  deletedTheft: { __typename?: 'Theft' } & TheftFieldsFragment;
};

export type NewBikeSubscriptionVariables = Exact<{
  filter?: Maybe<BikeSubscriptionFilter>;
}>;

export type NewBikeSubscription = { __typename?: 'Subscription' } & {
  newBike: { __typename?: 'Bike' } & BikeFieldsFragment;
};

export type UpdatedBikeSubscriptionVariables = Exact<{
  filter?: Maybe<BikeSubscriptionFilter>;
}>;

export type UpdatedBikeSubscription = { __typename?: 'Subscription' } & {
  updatedBike: { __typename?: 'Bike' } & BikeFieldsFragment;
};

export type DeletedBikeSubscriptionVariables = Exact<{
  filter?: Maybe<BikeSubscriptionFilter>;
}>;

export type DeletedBikeSubscription = { __typename?: 'Subscription' } & {
  deletedBike: { __typename?: 'Bike' } & BikeFieldsFragment;
};

export type NewUserSubscriptionVariables = Exact<{
  filter?: Maybe<UserSubscriptionFilter>;
}>;

export type NewUserSubscription = { __typename?: 'Subscription' } & {
  newUser: { __typename?: 'User' } & UserFieldsFragment;
};

export type UpdatedUserSubscriptionVariables = Exact<{
  filter?: Maybe<UserSubscriptionFilter>;
}>;

export type UpdatedUserSubscription = { __typename?: 'Subscription' } & {
  updatedUser: { __typename?: 'User' } & UserFieldsFragment;
};

export type DeletedUserSubscriptionVariables = Exact<{
  filter?: Maybe<UserSubscriptionFilter>;
}>;

export type DeletedUserSubscription = { __typename?: 'Subscription' } & {
  deletedUser: { __typename?: 'User' } & UserFieldsFragment;
};

export const TheftFieldsFragmentDoc = gql`
  fragment TheftFields on Theft {
    _id
    date
    location
    comments
  }
`;
export const TheftExpandedFieldsFragmentDoc = gql`
  fragment TheftExpandedFields on Theft {
    _id
    date
    location
    bikes {
      _id
      description
    }
    comments
    owner {
      _id
      name
      contact
    }
  }
`;
export const BikeFieldsFragmentDoc = gql`
  fragment BikeFields on Bike {
    _id
    description
  }
`;
export const BikeExpandedFieldsFragmentDoc = gql`
  fragment BikeExpandedFields on Bike {
    _id
    description
    owner {
      _id
      name
      contact
    }
    theft {
      _id
      date
      location
      comments
    }
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    _id
    name
    contact
  }
`;
export const UserExpandedFieldsFragmentDoc = gql`
  fragment UserExpandedFields on User {
    _id
    name
    contact
  }
`;
export const FindTheftsDocument = gql`
  query findThefts(
    $filter: TheftFilter
    $page: PageRequest
    $orderBy: OrderByInput
  ) {
    findThefts(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...TheftExpandedFields
      }
      offset
      limit
      count
    }
  }
  ${TheftExpandedFieldsFragmentDoc}
`;

/**
 * __useFindTheftsQuery__
 *
 * To run a query within a React component, call `useFindTheftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTheftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTheftsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindTheftsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FindTheftsQuery,
    FindTheftsQueryVariables
  >
) {
  return Apollo.useQuery<FindTheftsQuery, FindTheftsQueryVariables>(
    FindTheftsDocument,
    baseOptions
  );
}
export function useFindTheftsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindTheftsQuery,
    FindTheftsQueryVariables
  >
) {
  return Apollo.useLazyQuery<FindTheftsQuery, FindTheftsQueryVariables>(
    FindTheftsDocument,
    baseOptions
  );
}
export type FindTheftsQueryHookResult = ReturnType<typeof useFindTheftsQuery>;
export type FindTheftsLazyQueryHookResult = ReturnType<
  typeof useFindTheftsLazyQuery
>;
export type FindTheftsQueryResult = Apollo.QueryResult<
  FindTheftsQuery,
  FindTheftsQueryVariables
>;
export const GetTheftDocument = gql`
  query getTheft($id: GraphbackObjectID!) {
    getTheft(id: $id) {
      ...TheftExpandedFields
    }
  }
  ${TheftExpandedFieldsFragmentDoc}
`;

/**
 * __useGetTheftQuery__
 *
 * To run a query within a React component, call `useGetTheftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTheftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTheftQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTheftQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTheftQuery, GetTheftQueryVariables>
) {
  return Apollo.useQuery<GetTheftQuery, GetTheftQueryVariables>(
    GetTheftDocument,
    baseOptions
  );
}
export function useGetTheftLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTheftQuery,
    GetTheftQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetTheftQuery, GetTheftQueryVariables>(
    GetTheftDocument,
    baseOptions
  );
}
export type GetTheftQueryHookResult = ReturnType<typeof useGetTheftQuery>;
export type GetTheftLazyQueryHookResult = ReturnType<
  typeof useGetTheftLazyQuery
>;
export type GetTheftQueryResult = Apollo.QueryResult<
  GetTheftQuery,
  GetTheftQueryVariables
>;
export const FindBikesDocument = gql`
  query findBikes(
    $filter: BikeFilter
    $page: PageRequest
    $orderBy: OrderByInput
  ) {
    findBikes(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...BikeExpandedFields
      }
      offset
      limit
      count
    }
  }
  ${BikeExpandedFieldsFragmentDoc}
`;

/**
 * __useFindBikesQuery__
 *
 * To run a query within a React component, call `useFindBikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBikesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindBikesQuery(
  baseOptions?: Apollo.QueryHookOptions<FindBikesQuery, FindBikesQueryVariables>
) {
  return Apollo.useQuery<FindBikesQuery, FindBikesQueryVariables>(
    FindBikesDocument,
    baseOptions
  );
}
export function useFindBikesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindBikesQuery,
    FindBikesQueryVariables
  >
) {
  return Apollo.useLazyQuery<FindBikesQuery, FindBikesQueryVariables>(
    FindBikesDocument,
    baseOptions
  );
}
export type FindBikesQueryHookResult = ReturnType<typeof useFindBikesQuery>;
export type FindBikesLazyQueryHookResult = ReturnType<
  typeof useFindBikesLazyQuery
>;
export type FindBikesQueryResult = Apollo.QueryResult<
  FindBikesQuery,
  FindBikesQueryVariables
>;
export const GetBikeDocument = gql`
  query getBike($id: GraphbackObjectID!) {
    getBike(id: $id) {
      ...BikeExpandedFields
    }
  }
  ${BikeExpandedFieldsFragmentDoc}
`;

/**
 * __useGetBikeQuery__
 *
 * To run a query within a React component, call `useGetBikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBikeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBikeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBikeQuery, GetBikeQueryVariables>
) {
  return Apollo.useQuery<GetBikeQuery, GetBikeQueryVariables>(
    GetBikeDocument,
    baseOptions
  );
}
export function useGetBikeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBikeQuery, GetBikeQueryVariables>
) {
  return Apollo.useLazyQuery<GetBikeQuery, GetBikeQueryVariables>(
    GetBikeDocument,
    baseOptions
  );
}
export type GetBikeQueryHookResult = ReturnType<typeof useGetBikeQuery>;
export type GetBikeLazyQueryHookResult = ReturnType<typeof useGetBikeLazyQuery>;
export type GetBikeQueryResult = Apollo.QueryResult<
  GetBikeQuery,
  GetBikeQueryVariables
>;
export const FindUsersDocument = gql`
  query findUsers(
    $filter: UserFilter
    $page: PageRequest
    $orderBy: OrderByInput
  ) {
    findUsers(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...UserExpandedFields
      }
      offset
      limit
      count
    }
  }
  ${UserExpandedFieldsFragmentDoc}
`;

/**
 * __useFindUsersQuery__
 *
 * To run a query within a React component, call `useFindUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<FindUsersQuery, FindUsersQueryVariables>
) {
  return Apollo.useQuery<FindUsersQuery, FindUsersQueryVariables>(
    FindUsersDocument,
    baseOptions
  );
}
export function useFindUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindUsersQuery,
    FindUsersQueryVariables
  >
) {
  return Apollo.useLazyQuery<FindUsersQuery, FindUsersQueryVariables>(
    FindUsersDocument,
    baseOptions
  );
}
export type FindUsersQueryHookResult = ReturnType<typeof useFindUsersQuery>;
export type FindUsersLazyQueryHookResult = ReturnType<
  typeof useFindUsersLazyQuery
>;
export type FindUsersQueryResult = Apollo.QueryResult<
  FindUsersQuery,
  FindUsersQueryVariables
>;
export const GetUserDocument = gql`
  query getUser($id: GraphbackObjectID!) {
    getUser(id: $id) {
      ...UserExpandedFields
    }
  }
  ${UserExpandedFieldsFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    baseOptions
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const CreateTheftDocument = gql`
  mutation createTheft($input: CreateTheftInput!) {
    createTheft(input: $input) {
      ...TheftFields
    }
  }
  ${TheftFieldsFragmentDoc}
`;
export type CreateTheftMutationFn = Apollo.MutationFunction<
  CreateTheftMutation,
  CreateTheftMutationVariables
>;

/**
 * __useCreateTheftMutation__
 *
 * To run a mutation, you first call `useCreateTheftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTheftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTheftMutation, { data, loading, error }] = useCreateTheftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTheftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTheftMutation,
    CreateTheftMutationVariables
  >
) {
  return Apollo.useMutation<CreateTheftMutation, CreateTheftMutationVariables>(
    CreateTheftDocument,
    baseOptions
  );
}
export type CreateTheftMutationHookResult = ReturnType<
  typeof useCreateTheftMutation
>;
export type CreateTheftMutationResult = Apollo.MutationResult<CreateTheftMutation>;
export type CreateTheftMutationOptions = Apollo.BaseMutationOptions<
  CreateTheftMutation,
  CreateTheftMutationVariables
>;
export const UpdateTheftDocument = gql`
  mutation updateTheft($input: MutateTheftInput!) {
    updateTheft(input: $input) {
      ...TheftFields
    }
  }
  ${TheftFieldsFragmentDoc}
`;
export type UpdateTheftMutationFn = Apollo.MutationFunction<
  UpdateTheftMutation,
  UpdateTheftMutationVariables
>;

/**
 * __useUpdateTheftMutation__
 *
 * To run a mutation, you first call `useUpdateTheftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTheftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTheftMutation, { data, loading, error }] = useUpdateTheftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTheftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTheftMutation,
    UpdateTheftMutationVariables
  >
) {
  return Apollo.useMutation<UpdateTheftMutation, UpdateTheftMutationVariables>(
    UpdateTheftDocument,
    baseOptions
  );
}
export type UpdateTheftMutationHookResult = ReturnType<
  typeof useUpdateTheftMutation
>;
export type UpdateTheftMutationResult = Apollo.MutationResult<UpdateTheftMutation>;
export type UpdateTheftMutationOptions = Apollo.BaseMutationOptions<
  UpdateTheftMutation,
  UpdateTheftMutationVariables
>;
export const DeleteTheftDocument = gql`
  mutation deleteTheft($input: MutateTheftInput!) {
    deleteTheft(input: $input) {
      ...TheftFields
    }
  }
  ${TheftFieldsFragmentDoc}
`;
export type DeleteTheftMutationFn = Apollo.MutationFunction<
  DeleteTheftMutation,
  DeleteTheftMutationVariables
>;

/**
 * __useDeleteTheftMutation__
 *
 * To run a mutation, you first call `useDeleteTheftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTheftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTheftMutation, { data, loading, error }] = useDeleteTheftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTheftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTheftMutation,
    DeleteTheftMutationVariables
  >
) {
  return Apollo.useMutation<DeleteTheftMutation, DeleteTheftMutationVariables>(
    DeleteTheftDocument,
    baseOptions
  );
}
export type DeleteTheftMutationHookResult = ReturnType<
  typeof useDeleteTheftMutation
>;
export type DeleteTheftMutationResult = Apollo.MutationResult<DeleteTheftMutation>;
export type DeleteTheftMutationOptions = Apollo.BaseMutationOptions<
  DeleteTheftMutation,
  DeleteTheftMutationVariables
>;
export const CreateBikeDocument = gql`
  mutation createBike($input: CreateBikeInput!) {
    createBike(input: $input) {
      ...BikeFields
    }
  }
  ${BikeFieldsFragmentDoc}
`;
export type CreateBikeMutationFn = Apollo.MutationFunction<
  CreateBikeMutation,
  CreateBikeMutationVariables
>;

/**
 * __useCreateBikeMutation__
 *
 * To run a mutation, you first call `useCreateBikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBikeMutation, { data, loading, error }] = useCreateBikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBikeMutation,
    CreateBikeMutationVariables
  >
) {
  return Apollo.useMutation<CreateBikeMutation, CreateBikeMutationVariables>(
    CreateBikeDocument,
    baseOptions
  );
}
export type CreateBikeMutationHookResult = ReturnType<
  typeof useCreateBikeMutation
>;
export type CreateBikeMutationResult = Apollo.MutationResult<CreateBikeMutation>;
export type CreateBikeMutationOptions = Apollo.BaseMutationOptions<
  CreateBikeMutation,
  CreateBikeMutationVariables
>;
export const UpdateBikeDocument = gql`
  mutation updateBike($input: MutateBikeInput!) {
    updateBike(input: $input) {
      ...BikeFields
    }
  }
  ${BikeFieldsFragmentDoc}
`;
export type UpdateBikeMutationFn = Apollo.MutationFunction<
  UpdateBikeMutation,
  UpdateBikeMutationVariables
>;

/**
 * __useUpdateBikeMutation__
 *
 * To run a mutation, you first call `useUpdateBikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBikeMutation, { data, loading, error }] = useUpdateBikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBikeMutation,
    UpdateBikeMutationVariables
  >
) {
  return Apollo.useMutation<UpdateBikeMutation, UpdateBikeMutationVariables>(
    UpdateBikeDocument,
    baseOptions
  );
}
export type UpdateBikeMutationHookResult = ReturnType<
  typeof useUpdateBikeMutation
>;
export type UpdateBikeMutationResult = Apollo.MutationResult<UpdateBikeMutation>;
export type UpdateBikeMutationOptions = Apollo.BaseMutationOptions<
  UpdateBikeMutation,
  UpdateBikeMutationVariables
>;
export const DeleteBikeDocument = gql`
  mutation deleteBike($input: MutateBikeInput!) {
    deleteBike(input: $input) {
      ...BikeFields
    }
  }
  ${BikeFieldsFragmentDoc}
`;
export type DeleteBikeMutationFn = Apollo.MutationFunction<
  DeleteBikeMutation,
  DeleteBikeMutationVariables
>;

/**
 * __useDeleteBikeMutation__
 *
 * To run a mutation, you first call `useDeleteBikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBikeMutation, { data, loading, error }] = useDeleteBikeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBikeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBikeMutation,
    DeleteBikeMutationVariables
  >
) {
  return Apollo.useMutation<DeleteBikeMutation, DeleteBikeMutationVariables>(
    DeleteBikeDocument,
    baseOptions
  );
}
export type DeleteBikeMutationHookResult = ReturnType<
  typeof useDeleteBikeMutation
>;
export type DeleteBikeMutationResult = Apollo.MutationResult<DeleteBikeMutation>;
export type DeleteBikeMutationOptions = Apollo.BaseMutationOptions<
  DeleteBikeMutation,
  DeleteBikeMutationVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    baseOptions
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($input: MutateUserInput!) {
    updateUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    baseOptions
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($input: MutateUserInput!) {
    deleteUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    baseOptions
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const NewTheftDocument = gql`
  subscription newTheft($filter: TheftSubscriptionFilter) {
    newTheft(filter: $filter) {
      ...TheftFields
    }
  }
  ${TheftFieldsFragmentDoc}
`;

/**
 * __useNewTheftSubscription__
 *
 * To run a query within a React component, call `useNewTheftSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewTheftSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewTheftSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewTheftSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewTheftSubscription,
    NewTheftSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    NewTheftSubscription,
    NewTheftSubscriptionVariables
  >(NewTheftDocument, baseOptions);
}
export type NewTheftSubscriptionHookResult = ReturnType<
  typeof useNewTheftSubscription
>;
export type NewTheftSubscriptionResult = Apollo.SubscriptionResult<NewTheftSubscription>;
export const UpdatedTheftDocument = gql`
  subscription updatedTheft($filter: TheftSubscriptionFilter) {
    updatedTheft(filter: $filter) {
      ...TheftFields
    }
  }
  ${TheftFieldsFragmentDoc}
`;

/**
 * __useUpdatedTheftSubscription__
 *
 * To run a query within a React component, call `useUpdatedTheftSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedTheftSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedTheftSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedTheftSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UpdatedTheftSubscription,
    UpdatedTheftSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    UpdatedTheftSubscription,
    UpdatedTheftSubscriptionVariables
  >(UpdatedTheftDocument, baseOptions);
}
export type UpdatedTheftSubscriptionHookResult = ReturnType<
  typeof useUpdatedTheftSubscription
>;
export type UpdatedTheftSubscriptionResult = Apollo.SubscriptionResult<UpdatedTheftSubscription>;
export const DeletedTheftDocument = gql`
  subscription deletedTheft($filter: TheftSubscriptionFilter) {
    deletedTheft(filter: $filter) {
      ...TheftFields
    }
  }
  ${TheftFieldsFragmentDoc}
`;

/**
 * __useDeletedTheftSubscription__
 *
 * To run a query within a React component, call `useDeletedTheftSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedTheftSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedTheftSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedTheftSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    DeletedTheftSubscription,
    DeletedTheftSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    DeletedTheftSubscription,
    DeletedTheftSubscriptionVariables
  >(DeletedTheftDocument, baseOptions);
}
export type DeletedTheftSubscriptionHookResult = ReturnType<
  typeof useDeletedTheftSubscription
>;
export type DeletedTheftSubscriptionResult = Apollo.SubscriptionResult<DeletedTheftSubscription>;
export const NewBikeDocument = gql`
  subscription newBike($filter: BikeSubscriptionFilter) {
    newBike(filter: $filter) {
      ...BikeFields
    }
  }
  ${BikeFieldsFragmentDoc}
`;

/**
 * __useNewBikeSubscription__
 *
 * To run a query within a React component, call `useNewBikeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewBikeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewBikeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewBikeSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewBikeSubscription,
    NewBikeSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    NewBikeSubscription,
    NewBikeSubscriptionVariables
  >(NewBikeDocument, baseOptions);
}
export type NewBikeSubscriptionHookResult = ReturnType<
  typeof useNewBikeSubscription
>;
export type NewBikeSubscriptionResult = Apollo.SubscriptionResult<NewBikeSubscription>;
export const UpdatedBikeDocument = gql`
  subscription updatedBike($filter: BikeSubscriptionFilter) {
    updatedBike(filter: $filter) {
      ...BikeFields
    }
  }
  ${BikeFieldsFragmentDoc}
`;

/**
 * __useUpdatedBikeSubscription__
 *
 * To run a query within a React component, call `useUpdatedBikeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedBikeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedBikeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedBikeSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UpdatedBikeSubscription,
    UpdatedBikeSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    UpdatedBikeSubscription,
    UpdatedBikeSubscriptionVariables
  >(UpdatedBikeDocument, baseOptions);
}
export type UpdatedBikeSubscriptionHookResult = ReturnType<
  typeof useUpdatedBikeSubscription
>;
export type UpdatedBikeSubscriptionResult = Apollo.SubscriptionResult<UpdatedBikeSubscription>;
export const DeletedBikeDocument = gql`
  subscription deletedBike($filter: BikeSubscriptionFilter) {
    deletedBike(filter: $filter) {
      ...BikeFields
    }
  }
  ${BikeFieldsFragmentDoc}
`;

/**
 * __useDeletedBikeSubscription__
 *
 * To run a query within a React component, call `useDeletedBikeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedBikeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedBikeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedBikeSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    DeletedBikeSubscription,
    DeletedBikeSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    DeletedBikeSubscription,
    DeletedBikeSubscriptionVariables
  >(DeletedBikeDocument, baseOptions);
}
export type DeletedBikeSubscriptionHookResult = ReturnType<
  typeof useDeletedBikeSubscription
>;
export type DeletedBikeSubscriptionResult = Apollo.SubscriptionResult<DeletedBikeSubscription>;
export const NewUserDocument = gql`
  subscription newUser($filter: UserSubscriptionFilter) {
    newUser(filter: $filter) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useNewUserSubscription__
 *
 * To run a query within a React component, call `useNewUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUserSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewUserSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    NewUserSubscription,
    NewUserSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    NewUserSubscription,
    NewUserSubscriptionVariables
  >(NewUserDocument, baseOptions);
}
export type NewUserSubscriptionHookResult = ReturnType<
  typeof useNewUserSubscription
>;
export type NewUserSubscriptionResult = Apollo.SubscriptionResult<NewUserSubscription>;
export const UpdatedUserDocument = gql`
  subscription updatedUser($filter: UserSubscriptionFilter) {
    updatedUser(filter: $filter) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUpdatedUserSubscription__
 *
 * To run a query within a React component, call `useUpdatedUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedUserSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedUserSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    UpdatedUserSubscription,
    UpdatedUserSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    UpdatedUserSubscription,
    UpdatedUserSubscriptionVariables
  >(UpdatedUserDocument, baseOptions);
}
export type UpdatedUserSubscriptionHookResult = ReturnType<
  typeof useUpdatedUserSubscription
>;
export type UpdatedUserSubscriptionResult = Apollo.SubscriptionResult<UpdatedUserSubscription>;
export const DeletedUserDocument = gql`
  subscription deletedUser($filter: UserSubscriptionFilter) {
    deletedUser(filter: $filter) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useDeletedUserSubscription__
 *
 * To run a query within a React component, call `useDeletedUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedUserSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedUserSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    DeletedUserSubscription,
    DeletedUserSubscriptionVariables
  >
) {
  return Apollo.useSubscription<
    DeletedUserSubscription,
    DeletedUserSubscriptionVariables
  >(DeletedUserDocument, baseOptions);
}
export type DeletedUserSubscriptionHookResult = ReturnType<
  typeof useDeletedUserSubscription
>;
export type DeletedUserSubscriptionResult = Apollo.SubscriptionResult<DeletedUserSubscription>;
