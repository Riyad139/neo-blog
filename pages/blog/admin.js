import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import Container from "./../../components/Layout/Container";
import NavBar from "./../../components/NavBar";

import { uploader } from "../../components/Admin/FireBaseImageUploader";

import editorObject from "../../components/Admin/BlogHandler";

export default function App() {
  const [image, setImage] = useState(null);
  const editorRef = useRef(null);
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const tagRef = useRef(null);
  const titleRef = useRef(null);

  const log = async () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent(), nameRef.current.value);
      const data = {
        dummyProfile: {
          userName: nameRef.current.value,
          userTitle: professionRef.current.value,
          ProfilePic:
            "https://source.unsplash.com/1600x900/?cat,forest,village,water,earth,home,decoration",
        },
        title: titleRef.current.value,
        articleBody: editorRef.current.getContent(),
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
      console.log(result);
    }
  };
  return (
    <Container>
      <NavBar />
      <div>
        <input
          ref={nameRef}
          className="py-2 w-full focus:outline-none text-2xl active:outline-none my-2"
          placeholder="Your name"
          type="text"
        />
        <input
          ref={professionRef}
          className="py-2 w-full focus:outline-none text-2xl active:outline-none my-2"
          placeholder="your profession"
          type="text"
        />
      </div>
      <div>
        <input
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
          className="py-2 w-full focus:outline-none text-2xl active:outline-none my-2"
          placeholder="tags..."
          type="file"
        />
        <input
          ref={tagRef}
          className="py-2 w-full focus:outline-none text-2xl active:outline-none my-2"
          placeholder="tags..."
          type="text"
        />
      </div>

      <input
        ref={titleRef}
        className="py-2 w-full focus:outline-none text-2xl active:outline-none my-2"
        placeholder="Enter your blog tittle"
        type="text"
      />

      <Editor
        id="daoikjnfosnopginspoirkggnoprg"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>write details here</p>"
        apiKey="6v58m4mser416pz72ea46257nf48u6gu3y879h4olyt0lho4"
        init={editorObject}
      />
      <div className="my-5 flex space-x-5">
        <button
          onClick={log}
          className="py-2 px-7 hover:bg-slate-800 -translate-y-1 active:translate-y-0 duration-100 text-white rounded-full text-lg bg-slate-900"
        >
          save
        </button>
        <button className="py-2 px-7 hover:bg-slate-800 -translate-y-1 active:translate-y-0 duration-100 text-white rounded-full text-lg bg-slate-900">
          update
        </button>
      </div>
    </Container>
  );
}
