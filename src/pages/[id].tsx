import { useMemo } from "react";
import type { NextPage } from "next";
import Zelda from "../components/Zelda";
import { useGlobal } from "../contexts/GlobalContext";

const Home: NextPage = () => {
  const { invitee } = useGlobal();
  return useMemo(() => {
    return (
      <>
        {invitee?.id ? <Zelda /> : <p style={{ color: "white" }}>Loading...</p>}
      </>
    );
  }, [invitee?.id]);
};

export default Home;
