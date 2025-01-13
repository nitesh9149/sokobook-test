import React from "react";
import HeroContent from "@/components/hero-content";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import app from "@/config";

export const metadata = {
  title: "Terms & Conditions",
};

const TermsConditions = () => {
  return (
    <main className="bg-bgTertiary">
      <section>
        <HeroContent>
          <Heading variant={HEADING_TYPES.heading4xl}>
            Terms & Conditions
          </Heading>
        </HeroContent>
      </section>

      <section>
        <div className="w-[90%] lg:max-w-4xl 2xl:max-w-5xl 2xl:w-[52rem] mx-auto py-8 sm:py-16 space-y-4">
          <Paragraph>
            By downloading or using the app, these terms will automatically
            apply to you - you should make sure therefore that you read them
            carefully before using the app. You&apos;re not allowed to copy, or
            modify the app, any part of the app, or our trademarks in any way.
            You&apos;re not allowed to attempt to extract the source code of the
            app, and you also shouldn&apos;t try to translate the app into other
            languages, or make derivative versions. The app itself, and all the
            trade marks, copyright, database rights and other intellectual
            property rights related to it, still belong to {app.name}.
            <br />
            {app.name} is committed to ensuring that the app is as useful and
            efficient as possible. For that reason, we reserve the right to make
            changes to the app or to charge for its services, at any time and
            for any reason. We will never charge you for the app or its services
            without making it very clear to you exactly what you&apos;re paying
            for.
            <br />
            The {app.name} app stores and processes personal data that you have
            provided to us, in order to provide our Service. It&apos;s your
            responsibility to keep your phone and access to the app secure. We
            therefore recommend that you do not jailbreak or root your phone,
            which is the process of removing software restrictions and
            limitations imposed by the official operating system of your device.
            It could make your phone vulnerable to malware/viruses/malicious
            programs, compromise your phone&apos;s security features and it
            could mean that the {app.name} app won&apos;t work properly or at
            all.
            <br />
            <br />
            The app does use third party services that declare their own Terms
            and Conditions.
            <br />
            <br />
            Link to Terms and Conditions of third party service providers used
            by the app
          </Paragraph>
          <ul className="list-disc list-inside">
            <li>
              <a
                className="text-textPrimary"
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a
                className="text-textPrimary"
                href="https://firebase.google.com/policies/analytics"
                target="_blank"
              >
                Google Analytics for Firebase
              </a>
            </li>
            <li>
              <a
                className="text-textPrimary"
                href="https://mixpanel.com/legal/privacy-policy/"
                target="_blank"
              >
                Mixpanel Analytics
              </a>
            </li>
            <li>
              <a
                className="text-textPrimary"
                href="https://firebase.google.com/support/privacy/"
                target="_blank"
              >
                Firebase Crashlytics
              </a>
            </li>
            <li>
              <a
                className="text-textPrimary"
                href="https://sentry.io/privacy/"
                target="_blank"
              >
                Sentry Crashlytics
              </a>
            </li>
          </ul>
          <Paragraph>
            You should be aware that there are certain things that {app.name}{" "}
            will not take responsibility for. Certain functions of the app will
            require the app to have an active internet connection. The
            connection can be Wi-Fi, or provided by your mobile network
            provider, but {app.name} cannot take responsibility for the app not
            working at full functionality if you don&apos;t have access to
            Wi-Fi, and you don&apos;t have any of your data allowance left.
            <br />
            If you&apos;re using the app outside of an area with Wi-Fi, you
            should remember that your terms of the agreement with your mobile
            network provider will still apply. As a result, you may be charged
            by your mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third party charges. In
            using the app, you&apos;re accepting responsibility for any such
            charges, including roaming data charges if you use the app outside
            of your home territory (i.e. region or country) without turning off
            data roaming. If you are not the bill payer for the device on which
            you&apos;re using the app, please be aware that we assume that you
            have received permission from the bill payer for using the app.
            <br />
            Along the same lines, {app.name} cannot always take responsibility
            for the way you use the app i.e. You need to make sure that your
            device stays charged - if it runs out of battery and you can&apos;t
            turn it on to avail the Service, {app.name} cannot accept
            responsibility.
            <br />
            With respect to {app.name}&apos;s responsibility for your use of the
            app, when you&apos;re using the app, it&apos;s important to bear in
            mind that although we endeavour to ensure that it is updated and
            correct at all times, we do rely on third parties to provide
            information to us so that we can make it available to you.{" "}
            {app.name}
            accepts no liability for any loss, direct or indirect, you
            experience as a result of relying wholly on this functionality of
            the app.
            <br />
            At some point, we may wish to update the app. The app is currently
            available on Android & iOS - the requirements for both systems(and
            for any additional systems we decide to extend the availability of
            the app to) may change, and you&apos;ll need to download the updates
            if you want to keep using the app. {app.name} does not promise that
            it will always update the app so that it is relevant to you and/or
            works with the Android & iOS version that you have installed on your
            device. However, you promise to always accept updates to the
            application when offered to you, We may also wish to stop providing
            the app, and may terminate use of it at any time without giving
            notice of termination to you. Unless we tell you otherwise, upon any
            termination, (a) the rights and licenses granted to you in these
            terms will end; (b) you must stop using the app, and (if needed)
            delete it from your device.
          </Paragraph>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Changes to This Terms and Conditions
          </Heading>
          <Paragraph>
            We may update our Terms and Conditions from time to time. Thus, you
            are advised to review this page periodically for any changes. We
            will notify you of any changes by posting the new Terms and
            Conditions on this page.
            <br />
            These terms and conditions are effective as of 2024-10-24
          </Paragraph>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Contact Us
          </Heading>
          <Paragraph>
            If you have any questions or suggestions about our Terms and
            Conditions, do not hesitate to contact us at{" "}
            <a className="text-textPrimary" href={`mailto:${app.emailLink}`}>
              {app.emailLink}
            </a>
          </Paragraph>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
