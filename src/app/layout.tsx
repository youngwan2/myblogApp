import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header></Header>
        <div style={{display:'flex'}}>
          <main style={{maxWidth:"1600px", margin:"0 auto"}}>{children}</main>

        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
