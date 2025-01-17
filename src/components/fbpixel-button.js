"use client";
import app from "@/config";
import Image from "next/image";
import Link from "next/link";

function FbpixelButton() {
  function handleClick() {
    fbq("track", "googlePlayLink");
  }
  return (
    <button onClick={handleClick} id="googlePlayLink" className="w-fit h-auto">
      <Link
        href={app.googlePlayLink}
        target="_blank"
        name="Google Play Link"
        title="Link to Google Play Store"
      >
        <Image
          src="/google-play-badge.webp"
          alt="Google play badge"
          className="object-contain"
          width={150}
          height={100}
        />
      </Link>
      <span className="sr-only">Google Play Button</span>
    </button>
  );
}

export { FbpixelButton };
