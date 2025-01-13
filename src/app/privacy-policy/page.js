import React from "react";
import HeroContent from "@/components/hero-content";
import { Heading, HEADING_TYPES } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import app from "@/config";

export const metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <main className="bg-bgTertiary">
      <section>
        <HeroContent>
          <Heading variant={HEADING_TYPES.heading4xl}>Privacy Policy</Heading>
        </HeroContent>
      </section>

      <section>
        <div className="w-[90%] lg:max-w-4xl 2xl:max-w-5xl 2xl:w-[52rem] mx-auto py-8 sm:py-16 space-y-4">
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.heading2xl}
          >
            Introduction
          </Heading>
          <Paragraph>
            Welcome to {app.name}. This page is used to inform visitors
            regarding our policies with the collection, use, and disclosure of
            Personal Information if anyone decided to use our Service. If you
            choose to use our Service, then you agree to the collection and use
            of information in relation to this policy. The Personal Information
            that we collect is used for providing and improving the Service. We
            will not use or share your information with anyone except as
            described in this Privacy Policy. The terms used in this Privacy
            Policy have the same meanings as in our Terms and Conditions, which
            is accessible at {app.name} unless otherwise defined in this Privacy
            Policy.
          </Paragraph>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Information Collection and Use
          </Heading>
          <Paragraph>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to Phone numbers, username, business
            detail, email.
            <br />
            When a user registers as a new user we collect their:
          </Paragraph>
          <ul className="list-disc list-inside">
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Address</li>
            <li>Business Name</li>
            <li>Contact List (Name & Phone Number)</li>
          </ul>
          <Paragraph>
            We also collect the date and time about when you last logged in.
            <br />
            We have a feature to let user record sales, purchase, payment in,
            out, income & expenses for which we record following information:
          </Paragraph>
          <ul className="list-disc list-inside">
            <li>Bill No</li>
            <li>Bill Images</li>
            <li>Party Contact Details</li>
            <li>Stock Details</li>
            <li>Amount</li>
            <li>Remarks</li>
          </ul>
          <Paragraph>
            We also let you upload excel file to bulk import products & parties
            for which we access your file permission.
          </Paragraph>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Why do we record such information
          </Heading>
          <ul className="list-decimal list-inside">
            <li>
              We collect such information for registration process of a new user
              account.
            </li>
            <li>
              We use users phone number to let user login through OTP code.
            </li>
            <li>
              We let you record bill information, upload images and party
              contact details so that you can keep track of your sales,
              purchases & transactions with {app.name} app.
            </li>
            <li>
              We access the contact list name and phone number according to your
              permission which we will use to show auto-suggestions of party
              details while creating new customer/supplier for ease of use.
            </li>
          </ul>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Who can view these data?
          </Heading>
          <Paragraph>
            The data that user have entered will be confidential and can only be
            viewed by the user. We do not sell or share the above mentioned
            information to other parties.
          </Paragraph>
          <Paragraph>
            To make creating such an issue as simple as possible, we use Issue
            Templates. This imports a pre-defined text that already contains
            most of the relevant information for that specific issue. This means
            we only have to make a few small additions. It saves a lot of time
            (we love that!).
          </Paragraph>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Third Party Services
          </Heading>
          <Paragraph>
            The information that we request will be retained by us and used as
            described in this privacy policy. The app does use third party
            services that may collect information used to identify you. Link to
            privacy policy of third party service providers used by the app.
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
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Log Data
          </Heading>
          <Paragraph>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </Paragraph>
          <Heading
            as="h2"
            className="text-left"
            variant={HEADING_TYPES.headinglg}
          >
            Cookies
          </Heading>
          <Paragraph>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device&apos;s
            internal memory.
            <br />
            This Service does not use these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </Paragraph>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
