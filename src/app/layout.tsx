import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the main font
const inter = Inter({ subsets: ["latin"], display: 'swap' });

// --- SEO Metadata Configuration (Safe & International) ---
export const metadata: Metadata = {
  // Smart Title: Focuses on expertise without location
  title: {
    default: "Majid Mansouri | Senior Full-Stack Developer",
    template: "%s | Majid Mansouri",
  },
  // Description: Emphasizes remote work and global quality
  description:
    "Portfolio of Majid Mansouri, a Senior Full-Stack Developer specializing in scalable Next.js applications, Real-time dashboards, and Enterprise solutions. Available for remote collaboration globally.",
  
  // Keywords: Technical and English only
  keywords: [
    "Majid Mansouri",
    "Full-Stack Developer",
    "Next.js Expert",
    "React Developer",
    "WebRTC Implementation",
    "TypeScript Specialist",
    "Remote Developer",
    "Frontend Engineer",
    "Scalable Web Apps",
    "PWA Development",
  ],
  
  // Author information
  authors: [{ name: "Majid Mansouri", url: "https://mansoori.dev" }],
  creator: "Majid Mansouri",
  
  // Robot settings (Index allowed, but no location signals)
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

  // Open Graph: English locale only
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mansoori.dev",
    title: "Majid Mansouri - Senior Full-Stack Developer",
    description: "Expert in building scalable web applications with Next.js & React. Ready for enterprise-grade remote projects.",
    siteName: "Majid Mansouri Portfolio",
    images: [
      {
        url: "https://mansoori.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Majid Mansouri - Full-Stack Developer",
      },
    ],
  },

  // Twitter Card settings
  twitter: {
    card: "summary_large_image",
    title: "Majid Mansouri | Full-Stack Dev",
    description: "Building next-gen web apps with Next.js and TypeScript. Remote & Available.",
    creator: "@majidproject",
    images: ["https://mansoori.dev/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // *** Google Verification Code ***
  verification: {
    google: "bbZHPU0b4o3mk9uRDnbvpgFpki5x8q19hCN-LAlpX_s", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Schema Markup (Sanitized for Safety) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Majid Mansouri",
              url: "https://mansoori.dev",
              image: "https://mansoori.dev/majid_mansoori.jpg",
              sameAs: [
                "https://github.com/majidproject",
                "https://linkedin.com/in/majidmansouri",
                "https://twitter.com/majidmansouri",
              ],
              jobTitle: "Senior Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Remote Freelancer",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global", 
              },
              knowsAbout: [
                "Web Development",
                "Next.js",
                "React",
                "TypeScript",
                "Software Architecture",
                "Real-time Systems"
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}