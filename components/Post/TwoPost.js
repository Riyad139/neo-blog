import Container from "../Layout/Container";
import Post from "./Post";
const pic = "/post-img/post-1.jpg";
const pic2 = "/post-img/post-2.png";
export default function TwoPost(props) {
  return (
    <Container>
      <div className="mainContainer py-10 flex gap-20  flex-wrap">
        <Post isTwoPost={true} pic={pic} />
        <Post isTwoPost={true} pic={pic2} />
      </div>
      <div className="flex gap-10 flex-wrap">
      <Post pic={pic} />
      <Post pic={pic} />
      <Post pic={pic} />
      <Post pic={pic} />
      <Post pic={pic} />
      <Post pic={pic} />
      </div>
    </Container>
  );
}
