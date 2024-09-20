import NestedLayout from "@/components/nested-layout";
import { Poppins } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
});

export const metadata = {
  title: "TopSchool",
  description: "TopSchool primer medio de comunicación escolar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/next.svg" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={poppins.className}>
        <NestedLayout>
          {children}
        </NestedLayout>
      </body>
    </html>
  );
}
