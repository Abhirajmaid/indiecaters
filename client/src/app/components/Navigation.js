"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center flex-shrink-0">
						<Image src="/indie.image.png" alt="IndieCaters Logo" width={128} height={128} className="h-10 w-auto lg:h-12 object-contain" />
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg lg:text-xl transition-colors duration-200">
							Home
						</Link>
						<Link href="/about" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg lg:text-xl transition-colors duration-200">
							About
						</Link>
						<Link href="/products" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg lg:text-xl transition-colors duration-200">
							Products
						</Link>
						<Link href="/industries" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg lg:text-xl transition-colors duration-200">
							Industries
						</Link>
						<Link href="/contact" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg lg:text-xl transition-colors duration-200">
							Contact
						</Link>
					</nav>

					{/* CTA Button */}
					<div className="hidden md:flex items-center space-x-4">
						<Link href="/contact" className="bg-[#ce7c8a] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#b85c6d] transition-all duration-200 shadow-md hover:shadow-lg">
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button 
						aria-label="Toggle menu" 
						className="md:hidden p-2 text-gray-700 hover:text-[#ce7c8a] transition-colors duration-200" 
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-gray-200 bg-white">
						<nav className="flex flex-col py-4 space-y-2">
							<Link href="/" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg px-4 py-2 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
								Home
							</Link>
							<Link href="/about" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg px-4 py-2 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
								About
							</Link>
							<Link href="/products" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg px-4 py-2 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
								Products
							</Link>
							<Link href="/industries" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg px-4 py-2 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
								Industries
							</Link>
							<Link href="/contact" className="text-gray-700 hover:text-[#ce7c8a] font-semibold text-lg px-4 py-2 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
								Contact
							</Link>
							<div className="px-4 pt-2">
								<Link href="/contact" className="block bg-[#ce7c8a] text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-[#b85c6d] transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>
									Get Started
								</Link>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}