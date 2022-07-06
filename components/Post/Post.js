import UserProfile from "../userProfile/UserProfile";
import PostPic from "./PostPic";
import cls from "classnames";

export default function Post(props) {
  const post = "sm:max-w-[45%] lg:max-w-[30%]";
  const twoPost = "sm:max-w-[45%]";
  return (
    <div className={cls("flex flex-col ", props.isTwoPost ? twoPost : post)}>
      <PostPic profile={props.pic} />
      <div className="catagory pt-2 ">
        <h1 className="  text-gray-500 ">
          <span className="font-bold text-base">Design</span>{" "}
          <span className="text-sm">june 29,2022</span>{" "}
        </h1>
      </div>
      <div className="title text-3xl pt-2 pb-4">
        <h1>Defining Pixelmatters' team cultural profile key traits</h1>
      </div>
      <div className="description  pb-4 text-gray-700">
        <h1>
          During the execution of our Organizational Model project, we felt the
          need to write down the desired Pixelmatters' team cultural profile key
          traits. And here they are.
        </h1>
      </div>
      <UserProfile
        pic={props.pic}
        name={"Nobel farndando"}
        title={"front end designer"}
      />
    </div>
  );
}
