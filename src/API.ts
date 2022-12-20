/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInviteeInput = {
  id?: string | null,
  name: string,
  host: InviteeHost,
  hasConfirmed: boolean,
  _version?: number | null,
};

export enum InviteeHost {
  CARLOS = "CARLOS",
  PAOLA = "PAOLA",
}


export type ModelInviteeConditionInput = {
  name?: ModelStringInput | null,
  host?: ModelInviteeHostInput | null,
  hasConfirmed?: ModelBooleanInput | null,
  and?: Array< ModelInviteeConditionInput | null > | null,
  or?: Array< ModelInviteeConditionInput | null > | null,
  not?: ModelInviteeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelInviteeHostInput = {
  eq?: InviteeHost | null,
  ne?: InviteeHost | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Invitee = {
  __typename: "Invitee",
  id: string,
  name: string,
  host: InviteeHost,
  hasConfirmed: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateInviteeInput = {
  id: string,
  name?: string | null,
  host?: InviteeHost | null,
  hasConfirmed?: boolean | null,
  _version?: number | null,
};

export type DeleteInviteeInput = {
  id: string,
  _version?: number | null,
};

export type ModelInviteeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  host?: ModelInviteeHostInput | null,
  hasConfirmed?: ModelBooleanInput | null,
  and?: Array< ModelInviteeFilterInput | null > | null,
  or?: Array< ModelInviteeFilterInput | null > | null,
  not?: ModelInviteeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelInviteeConnection = {
  __typename: "ModelInviteeConnection",
  items:  Array<Invitee | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateInviteeMutationVariables = {
  input: CreateInviteeInput,
  condition?: ModelInviteeConditionInput | null,
};

export type CreateInviteeMutation = {
  createInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateInviteeMutationVariables = {
  input: UpdateInviteeInput,
  condition?: ModelInviteeConditionInput | null,
};

export type UpdateInviteeMutation = {
  updateInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteInviteeMutationVariables = {
  input: DeleteInviteeInput,
  condition?: ModelInviteeConditionInput | null,
};

export type DeleteInviteeMutation = {
  deleteInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetInviteeQueryVariables = {
  id: string,
};

export type GetInviteeQuery = {
  getInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListInviteesQueryVariables = {
  filter?: ModelInviteeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInviteesQuery = {
  listInvitees?:  {
    __typename: "ModelInviteeConnection",
    items:  Array< {
      __typename: "Invitee",
      id: string,
      name: string,
      host: InviteeHost,
      hasConfirmed: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncInviteesQueryVariables = {
  filter?: ModelInviteeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInviteesQuery = {
  syncInvitees?:  {
    __typename: "ModelInviteeConnection",
    items:  Array< {
      __typename: "Invitee",
      id: string,
      name: string,
      host: InviteeHost,
      hasConfirmed: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateInviteeSubscription = {
  onCreateInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateInviteeSubscription = {
  onUpdateInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteInviteeSubscription = {
  onDeleteInvitee?:  {
    __typename: "Invitee",
    id: string,
    name: string,
    host: InviteeHost,
    hasConfirmed: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
