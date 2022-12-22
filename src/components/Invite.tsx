import Image from "next/image";
import heart from "../public/images/heart.png";
import FadeIn from "./FadeIn";
import CenterContainer from "./CenterContainer";
import { Invitee } from "../models";

type Props = {
  invitee: Invitee;
};

function Confirm() {
  return (
    <CenterContainer>
      <p style={{ color: "white", cursor: "pointer" }}>{"-> Confirmar"}</p>
    </CenterContainer>
  );
}

export default function Invite({ invitee }: Props) {
  return (
    <FadeIn customProps={{ delay: 400, config: { duration: 3000 } }}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "white",
        }}
      >
        <Image width={80} height={60} src={heart} alt="" />
        <Image width={80} height={60} src={heart} alt="" />
        <Image width={80} height={60} src={heart} alt="" />
      </div>

      <CenterContainer style={{ marginTop: "100px" }}>
        <h1 style={{ color: "white" }}>Carlos Y Paola</h1>
        <p style={{ color: "white" }}>Te invitamos a nuestra boda</p>
        <p style={{ color: "white" }}>Sabado 13 de Enero, 2023</p>
        <p style={{ color: "white" }}>4:00 pm</p>

        <br />
        <br />
        <Confirm />
      </CenterContainer>
    </FadeIn>
  );
}
