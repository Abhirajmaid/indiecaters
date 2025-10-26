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
	metadataBase: new URL('https://indiecaterS.com'),
	title: {
		default: "IndieCaters - Leading Industrial Indicators Manufacturer | Sterilization, Moisture & Temperature Solutions",
		template: "%s | IndieCaters",
	},
	description:
		"IndieCaters Pvt Ltd - India's premier manufacturer of professional industrial indicators. Specializing in sterilization, moisture, and temperature monitoring solutions with 15+ years of expertise. ISO certified quality, woman-led innovation.",
	keywords: [
		"industrial indicators",
		"sterilization indicators",
		"moisture indicators",
		"temperature indicators",
		"steam indicators",
		"ETO indicators",
		"chemical indicators",
		"India manufacturer",
		"quality assurance",
		"healthcare indicators",
		"pharmaceutical indicators",
		"autoclave indicators",
		"humidity cards",
		"ISO 9001 certified",
		"Made in India"
	],
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
	openGraph: {
		title: "IndieCaters - Leading Industrial Indicators Manufacturer",
		description:
			"Professional industrial indicators for sterilization, moisture, and temperature monitoring. 15+ years of expertise, ISO certified, woman-led innovation.",
		url: "https://indiecaterS.com",
		siteName: "IndieCaters",
		images: [
			{
				url: "/indie.image.png",
				width: 1200,
				height: 630,
				alt: "IndieCaters Industrial Indicators - ISO Certified Manufacturer",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "IndieCaters - Leading Industrial Indicators Manufacturer",
		description:
			"Professional industrial indicators for sterilization, moisture, and temperature monitoring.",
		images: ["/indie.image.png"],
		creator: "@indiecaterS",
	},
	alternates: {
		canonical: "https://indiecaterS.com",
	},
	category: 'Industrial Manufacturing',
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: "#EC4899",
	themeColorScheme: "light",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" itemScope itemType="https://schema.org/Organization">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://indiecaterS.com" />
				<meta name="geo.region" content="IN-MH" />
				<meta name="geo.placename" content="Pune" />
				<meta name="geo.position" content="18.5204;73.8567" />
				<meta name="ICBM" content="18.5204, 73.8567" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
