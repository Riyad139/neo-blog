import Image from "next/image";

export default function PostPic(props) {
  return (
    <div className="aspect-w-16 rounded-md flex w-full aspect-h-9 ">
      <Image
        objectFit="cover"
        className="rounded-md"
        src={props.profile}
        alt="post pic"
        layout="fill"
      />
    </div>
  );
}
