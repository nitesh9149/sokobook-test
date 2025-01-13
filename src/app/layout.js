import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import FooterSection from "@/components/footer";
import Script from "next/script";
import app from "@/config";

export const metadata = {
  title: {
    default: app.name,
    template: `%s | ${app.name} `,
  },
  openGraph: {
    title: app.name,
    description: app.metaDescription,
    images: [
      {
        url: app.ogImage,
        width: 1200,
        height: 720,
        alt: app.name,
      },
    ],
  },
  twitter: {
    title: app.name,
    description: app.metaDescription,
    images: [
      {
        url: app.ogImage,
        width: 1200,
        height: 720,
        alt: app.name,
      },
    ],
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang={app.lang}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1124491962704016');
fbq('track', 'PageView');
`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterSection />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
        height="1"
        width="1"
        style="display:none"
        alt="facebook pixel no script image"
        src="https://www.facebook.com/tr?id=1124491962704016&ev=PageView&noscript=1"
      />`,
          }}
        />
      </body>
    </html>
  );
}
