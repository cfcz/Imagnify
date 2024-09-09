import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils" //created by chatcn
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


//导入字体
//重新命名，使得IBMPlex可以在class中使用
const IBMPlex = IBM_Plex_Sans({
  subsets:["latin"],
  weight:['400','500','600','700'],
  variable: '--font-ibm-plex'
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Imaginify",
//   description: "AI-powered Image Generater ",
// };



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
        >
          <SignedIn>
            {/* <UserButton /> */}
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
