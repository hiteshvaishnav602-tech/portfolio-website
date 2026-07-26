import { Geist, Fira_Code } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hiteshvaishnav.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hitesh Vaishnav – Full Stack Web Developer | MERN Stack",
    template: "%s | Hitesh Vaishnav",
  },
  description:
    "Portfolio of Hitesh Vaishnav, a Motivated Full Stack Web Developer specializing in React.js, Node.js, Express.js, MongoDB, REST APIs, JWT Auth, and modern Web Applications.",
  keywords: [
    "Hitesh Vaishnav",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "REST API Developer",
    "JavaScript Developer",
    "Ahmedabad Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Hitesh Vaishnav", url: siteUrl }],
  creator: "Hitesh Vaishnav",
  publisher: "Hitesh Vaishnav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hitesh Vaishnav – Full Stack Web Developer | MERN Stack",
    description:
      "Motivated Full Stack Web Developer crafting scalable MERN stack applications with React.js, Node.js, Express.js, and MongoDB.",
    url: siteUrl,
    siteName: "Hitesh Vaishnav Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitesh Vaishnav – Full Stack Web Developer | MERN Stack",
    description:
      "Motivated Full Stack Web Developer crafting scalable MERN stack applications.",
    creator: "@hiteshvaishnav",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hitesh Vaishnav",
    url: siteUrl,
    jobTitle: "Full Stack Web Developer (MERN Stack)",
    worksFor: {
      "@type": "Organization",
      name: "StackCode Training Institute",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    email: "mailto:hiteshvaishnav602@gmail.com",
    telephone: "+917877613187",
    sameAs: [
      "https://github.com/hiteshvaishnav602-tech",
      "https://www.linkedin.com/in/hitesh-vaishnav-dev",
    ],
    knowsAbout: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API Design",
      "JavaScript (ES6+)",
      "MERN Stack Architecture",
      "Full Stack Development",
      "JWT Authentication",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
