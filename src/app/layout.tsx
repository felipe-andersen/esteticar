import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { initalizeTracing } from "@/instrumentation";


// initalizeTracing()

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()
export const metadata: Metadata = {
    title: "UI",
    description: "UI",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
             <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            </head>
            <body className={`inter.className`}>
                {/* <Providers> */}
                    {children}  
                {/* </Providers> */}
            </body>
        </html>
    );
}
