import UserProfile from "../userProfile/UserProfile";
import PostPic from "./PostPic";
import cls from "classnames";

export default function Post(props) {
  const post = " sm:w-[45%] lg:w-[30%]";
  const twoPost = "sm:w-[45%]";
  return (
    <div className={cls("flex flex-col ", props.isTwoPost ? twoPost : post)}>
      <PostPic profile={props.pic} />
      <div className="h-[230px]">
      <div className="catagory pt-2 ">
        <h1 className="  text-gray-500 ">
          <span className="font-bold text-base">{props.catagory}</span>{" "}
          <span className="text-sm">{props.date}</span>{" "}
        </h1>
      </div>
      <div className="title text-2xl pt-2 pb-4">
        <h1>{props.title}</h1>
      </div>
      <div className="description   pb-4 text-gray-700">
        <h2 className="line-clamp-3 ">{props.description}</h2>
      </div>
      </div>
      <UserProfile pic={props.pic} name={props.name} title={props.pos} />

    </div>
  );
}
