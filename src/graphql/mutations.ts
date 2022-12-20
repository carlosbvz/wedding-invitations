/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvitee = /* GraphQL */ `
  mutation CreateInvitee(
    $input: CreateInviteeInput!
    $condition: ModelInviteeConditionInput
  ) {
    createInvitee(input: $input, condition: $condition) {
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
export const updateInvitee = /* GraphQL */ `
  mutation UpdateInvitee(
    $input: UpdateInviteeInput!
    $condition: ModelInviteeConditionInput
  ) {
    updateInvitee(input: $input, condition: $condition) {
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
export const deleteInvitee = /* GraphQL */ `
  mutation DeleteInvitee(
    $input: DeleteInviteeInput!
    $condition: ModelInviteeConditionInput
  ) {
    deleteInvitee(input: $input, condition: $condition) {
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
