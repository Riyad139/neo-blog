import Container from "../Layout/Container";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
export default function Footer(props) {
  return (
    <div className="py-9 text-white  bg-slate-900 ">
      <Container>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row space-x-4 justify-center items-center">
          <h1 className="  md:text-2xl lg:text-5xl font-bold">
            Because, every pixel matters.
          </h1>
          <button className=" group text-lg space-x-2 rounded-full hover:bg-blue-700 bg-blue-600 justify-center items-center flex py-3 px-6">
            <span>Let's talk </span>
            <span className=" duration-150 group-hover:translate-x-1 ">→</span>
          </button>
        </div>
        <hr className="my-10 border-slate-600" />
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className=" flex-col md:flex-row px-1 md:px-0 space-y-3 md:items-end md:space-y-0 flex md:space-x-5  ">
            <Link href="#">Neo Matters</Link>
            <Link href="#">Work</Link>
            <Link href="#">Culture</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Blog</Link>
            <Link href="#">BrandMatters</Link>
            <Link href="#">Goodies</Link>
          </div>
          <div className="  md:flex-row md:item-end pt-4 lg:pt-0 px-1  lg:px-0  flex space-x-5">
            <AiOutlineGlobal size={26} />
            <AiOutlineInstagram size={26} />
            <AiOutlineFacebook size={26} />
            <AiOutlineTwitter size={26} />
            <AiOutlineLinkedin size={26} />
          </div>
        </div>
        <div className="flex pt-6 text-xs text-slate-500  justify-between">
          <div className="flex  space-x-4  ">
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Contact us</p>
          </div>
          <div cla>
            <p>©2022 NeoMatters</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
