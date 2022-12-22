import CenterContainer from "./CenterContainer";
import { useGlobal } from "../contexts/GlobalContext";
import Image from "next/image";
import charlita from "../public/images/charlita.jpg";

type Props = {};

export default function Confirm({}: Props) {
  const { invitee, updateInvitee } = useGlobal();

  const handleConfirm = async () => {
    updateInvitee();
  };

  return (
    <CenterContainer>
      {invitee?.hasConfirmed ? (
        <>
          <p style={{ color: "white" }}>{"Te esperamos :)"}</p>
          <p style={{ position: "absolute", bottom: 0, right: 0 }}>
            <Image width={150} height={150} src={charlita} alt="" />
          </p>
        </>
      ) : (
        <p
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => handleConfirm()}
        >
          {"-> Confirmar"}
        </p>
      )}
    </CenterContainer>
  );
}
