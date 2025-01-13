import HeroContent from "@/components/hero-content";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import app from "@/config";

export const metadata = {
  title: "Delete Account",
};

function DeleteAccount() {
  return (
    <main className="bg-bgTertiary">
      <section>
        <HeroContent>
          <Heading variant={HEADING_TYPES.heading4xl}>Account Deletion</Heading>
        </HeroContent>
      </section>

      <section className="pb-24">
        <div className="w-[90%] lg:max-w-4xl 2xl:max-w-5xl 2xl:w-[52rem] mx-auto py-8 sm:py-16 space-y-4">
          <Paragraph>
            Since the business data in {app.name} is very sensitive data of
            users, if you want to delete your account, please send us a
            confirmation message at {""}
            <a className="text-textPrimary" href={`mailto:${app.emailLink}`}>
              {app.emailLink}
            </a>{" "}
            with your {app.name} account number and we will process the accout
            deletion within 2 days with manual verification.
          </Paragraph>
        </div>
      </section>
    </main>
  );
}
export default DeleteAccount;
