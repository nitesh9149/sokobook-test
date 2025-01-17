"use client";
import app from "@/config";
import Image from "next/image";
import Link from "next/link";

function FbpixelButton() {
  function handleClick() {
    fbq("track", "googlePlayLink");
  }
  return (
    <Link
      href={app.googlePlayLink}
      target="_blank"
      name="Google Play Link"
      title="Link to Google Play Store"
    >
      <Image
        onClick={handleClick}
        src="/google-play-badge.webp"
        alt="Google play badge"
        className="object-contain"
        width={150}
        height={100}
      />
    </Link>
  );
}

export { FbpixelButton };
