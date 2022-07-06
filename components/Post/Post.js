import Image from "next/image";


export default function Post(props) {
  return <div>
    <div>
        <Image src = {props.pic} alt="post pic" />
    </div>
  </div>;
}
