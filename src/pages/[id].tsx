import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Zelda from "../components/Zelda";
import { useRouter } from "next/router";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { Invitee } from "../models";

const Home: NextPage = () => {
  const [invitee, setInvitee] = useState<Invitee>();
  const router = useRouter();

  useEffect(() => {
    const fetchInvitee = async () => {
      const inviteeData = (await API.graphql({
        query: queries.getInvitee,
        variables: { id: router.query.id },
      })) as any;
      const invitee = inviteeData?.data?.getInvitee;
      setInvitee(inviteeData?.data?.getInvitee);
    };
    fetchInvitee();
  }, [router.query.id]);

  if (!invitee) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos y Paola :) </title>
      </Head>
      <main>
        <Zelda invitee={invitee} />
      </main>
    </div>
  );
};

export default Home;
