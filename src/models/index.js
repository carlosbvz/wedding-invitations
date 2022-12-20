// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const InviteeHost = {
  "CARLOS": "CARLOS",
  "PAOLA": "PAOLA"
};

const { Invitee } = initSchema(schema);

export {
  Invitee,
  InviteeHost
};