import CenterContainer from "./CenterContainer";

type Props = {};

export default function Info({}: Props) {
  return (
    <CenterContainer style={{ marginTop: "100px" }}>
      <h1 style={{ color: "white" }}>Carlos Y Paola</h1>
      <p style={{ color: "white" }}>Te invitamos a nuestra boda</p>
      <p style={{ color: "white" }}>Sabado 13 de Enero, 2023</p>
      <p style={{ color: "white" }}>4:00 pm</p>

      <br />
      <br />
    </CenterContainer>
  );
}
