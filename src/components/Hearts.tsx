import Image from "next/image";
import heart from "../public/images/heart.png";

type Props = {};

export default function Hearts({}: Props) {
  return (
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
  );
}
