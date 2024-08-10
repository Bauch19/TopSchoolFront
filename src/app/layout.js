import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800','900'],
});

const metadata = {
  title: "TopSchool",
  description: "TopSchool primer medio de comunicación escolar",
};

import "./globals.css";
import NestedLayout from "@/components/nested-layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/vercel.svg" />
      <body className={poppins.className}>
        <NestedLayout>
          {children}
        </NestedLayout>
      </body>
    </html>
  );
}
