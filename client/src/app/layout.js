import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title:
		"IndieCaters - Leading Industrial Indicators Manufacturer | Sterilization, Moisture & Temperature Solutions",
	description:
		"IndieCaters Pvt Ltd - India's premier manufacturer of professional industrial indicators. Specializing in sterilization, moisture, and temperature monitoring solutions with 15+ years of expertise. ISO certified quality, woman-led innovation.",
	keywords:
		"industrial indicators, sterilization indicators, moisture indicators, temperature indicators, steam indicators, ETO indicators, chemical indicators, India manufacturer, quality assurance",
	authors: [{ name: "IndieCaters Pvt Ltd" }],
	creator: "IndieCaters Pvt Ltd",
	publisher: "IndieCaters Pvt Ltd",
	robots: "index, follow",
	openGraph: {
		title: "IndieCaters - Leading Industrial Indicators Manufacturer",
		description:
			"Professional industrial indicators for sterilization, moisture, and temperature monitoring. 15+ years of expertise, ISO certified, woman-led innovation.",
		url: "https://indiecaterS.com",
		siteName: "IndieCaters",
		images: [
			{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "IndieCaters Industrial Indicators" },
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "IndieCaters - Leading Industrial Indicators Manufacturer",
		description:
			"Professional industrial indicators for sterilization, moisture, and temperature monitoring.",
		images: ["/images/og-image.jpg"],
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#FCD34D",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
