import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	metadataBase: new URL('https://www.indiecaters.com'),
	title:
		"IndieCaters - Leading Industrial Indicators Manufacturer | Sterilization, Moisture & Temperature Solutions",
	description:
		"IndieCaters Pvt Ltd - India's premier manufacturer of professional industrial indicators. Specializing in sterilization, moisture, and temperature monitoring solutions with 15+ years of expertise. ISO certified quality, woman-led innovation.",
	keywords:
		"industrial indicators, sterilization indicators, moisture/ humidity indicators, temperature indicators, steam indicators, ETO indicators, chemical indicators, India manufacturer, quality assurance, ISO certified",
	authors: [{ name: "IndieCaters Pvt Ltd" }],
	creator: "IndieCaters Pvt Ltd",
	publisher: "IndieCaters Pvt Ltd",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: "IndieCaters - Leading Industrial Indicators Manufacturer",
		description:
			"Professional industrial indicators for sterilization, moisture, and temperature monitoring. 15+ years of expertise, ISO certified, woman-led innovation.",
		url: "https://www.indiecaters.com",
		siteName: "IndieCaters",
		images: [
			{ url: "/indie.image.png", width: 1200, height: 630, alt: "IndieCaters Industrial Indicators" },
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "IndieCaters - Leading Industrial Indicators Manufacturer",
		description:
			"Professional industrial indicators for sterilization, moisture, and temperature monitoring. ISO certified, woman-led innovation.",
		images: ["/indie.image.png"],
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
			<head>
				<StructuredData />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
