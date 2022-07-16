import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/Layout/Container";
import NavBar from "../../components/NavBar";
import { CgSpinner } from "react-icons/cg";
import { uploader } from "../../components/Admin/FireBaseImageUploader";
import BlogContainer from "../../components/Layout/BlogContainer";
import { useRouter } from "next/router";

export default function App() {
  const [image, setImage] = useState(null);
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);
  const route = useRouter();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token"))
      route.replace("http://127.0.1:3000/login");
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://192.168.0.105:6565/login/" + token, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 200) route.replace("http://127.0.1:3000/login");
    });
    setAuth(true);
  }, []);

  const log = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const data = {
      dummyProfile: {
        userName: nameRef.current.value,
        userTitle: professionRef.current.value,
        ProfilePic: "https://source.unsplash.com/1600x900/?avatar",
      },
      title: titleRef.current.value,
      articleBody: "",
      tag: tagRef.current.value,
      img: await uploader(image),
      token,
    };

    const res = await fetch("http://127.0.1:6565/blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(res);
    if (!res.ok) return alert("you are not admin fak off");

    const result = await res.json();
    route.push("http://127.0.1:3000/admin/" + result.article._id);
    
  };
  if (!isAuth)
    return (
      <div className="w-full flex justify-center items-center  h-[100vh]">
        <CgSpinner size={40} className="animate-spin" />
      </div>
    );

  return (
    <Container>
      <NavBar />
      <BlogContainer>
        <div className="shadow-md px-10 py-5">
          <div>
            <input
              ref={nameRef}
              className="py-2 w-full focus:outline-none text-lg active:outline-none my-2"
              placeholder="Your name"
              type="text"
            />
            <input
              ref={professionRef}
              className="py-2 w-full focus:outline-none text-lg active:outline-none my-2"
              placeholder="your profession"
              type="text"
            />
          </div>
          <div>
            <input
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
              className="py-2 w-full   focus:outline-none text-lg active:outline-none my-2"
              placeholder="tags..."
              type="file"
            />
            <input
              ref={tagRef}
              className="py-2 w-full focus:outline-none text-lg active:outline-none my-2"
              placeholder="tags..."
              type="text"
            />
          </div>

          <input
            ref={titleRef}
            className="py-2 w-full focus:outline-none text-lg active:outline-none my-2"
            placeholder="Enter your blog tittle"
            type="text"
          />
          <div className="my-5 flex space-x-5">
            <button
              onClick={log}
              className="py-2 px-7 hover:bg-slate-800 -translate-y-1 active:translate-y-0 duration-100 text-white rounded-full text-lg bg-slate-900"
            >
              save
            </button>
          </div>
        </div>
      </BlogContainer>
    </Container>
  );
}
