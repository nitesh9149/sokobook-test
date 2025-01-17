import Container from "@/components/container";
import { MailIcon, TrustedIcon } from "@/components/icons";
import LoadingMotionWrapper from "@/components/motion/inital-loading-motion";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import Image from "next/image";
import HeroImageMotion from "@/components/motion/hero-image-motion";
import FAQSection from "@/components/faq-section";
import app from "@/config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-screen">
        <section className="relative">
          <Container className="flex gap-8 items-center pt-[calc(var(--navbar-height)+80px)] lg:pt-0 min-h-[750px]">
            <div className="w-full lg:w-1/2">
              <LoadingMotionWrapper className="flex justify-center lg:justify-start">
                <span className="w-fit flex gap-2 items-center bg-surfacePrimary text-primaryMain  rounded-full py-1.5 px-3 text-body-xs-semibold sm:text-body-sm-semibold">
                  <TrustedIcon className="size-[18px] 2xl:size-5" />
                  {app.badgeText}
                </span>
              </LoadingMotionWrapper>

              <LoadingMotionWrapper
                transition={{ delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <Heading
                  variant={HEADING_TYPES.heading4xl}
                  className="sm:w-2/3 lg:w-full lg:text-left mt-6 2xl:mt-8"
                >
                  {app.bannerTitle}
                </Heading>
              </LoadingMotionWrapper>

              <LoadingMotionWrapper
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center lg:items-start"
              >
                <Paragraph className="mt-6 sm:w-2/3 lg:w-[85%] text-center lg:text-left text-body-lg-default">
                  {app.bannerDescription}
                </Paragraph>
                <section className="">
                  <h2 className="w-full text-textDefault font-normal text-heading-md text-center lg:text-left mt-6 2xl:mt-8">
                    {app.downloadNowText}
                  </h2>
                  <div className="w-screen mt-4 flex sm:flex-row justify-center lg:justify-start gap-6">
                    <button id="googlePlayLink" className="w-fit h-auto">
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

                    {/* <Link href={app.appStoreLink} target="_blank">
                      <Image
                        src="/app-store-badge.png"
                        className="object-contain"
                        alt="App Store badge"
                        width={150}
                        height={100}
                      />
                    </Link> */}
                  </div>
                </section>
              </LoadingMotionWrapper>

              {/* Hero image for mobile & tablet devices =========================== */}
              <LoadingMotionWrapper
                viewport={{ once: true, amount: 0 }}
                className="flex justify-center mt-16 lg:hidden"
              >
                <Image
                  src={app.bannerImage}
                  alt="Laptop-Mobile thumbnail"
                  width={1200}
                  height={800}
                  className="w-[300px] xl:w-[58vw] 2xl:w-[960px] ml-[7rem]"
                  priority
                />
              </LoadingMotionWrapper>

              {/* Hero image for desktop devices =========================== */}
              {/* right side ============================== */}
              <HeroImageMotion className="hidden lg:block absolute right-[0%] xl:right-[5%] 3xl:right-0 3xl:left-[50%] top-[20%]">
                <Image
                  src={app.bannerImage}
                  alt="Laptop-Mobile thumbnail"
                  width={1200}
                  height={800}
                  className="w-[450px] md:w-[35vw] xl:w-[460px]"
                  priority
                />
              </HeroImageMotion>
            </div>
          </Container>
        </section>

        {/* FAQ's section ======================================
      ======================================================== */}
        <section id="faqs" className="py-20 scroll-mt-[8rem]">
          <Container className="text-center">
            <Heading variant={HEADING_TYPES.heading3xl}>
              Frequently Asked Questions
            </Heading>

            <FAQSection faqs={app.faqs} />
          </Container>
        </section>

        {/* Get in touch with us ======================================
      ======================================================== */}
        <Container>
          <section
            id="contact-us"
            className="bg-bgSecondary border border-borderDefault flex flex-wrap gap-8 justify-center md:justify-between items-center p-12 rounded-[32px] mt-8"
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <Heading
                as="h2"
                variant={HEADING_TYPES.heading2xl}
                className="sm:w-2/3 lg:w-full w-full sm:text-left"
              >
                {app.contactTitle}
              </Heading>
              <Paragraph className="text-center md:text-left">
                {app.contactDescription}
              </Paragraph>
            </div>
            <div className="flex items-center gap-4">
              <MailIcon />
              <div className="flex flex-col">
                <p className="text-left text-sm text-textSecondary font-medium">
                  {app.emailText}
                </p>
                <a
                  href={`mailto:${app.emailLink}`}
                  className="font-medium text-md sm:text-lg"
                >
                  {app.emailLink}
                </a>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
