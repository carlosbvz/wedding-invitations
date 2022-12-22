import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Invitee } from "../models";
import * as queries from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { updateInvitee as updateInviteeMutation } from "../graphql/mutations";

interface NeoInvitee extends Invitee {
  _version: number;
}

const GlobalContext = React.createContext({ invitee: {} } as {
  invitee: Invitee | null;
  updateInvitee: () => void;
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [invitee, setInvitee] = useState<Invitee>();
  const router = useRouter();

  useEffect(() => {
    const fetchInvitee = async () => {
      const inviteeData = (await API.graphql({
        query: queries.getInvitee,
        variables: { id: router.query.id },
      })) as any;
      const invitee = inviteeData?.data?.getInvitee;
      setInvitee(invitee);
    };
    fetchInvitee();
  }, [router.query.id]);

  const updateInvitee = async () => {
    const { id, name, host, _version } = invitee as NeoInvitee;
    const input = {
      id,
      name,
      host,
      _version,
      hasConfirmed: true,
    };
    const savedInvitee = (await API.graphql(
      graphqlOperation(updateInviteeMutation, {
        input,
      })
    )) as any;
    const savedInviteeInstance = savedInvitee.data.updateInvitee;
    setInvitee(savedInviteeInstance);
  };

  const value = {
    invitee,
    updateInvitee,
  } as any;

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
