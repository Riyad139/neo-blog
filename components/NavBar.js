import Container from "./Layout/Container";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
export default function NavBar() {
  return (
    <Container>
      <div className="py-4 w-full">
        <div>
          <h1>neo matters</h1>
        </div>
        <div className="lg:hidden">
          <Menu>
            <Link href="work">Work</Link>
            <Link href="Culture">Culture</Link>
            <Link href="Careers">Careers</Link>
          </Menu>
        </div>
      </div>
    </Container>
  );
}
