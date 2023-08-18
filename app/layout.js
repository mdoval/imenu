import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider  } from "@/app/components/AuthProvider";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iMenu",
  description: "iMenu ",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
