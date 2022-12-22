import FadeIn from "./FadeIn";
import { Invitee } from "../models";
import Hearts from "./Hearts";
import Info from "./Info";
import Confirm from "./Confirm";

export default function Invitation() {
  // const { hasConfirmed } = invitee;
  return (
    <FadeIn customProps={{ delay: 400, config: { duration: 3000 } }}>
      <Hearts />
      <Info />
      <Confirm />
    </FadeIn>
  );
}
