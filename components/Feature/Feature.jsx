import Container from "../Layout/Container";
import Image from "next/image";
import UserProfile from "../userProfile/UserProfile";

const img = "/user-img/user-1.png";

export default function Feature(props) {
  return (
    <Container>
      <div className="maindiv md:flex md:space-x-10 pt-16">
        <div className="img  rounded-sm ">
          <Image
            className="rounded-md  object-cover"
            src="https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/62bc215a2c6a8e775bf1f724_pixelmatters-power-written-communications-product-design-p-2000.png"
            width={1140}
            height={620}
            alt="pic"
          />
        </div>
        <div className="content  w-[600px]">
          <div className="catagory ">
            <h1 className="  text-gray-500 ">
              <span className="font-bold text-base">Design</span>{" "}
              <span className="text-sm">june 29,2022</span>{" "}
            </h1>
          </div>
          <div className="title text-3xl pt-4 pb-8">
            <h1>The power of written communications in Product Design</h1>
          </div>
          <div className="description text-xl line-clamp-none  md:line-clamp-4 text-gray-700">
            <h1>
              Writing is an inherent habit in our processes, and one of our
              oldest practices is the Asynchronous Design Presentation. There
              are several ways to present your designs to your client, but this
              one is undoubtedly one of the most powerful and effective. I will
              talk about Pixelmatters’ writing processes, focusing on the Design
              subject.
            </h1>
          </div>
          <div className="pt-10">
            <UserProfile
              pic={img}
              name={"Robin farnando"}
              title={"front developer"}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
