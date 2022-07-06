import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import PostContainer from "../components/Post/PostContainer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Feature />
      <PostContainer />
      <Footer />
    </>
  );
}
