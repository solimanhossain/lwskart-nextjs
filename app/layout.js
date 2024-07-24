import connectMongo from "@/dbConnect/connectMongo";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    // variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "LWSKart",
    description: "LWSKart Ecommerce",
};

export default async function RootLayout({ children }) {
    await connectMongo();

    return (
        <html lang="en">
            <body className={`${poppins.className} ${roboto.className}`}>
                {children}
            </body>
        </html>
    );
}
