/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvitee = /* GraphQL */ `
  query GetInvitee($id: ID!) {
    getInvitee(id: $id) {
      id
      name
      host
      hasConfirmed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listInvitees = /* GraphQL */ `
  query ListInvitees(
    $filter: ModelInviteeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        host
        hasConfirmed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInvitees = /* GraphQL */ `
  query SyncInvitees(
    $filter: ModelInviteeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvitees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        host
        hasConfirmed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
