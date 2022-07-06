import Image from "next/image";

export default function UserProfile(props) {
  return (
    <div className=" flex space-x-4">
      <div>
        <Image
          className=" object-cover rounded-full"
          src={props.pic}
          height={45}
          width={45}
          alt="user"
        />
      </div>
      <div>
        <h1>{props.name}</h1>
        <h1 className="text-gray-600">{props.title}</h1>
      </div>
    </div>
  );
}
