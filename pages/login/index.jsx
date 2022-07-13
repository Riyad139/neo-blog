import { useRef } from "react";
export default function LogIn() {
  const emailRef = useRef();
  const submitMail = () => {
    if (
      emailRef.current.value.trim() === "" ||
      !emailRef.current.value.includes("@")
    )
      return;
    console.log(emailRef.current.value);
    fetch("http://192.168.0.105:6565/login", {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <div className="flex  w-full h-[100vh] items-center justify-center">
      <form className="py-4 px-5 shadow-md">
        <p className=" text-center py-5 text-3xl border-b border-gray-200">
          Log In
        </p>
        <input
          ref={emailRef}
          type="email"
          className="w-96 block rounded-md"
          placeholder="provide your email adress"
        />
        <button
          onClick={submitMail}
          className="py-3 px-7 block bg-slate-800 text-white rounded-full   m-auto my-5"
        >
          Login
        </button>
      </form>
    </div>
  );
}
