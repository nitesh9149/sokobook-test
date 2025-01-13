import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "./icons";
import { Paragraph } from "./ui/paragraph";
import app from "@/config";

function FooterSection() {
  return (
    <section className="mt-12">
      <div className="border-b border-default py-8">
        <Container>
          <div className="flex justify-between">
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
            <ul className="flex gap-4">
              <li>
                <button
                  className="w-fit h-auto"
                  data-fb-content-name="Facebook Link"
                  data-fb-value={app.facebookLink}
                >
                  <Link href={app.facebookLink} target="_blank">
                    <FacebookIcon />
                  </Link>
                  <span className="sr-only">Footer Facebook Link</span>
                </button>
              </li>
              <li>
                <button>
                  <Link href={app.instagramLink} target="_blank">
                    <InstagramIcon />
                  </Link>
                  <span className="sr-only">Footer Instagram Link</span>
                </button>
              </li>
              <li>
                <button>
                  <Link href={app.tiktokLink} target="_blank">
                    <TiktokIcon />
                  </Link>
                  <span className="sr-only">Footer TikTok Link</span>
                </button>
              </li>
              <li>
                <button>
                  <Link href={app.youtubeLink} target="_blank">
                    <YoutubeIcon />
                  </Link>
                  <span className="sr-only">Footer Youtube Link</span>
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="py-4">
        <Container>
          <div className="flex justify-center md:justify-between py-4 gap-4 flex-wrap">
            <Paragraph className="text-center sm:text-left">
              {app.copyRightText}
            </Paragraph>
            <ul className="flex gap-6">
              <li>
                <Link href="/privacy-policy" className="text-textSecondary">
                  {app.privacyPolicyText}
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-textSecondary">
                  {app.termsConditionsText}
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
export default FooterSection;
