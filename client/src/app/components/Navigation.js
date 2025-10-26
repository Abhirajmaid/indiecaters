"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

	const categories = [
		{ id: "sterilization", name: "Sterilization Indicators", slug: "/products/sterilization" },
		{ id: "humidity", name: "Humidity Indicators", slug: "/products/humidity" },
		{ id: "temperature", name: "Temperature Indicators", slug: "/products/temperature" },
		{ id: "moisture", name: "Moisture Indicators", slug: "/products/moisture" },
	];

	return (
		<header className="border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3 group">
						<div className="relative">
							<Image
								src="/indie.image.png"
								alt="IndieCaters"
								width={350}
								height={350}
								className="h-28 w-28 sm:h-32 sm:w-32 object-contain transition-transform group-hover:scale-105"
							/>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-1">
						<Link
							href="/"
							className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors rounded-lg hover:bg-gray-50"
						>
							Home
						</Link>

						<Link
							href="/about"
							className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors rounded-lg hover:bg-gray-50"
						>
							About
						</Link>

						{/* Products Dropdown */}
						<div className="relative" onMouseEnter={() => setIsProductsDropdownOpen(true)} onMouseLeave={() => setIsProductsDropdownOpen(false)}>
							<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors rounded-lg hover:bg-gray-50 flex items-center space-x-1">
								<span>Products</span>
								<svg className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							{isProductsDropdownOpen && (
								<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
									{categories.map((category) => (
										<Link
											key={category.id}
											href={category.slug}
											className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors"
										>
											{category.name}
										</Link>
									))}
									<div className="border-t border-gray-100 my-1"></div>
									<Link
										href="/catalog"
										className="block px-4 py-3 text-sm font-medium text-pink-600 hover:bg-pink-50 transition-colors"
									>
										View All Products →
									</Link>
								</div>
							)}
						</div>

						<Link
							href="/industries"
							className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors rounded-lg hover:bg-gray-50"
						>
							Industries
						</Link>

						<Link
							href="/contact"
							className="px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-50 transition-colors rounded-lg"
						>
							Contact
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="lg:hidden border-t border-gray-200 py-4">
						<nav className="flex flex-col space-y-1">
							<Link
								href="/"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors rounded-lg"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/about"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors rounded-lg"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About
							</Link>
							<div className="px-4 py-3">
								<button
									onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
									className="w-full flex items-center justify-between text-base font-medium text-gray-700 hover:text-pink-600 transition-colors"
								>
									Products
									<svg className={`w-5 h-5 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</button>
								{isProductsDropdownOpen && (
									<div className="mt-2 space-y-1 pl-4">
										{categories.map((category) => (
											<Link
												key={category.id}
												href={category.slug}
												className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-pink-600 transition-colors rounded-lg"
												onClick={() => {
													setIsMobileMenuOpen(false);
													setIsProductsDropdownOpen(false);
												}}
											>
												{category.name}
											</Link>
										))}
									</div>
								)}
							</div>
							<Link
								href="/industries"
								className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors rounded-lg"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Industries
							</Link>
							<Link
								href="/contact"
								className="px-4 py-3 text-base font-medium text-pink-600 hover:bg-pink-50 transition-colors rounded-lg"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contact
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
