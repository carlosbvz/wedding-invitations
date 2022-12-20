import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum InviteeHost {
  CARLOS = "CARLOS",
  PAOLA = "PAOLA"
}

type InviteeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Invitee {
  readonly id: string;
  readonly name: string;
  readonly host: InviteeHost | keyof typeof InviteeHost;
  readonly hasConfirmed: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Invitee, InviteeMetaData>);
  static copyOf(source: Invitee, mutator: (draft: MutableModel<Invitee, InviteeMetaData>) => MutableModel<Invitee, InviteeMetaData> | void): Invitee;
}