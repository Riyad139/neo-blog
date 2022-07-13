import { useRouter } from "next/router";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

export default function token(props) {
  const route = useRouter();
  useEffect(() => {
    fetch(`http://192.168.0.105:6565/login/` + props.id, {
      method: "POST",
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      })
    );

    route.replace("http://192.168.0.105:3000/admin");
  }, []);
  return (
    <div className="w-full flex justify-center items-center  h-[100vh]">
      <CgSpinner size={40} className="animate-spin" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.token;

  return {
    props: { id }, // will be passed to the page component as props
  };
}
