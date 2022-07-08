import Container from "../Layout/Container";
import Image from "next/image";
import UserProfile from "../userProfile/UserProfile";
import dayjs from "dayjs";
import Link from "next/link";

export default function Feature(props) {
  return (
    <Container>
      <Link href={"/blog/" + props.article._id}>
        <div className="maindiv md:flex md:space-x-10 pt-16">
          <div className="img rounded-sm ">
            <Image
              className="rounded-md  object-cover"
              src={props.article.img}
              width={1140}
              height={620}
              alt="pic"
            />
          </div>
          <div className="content w-full  lg:max-w-lg">
            <div className="catagory ">
              <h1 className="  text-gray-500 ">
                <span className="font-bold text-base">{props.article.tag}</span>{" "}
                <span className="text-sm">
                  {dayjs(props.article.date).format("MMM D, YYYY")}
                </span>{" "}
              </h1>
            </div>
            <div className="title text-3xl pt-4 pb-8">
              <h1>{props.article.title}</h1>
            </div>
            <div className="description text-xl line-clamp-none  md:line-clamp-4 text-gray-700">
              <h1>{props.article.articleBody}</h1>
            </div>
            <div className="pt-10">
              <UserProfile
                pic={props.article.dummyProfile.ProfilePic}
                name={props.article.dummyProfile.userName}
                title={props.article.dummyProfile.userTitle}
              />
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
}
