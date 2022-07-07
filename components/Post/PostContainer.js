import Container from "../Layout/Container";
import NextPage from "../util/NextPage";
import Post from "./Post";
const pic = "/post-img/post-1.jpg";
const pic2 = "/post-img/post-2.png";

const data = [
  {
    userName: "Robin fanando",
    userPos: "Front-End Developer",
    catagory: "Culture",
    date: "july 29,2022",
    title: "Defining Pixelmatters team cultural profile key traits",
    description:
      "During the execution of our Organizational Model project, we felt the need to write down the desired Pixelmatter team cultural profile key traits. And here they are.",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/628e11499014ebf21ef801b6_Pixelmatters_natal_2021-15%20(1)-min%202.jpg",
  },
  {
    userName: "André Oliveira",
    userPos: "Founder & CEO",
    catagory: "Development",
    date: "June 9, 2022",
    title: "How to develop an offline Front-End app with mock data",
    description:
      "Have you ever wondered how to develop a front-end project without relying on the API being ready and available to fetch data from? In this tutorial, I’ll share different approaches to how you can do just that, starting by setting ",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/62a21f761cde443799edede7_Next-generation%20API%20mocking%20_%201%20(2).png",
  },
  {
    userName: "Catarina Ricca",
    userPos: "Product Owner",
    catagory: "Product",
    date: "June 9, 2022",
    title:
      "The process behind the creation of a fully customized interactive ROI calculator",
    description:
      "Airkit and Pixelmatters created a wholly new customized interactive ROI calculator, a resource dedicated to helping companies lower their costs. On the other hand, it also",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/627d3286c806aa5cef966ac5_pixelmatters-airkit-cx-assessment-calculator-engineering.png",
  },
  {
    userName: "Catarina Ricca",
    userPos: "Product Owner",
    catagory: "Product",
    date: "June 9, 2022",
    title:
      "The Milestone Planner, a game-changer feature for Investors and Entrepreneurs",
    description:
      "On one side, the Milestone Planner helps entrepreneurs give more visibility to their milestones’ progress, and on the other side, it ",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/626013dde031fad67b7c405a_pixelmatters-abaca-milestone-planner-feature-investors-entrepeneurs.png",
  },
  {
    userName: "Marta Lopes",
    userPos: "Product Owner",
    catagory: "Product",
    date: "April 7, 2022",
    title:
      "How can nonverbal communication improve relationships with clients?",
    description:
      "Let's start this journey by doing a quick exercise: after speaking with someone, what do you remember more? The words that were said, or ",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/624e9e79dbae16149a60ddda_pixelmatters-non-communication-relationships-clients.png",
  },
  {
    userName: "Rui Saraiva",
    userPos: "Front-End Developer",
    catagory: "Development",
    date: "March 18, 2022",
    title: "How to set up a Front-End project with Vite, React, and TypeScript",
    description:
      "Software development entails a lot of work like building new features, fixing bugs, infrastructure maintenance, keeping track of dependencies, ",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/6231a98e8ae3ecd838ad30a0_pixelmatters-setup-project%20-top-to-bottom.png",
  },
  {
    userName: "Marta Lopes",
    userPos: "Product Owner",
    catagory: "Development",
    date: "March 18, 2022",
    title: "Can a kindergarten teacher and a Product Owner be the same person?",
    description:
      "I fell into product management accidentally, and my story starts with a shot of luck and opportunity. Long story short, while I was workin",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/62278f1ce4570505f9f85e39_pixelmatters-kindergarten%20teacher-product-owner-same-person-story.png",
  },
  {
    userName: "Eunice Costa",
    userPos: "Product Designer",
    catagory: "Design",
    date: "March 7, 2022",
    title: "A day in a life of a Product Designer",
    description:
      "A new day is about to start as a Product Designer at Pixelmatters. Or should I say at home? ☕ It feels good to get out of bed a bit later than usual.",
    img: "https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/62226681b3bd8f5a1ca86b90_pixelmatters-a-day-in-the-life-product-designer.png",
  },
];

export default function PostContainer(props) {
  return (
    <Container>
      <div className="mainContainer py-10 flex   flex-wrap">
        <Post
          isTwoPost={true}
          name={data[0].userName}
          pic={data[0].img}
          catagory={data[0].catagory}
          pos={data[0].userPos}
          title={data[0].title}
          date={data[0].date}
          description={data[0].description}
        />
        <Post
          isTwoPost={true}
          name={data[1].userName}
          pos={data[1].userPos}
          pic={data[1].img}
          catagory={data[1].catagory}
          title={data[1].title}
          date={data[1].date}
          description={data[1].description}
        />
      </div>
      <div className="flex gap-10 flex-wrap">
        {data.map((item, index) => {
          if (index > 1)
            return (
              <Post
                pic={item.img}
                name={item.userName}
                pos={item.userPos}
                catagory={item.catagory}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            );
        })}
      </div>
      <div className="w-full flex py-20 items-center justify-center">
        <NextPage />
      </div>
    </Container>
  );
}
