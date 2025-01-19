"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { Button } from "./ui/button";
import app from "@/config";

function Navbar() {
  function handleClick() {
    fbq("track", "downloadNowLink", {
      content_name: "Download Now Link",
      value: app.downloadNowLink,
    });
  }
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
          <Button
            onClick={handleClick}
            id="downloadNowLink"
            className="flex gap-2 items-center py-2"
          >
            <Link href={app.downloadNowLink} target="_blank">
              {app.downloadNowText}
            </Link>
          </Button>
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
