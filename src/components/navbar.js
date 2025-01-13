import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { Button } from "./ui/button";
import app from "@/config";

function Navbar() {
  return (
    <nav className="fixed w-screen h-[var(--navbar-height)] border-b border-default bg-white z-[99]">
      <Container className="flex items-center justify-between h-full">
        <Link href="/">
          <figure className="h-[40px] relative w-[115px] sm:w-[130px] md:w-[150px]">
            <Image
              className="object-contain"
              fill
              src={app.logo}
              alt={`Logo for ${app.name}`}
            />
          </figure>
        </Link>
        <div className="flex items-center gap-8">
          {/* <Link href="/#faqs" className={"text-body-lg-default"}>
            FAQs
          </Link>
          <Link href="/#contact-us" className={"text-body-lg-default"}>
            Contact Us
          </Link> */}
          <Link href={app.downloadNowLink} target="_blank">
            <Button className="flex gap-2 items-center py-2">
              {app.downloadNowText}
            </Button>
          </Link>
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
