import { useState } from "react";
import Container from "./Layout/Container";
import { Cross as Hamburger } from "hamburger-react";
import Link from "next/link";
import cls from "classnames";
export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <div className="py-4 w-ful flex justify-between">
        <div>
          <h1 className="text-4xl">neo matters</h1>
        </div>
        <div className="px-6 lg:hidden lg:p-0">
          <div
            className={cls(
              "z-50 ",
              "relative flex  items-center",
              isOpen && "text-white"
            )}
          >
            <Hamburger size={26} toggled={isOpen} toggle={setOpen} />{" "}
            <span className="text-lg duration-300">
              {" "}
              {isOpen ? "close" : "menu"}{" "}
            </span>
          </div>
          <div className="w-[100vw] left-0 top-0 h-full z-40 flex justify-end   fixed">
            <div
              className={cls(
                " h-full w-full text-2xl  bg-gray-800 duration-300 text-white justify-center items-center relative flex flex-col space-y-6",
                isOpen ? "translate-x-0" : "translate-x-[100%]"
              )}
            >
              <Link href="work">work</Link>
              <Link href="culture">culture</Link>
              <Link href="career">career</Link>
              <Link href="/">blog</Link>
              <button className="bg-white text-lg py-2 px-7 text-gray-800 rounded-full">
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex space-x-9 items-center">
          <Link href="work">work</Link>
          <Link href="culture">culture</Link>
          <Link href="career">career</Link>
          <Link href="/">blog</Link>
          <button className="bg-gray-800 text-sm py-2 px-6 text-white rounded-full">
            Get in touch
          </button>
        </div>
      </div>
    </Container>
  );
}
