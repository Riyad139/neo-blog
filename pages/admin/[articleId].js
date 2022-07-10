import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import editorObject from "../../components/Admin/BlogHandler";
import Container from "../../components/Layout/Container";
import { useRouter } from "next/router";

export default function articleEdit(props) {
  const editorRef = useRef(null);
  const route = useRouter();
  const onUpdate = async () => {
    console.log(editorRef.current.getContent());
    const body = {
      articleBody: editorRef.current.getContent(),
    };
    console.log(props.id);
    const res = await fetch("http://192.168.0.105:6565/blog/" + props.id, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    route.push("http://192.168.0.105:3000/");
  };

  return (
    <Container>
      <div className="space-y-5">
        <Editor
          id="daoikjnfosnopginspoirkggnoprg"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>write details here</p>"
          apiKey="6v58m4mser416pz72ea46257nf48u6gu3y879h4olyt0lho4"
          init={editorObject}
        />
        <button
          onClick={onUpdate}
          className="py-2 px-7 hover:bg-slate-800 -translate-y-1 active:translate-y-0 duration-100 text-white rounded-full text-lg bg-slate-900"
        >
          update
        </button>
      </div>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.articleId;

  return {
    props: { id }, // will be passed to the page component as props
  };
}
