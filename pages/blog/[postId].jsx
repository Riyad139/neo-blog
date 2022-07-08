import NavBar from "../../components/NavBar";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
import BlogContainer from "../../components/Layout/BlogContainer";
import UserProfile from "../../components/userProfile/UserProfile";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Container from "../../components/Layout/Container";
import Post from "../../components/Post/Post";
import dayjs from "dayjs";

// const data = {
//   userName: "Robin fanando",
//   userPos: "Front-End Developer",
//   catagory: "Culture",
//   date: "july 29,2022",
//   title: "Defining Pixelmatters team cultural profile key traits",
//   description:
//     "During the execution of our Organizational Model project, we felt the need to write down the desired Pixelmatter team cultural profile key traits. And here they are.",
//   img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/628e11499014ebf21ef801b6_Pixelmatters_natal_2021-15%20(1)-min%202.jpg",
// };

export default function PostDetails(props) {
  return (
    <>
      <NavBar />

      <BlogContainer>
        <div className=" pb-5 date pt-10 space-y-4 ">
          <p className="text-base text-gray-600">
            {props.tag} {dayjs(props.date).format("MMM D, YYYY")}
          </p>
          <p className="text-4xl leading-normal font-bold text-slate-900">
            {props.title}
          </p>
        </div>
      </BlogContainer>
      <div className="relative  w-full h-[500px] ">
        <Image
          className="object-cover h-96 w-full "
          src={props.img}
          alt="pic"
          layout="fill"
        />
      </div>
      <BlogContainer>
        <article className=" py-8  prose lg:prose-xl">
          {props.articleBody}
        </article>
        <hr />
        <div className="userProfile flex-col items-center space-y-5 md:space-y-0 md:flex-row py-8 flex justify-between ">
          <UserProfile
            pic={props.dummyProfile.ProfilePic}
            name={props.dummyProfile.userName}
            title={props.dummyProfile.userTitle}
          />
          <div className="follow  flex space-x-3 ">
            <p>Share :</p>
            <AiOutlineTwitter size={28} color="black" />
            <AiOutlineFacebook size={28} color="black" />
            <AiOutlineLinkedin size={28} color="black" />
          </div>
        </div>
      </BlogContainer>
      <div className="py-7 w-full border border-gray-100">
        <Container>
          <p className="text-4xl">Related blog posts</p>
          <div className="posts mt-8 flex gap-10 flex-wrap">
            <Post
              pic={props.img}
              pos={props.userPos}
              catagory={props.catagory}
              title={props.title}
              date={props.date}
              description={props.articleBody}
            />
            <Post
              pic={props.img}
              pos={props.userPos}
              catagory={props.catagory}
              title={props.title}
              date={props.date}
              description={props.articleBody}
            />
            <Post
              pic={props.img}
              pos={props.userPos}
              catagory={props.catagory}
              title={props.title}
              date={props.date}
              description={props.articleBody}
            />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const fetch = await import("node-fetch");

  const id = context.params.postId;
  const response = await fetch.default("http://localhost:6565/blog" + "/" + id);
  const data = await response.json();
  console.log(data.data.article);
  return {
    props: data.data.article, // will be passed to the page component as props
  };
}
