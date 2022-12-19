/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvitee = /* GraphQL */ `
  query GetInvitee($id: ID!) {
    getInvitee(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
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
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
