import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum InviteeHost {
  CARLOS = "CARLOS",
  PAOLA = "PAOLA"
}

type InviteeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerInvitee = {
  readonly id: string;
  readonly name: string;
  readonly host: InviteeHost | keyof typeof InviteeHost;
  readonly hasConfirmed: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvitee = {
  readonly id: string;
  readonly name: string;
  readonly host: InviteeHost | keyof typeof InviteeHost;
  readonly hasConfirmed: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invitee = LazyLoading extends LazyLoadingDisabled ? EagerInvitee : LazyInvitee

export declare const Invitee: (new (init: ModelInit<Invitee, InviteeMetaData>) => Invitee) & {
  copyOf(source: Invitee, mutator: (draft: MutableModel<Invitee, InviteeMetaData>) => MutableModel<Invitee, InviteeMetaData> | void): Invitee;
}