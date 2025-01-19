import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "./icons";
import { Paragraph } from "./ui/paragraph";
import app from "@/config";
import { FbPixelButton } from "./fbpixel-button";

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
                <FbPixelButton
                  contentName="Footer Facebook Link"
                  value={app.facebookLink}
                  id="facebookLink"
                >
                  <Link href={app.facebookLink} target="_blank">
                    <Image
                      width={24}
                      height={24}
                      src="/facebook.png"
                      alt="faceboook link"
                    />
                  </Link>
                </FbPixelButton>
              </li>
              <li>
                <FbPixelButton
                  contentName="Footer Instagram Link"
                  value={app.instagramLink}
                  id="instagramLink"
                >
                  <Link href={app.instagramLink} target="_blank">
                    <Image
                      width={24}
                      height={24}
                      src="/instagram.png"
                      alt="instagram link"
                    />
                  </Link>
                </FbPixelButton>
              </li>
              <li>
                <FbPixelButton
                  contentName="Footer Tiktok Link"
                  value={app.tiktokLink}
                  id="tiktokLink"
                >
                  <Link href={app.tiktokLink} target="_blank">
                    <Image
                      width={24}
                      height={24}
                      className="object-contain h-[24px]"
                      src="/tiktok.png"
                      alt="tiktok link"
                    />
                  </Link>
                </FbPixelButton>
              </li>
              <li>
                <FbPixelButton
                  contentName="Footer Youtube Link"
                  value={app.youtubeLink}
                  id="youtubeLink"
                >
                  <Link href={app.youtubeLink} target="_blank">
                    <Image
                      width={24}
                      height={24}
                      src="/youtube.png"
                      alt="youtube link"
                    />
                  </Link>
                </FbPixelButton>
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
