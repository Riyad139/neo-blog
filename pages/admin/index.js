import React, { useRef, useState } from "react";
import Container from "../../components/Layout/Container";
import NavBar from "../../components/NavBar";

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

  const log = async () => {
    const data = {
      dummyProfile: {
        userName: nameRef.current.value,
        userTitle: professionRef.current.value,
        ProfilePic:
          "https://source.unsplash.com/1600x900/?cat,forest,village,water,earth,home,decoration",
      },
      title: titleRef.current.value,
      articleBody: "",
      tag: tagRef.current.value,
      img: await uploader(image),
    };
    const res = await fetch("http://127.0.1:6565/blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result.article._id);
    route.push("http://127.0.1:3000/admin/" + result.article._id);
  };

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
              className="py-2 w-full focus:outline-none text-lg active:outline-none my-2"
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
