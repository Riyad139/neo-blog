import Link from "next/link";
import { useEffect, useState } from "react";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar";
import PostContainer from "../../components/Post/PostContainer";

let article;

const FetchData = async () => {
  const data = await fetch("http://192.168.0.105:6565/blog");

  const res = await data.json();
  article = res.data.articles;
  return article;
};

export default function HomePage() {
  const [data, setData] = useState(false);
  useEffect(() => {
    FetchData().then((res) => setData(res));
  }, []);
  if (!data) return <div></div>;
  console.log(data);

  return (
    <>
      <NavBar />
      
        <Feature key={data[0]._id} article={data[0]} />
      
      <PostContainer articles={data.filter((_, index) => index != 0)} />
      <Footer />
    </>
  );
}
