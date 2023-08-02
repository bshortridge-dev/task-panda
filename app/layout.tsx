import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskPanda",
  description: "Next generation task management."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body>
          <div className="flex mt-4 mr-4 top-1/2 justify-end">
            <UserButton
              afterSignOutUrl="/"
              showName={true}
              appearance={{
                userProfile: { elements: { breadcrumbs: "bg-slate-500" } }
              }}
            />
          </div>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
