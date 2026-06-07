import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thulasimani Ganesan | Senior Full Stack Developer & Enterprise Application Specialist",
  description:
    "Senior Full Stack Developer with 4+ years of experience building enterprise Healthcare, ERP, CRM, Telemedicine, and Logistics solutions. Specializing in scalable architectures and complex integrations.",
  keywords: [
    "Full Stack Developer",
    "Enterprise Application Developer",
    "Healthcare Software",
    "Telemedicine Platform",
    "ERP Developer",
    "CRM Developer",
    "NestJS",
    "Angular",
    "React",
    "TypeScript",
    "Node.js",
    "Laravel",
  ],
  openGraph: {
    title: "Thulasimani Ganesan — Senior Full Stack Developer",
    description:
      "Enterprise Application Specialist | Healthcare, ERP, CRM, Telemedicine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
