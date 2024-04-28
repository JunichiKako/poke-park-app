import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import "./custom.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import Header from "./components/header";
import Footer from "./components/footer";

const DotGothic = DotGothic16({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "POKEMON PARKS",
    description: "ポケモン公園をまとめたサイトです。",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={cn(DotGothic.className, "h-dvh flex flex-col")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
