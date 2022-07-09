import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Container from "./../../components/Layout/Container";
import NavBar from "./../../components/NavBar";
import { getApps, initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { nanoid } from "nanoid";

const firebaseConfig = {
  apiKey: "AIzaSyDhKoZPFmIWkADST33k3jsL2YxI8FCpT0I",
  authDomain: "neo-blog-442c7.firebaseapp.com",
  projectId: "neo-blog-442c7",
  storageBucket: "neo-blog-442c7.appspot.com",
  messagingSenderId: "638244507171",
  appId: "1:638244507171:web:5d4946112acdd2a54a6b96",
};

export function initFirebase() {
  const apps = getApps();
  if (apps.length) return apps[0];

  return initializeApp(firebaseConfig);
}

export const neoFireBase = initFirebase();

var uploadTask;

export const uploadHandler = (blobInfo, success, failure, progress) => {
  if (uploadTask) uploadTask.cancel();

  const storageRef = ref(getStorage(neoFireBase), "blog_images/" + nanoid());
  uploadTask = uploadBytesResumable(storageRef, blobInfo.blob());

  uploadTask.on(
    "state_changed",
    (snap) => {
      progress((snap.bytesTransferred / snap.totalBytes) * 100);
    },

    (err) => console.error(err),

    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        success(url);
      });
    }
  );
};

const editorObject = {
  height: 500,
  menubar: false,
  plugins:
    "advlist autolink lists link image charmap searchreplace visualblocks imagetools code insertdatetime media table paste code  wordcount",

  toolbar:
    " formatselect | " +
    "bold italic backcolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent | " +
    "image code",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
  branding: false,
  images_file_types: "jpg,svg,webp",
  imagetools_toolbar: "rotateleft rotateright | flipv fliph | imageoptions",
  images_upload_handler: uploadHandler,
  automatic_uploads: true,
  image_advtab: true,
  image_caption: true,
};

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Container>
      <NavBar />
      <input
        className="py-4 w-full focus:outline-none text-2xl active:outline-none my-4"
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
      <button type=""></button>
    </Container>
  );
}
