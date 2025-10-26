"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
	const [hoveredCategory, setHoveredCategory] = useState(null);

	const categories = [
		{ id: "sterilization", name: "Sterilization Indicators", icon: "🦠", description: "Professional steam sterilization indicators for healthcare and pharmaceutical industries" },
		{ id: "humidity", name: "Humidity Indicators", icon: "💧", description: "Reliable moisture detection for pharmaceutical, food, and packaging industries" },
		{ id: "temperature", name: "Temperature Indicators", icon: "🌡️", description: "Precise temperature monitoring solutions for critical processes" },
		{ id: "moisture", name: "Moisture Indicators", icon: "💧", description: "Advanced moisture monitoring for industrial applications" },
	];

	const products = [
		{
			id: 1,
			slug: "class-5-steam-indicator",
			name: "Class 5 Steam Indicator",
			category: "sterilization",
			type: "Chemical Indicator",
			description:
				"Advanced chemical indicator that responds to all critical variables in steam sterilization processes.",
			features: ["Steam penetration verification", "Temperature monitoring", "Time duration validation", "Pressure confirmation"],
			specifications: { "Response Time": "< 30 seconds", "Temperature Range": "121-134°C", "Shelf Life": "3 years", Standards: "ISO 11140, AAMI ST79" },
			applications: ["Medical Device Sterilization", "Laboratory Equipment", "Dental Instruments", "Surgical Tools"],
			price: "Contact for pricing",
			image: "/images/sterl/STEAM  INDICATOR(TYPE 5).jpg",
			inStock: true,
			popular: true,
		},
		{
			id: 2,
			slug: "class-6-steam-indicator",
			name: "Class 6 Steam Indicator",
			category: "sterilization",
			type: "Process Challenge Device",
			description:
				"Specific cycle indicators designed for particular sterilization processes with enhanced accuracy.",
			features: ["Cycle-specific validation", "Process optimization", "Quality assurance", "Compliance monitoring"],
			specifications: { "Response Time": "< 15 seconds", "Temperature Range": "121-134°C", "Shelf Life": "3 years", Standards: "ISO 11140, EN 285" },
			applications: ["Hospital Sterilization", "Laboratory Autoclaves", "Medical Device Processing", "Research Facilities"],
			price: "Contact for pricing",
			image: "/images/sterl/STEAM  INDIACTOR(TYPE 6).jpg",
			inStock: true,
			popular: false,
		},
		{
			id: 3,
			slug: "humidity-indicator-cards",
			name: "Humidity Indicator Cards",
			category: "humidity",
			type: "Relative Humidity Monitor",
			description: "Color-changing humidity indicator cards for monitoring relative humidity levels.",
			features: ["Visual humidity indication", "Multiple humidity levels", "Long shelf life", "Easy interpretation"],
			specifications: { "Humidity Range": "10-90% RH", Accuracy: "±5% RH", "Shelf Life": "2 years", Standards: "ISO 11140" },
			applications: ["Pharmaceutical Storage", "Food Packaging", "Electronics Protection", "Document Preservation"],
			price: "Contact for pricing",
			image: "/images/humidity_indicators/humidity_card_1.jpg",
			inStock: true,
			popular: false,
		},
		{
			id: 4,
			slug: "temperature-indicator-strips",
			name: "Temperature Indicator Strips",
			category: "temperature",
			type: "Heat Process Monitor",
			description: "Self-adhesive temperature indicators for heat process monitoring and validation.",
			features: ["Self-adhesive design", "Multiple temperature points", "Tamper-evident", "Clear visual indication"],
			specifications: { "Temperature Range": "60-200°C", Accuracy: "±2°C", "Shelf Life": "2 years", Standards: "ISO 11140" },
			applications: ["Heat Process Validation", "Cold Chain Monitoring", "Equipment Maintenance", "Quality Control"],
			price: "Contact for pricing",
			image: "/images/sterl/Self Adhesive Autoclave Tape for Steam Sterilization.jpg",
			inStock: true,
			popular: true,
		},
		{
			id: 5,
			slug: "moisture-indicator-packets",
			name: "Moisture Indicator Packets",
			category: "moisture",
			type: "Desiccant Indicator",
			description: "Moisture indicator packets for packaging protection and moisture control.",
			features: ["Moisture absorption", "Visual indication", "Packaging protection", "Reusable design"],
			specifications: { "Absorption Capacity": "40-50% RH", Size: "Various sizes available", "Shelf Life": "3 years", Standards: "MIL-D-3464" },
			applications: ["Packaging Protection", "Electronics Storage", "Pharmaceutical Packaging", "Industrial Applications"],
			price: "Contact for pricing",
			image: "/images/sterl/Self Adhesive, for Steam & ETO  Sterilization.jpg",
			inStock: true,
			popular: false,
		},
	];

	const getCategoryProducts = (categoryId) => products.filter((p) => p.category === categoryId);

	return (
		<header className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full">
			<div className="max-w-5xl mx-auto px-1 sm:px-2 lg:px-4">
				<div className="flex items-center py-0.5 sm:py-1 md:py-0.5 lg:py-0.5 relative w-full">
					<Link href="/" className="flex items-center flex-shrink-0">
						<Image src="/indie.image.png" alt="IndieCaters Logo" width={128} height={128} className="h-32 w-32 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain" />
					</Link>

					<nav className="hidden md:flex items-center justify-center flex-1 space-x-1 lg:space-x-1.5">
						<Link href="/" className="text-pink-600 hover:text-pink-700 font-medium text-sm lg:text-base px-1 lg:px-2 py-1 lg:py-1 rounded hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 transition-all duration-200">
							Home
						</Link>
						<Link href="/about" className="text-pink-600 hover:text-pink-700 font-medium text-sm lg:text-base px-1 lg:px-2 py-1 lg:py-1 rounded hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 transition-all duration-200">
							About
						</Link>

						<div className="relative">
							<button onMouseEnter={() => setIsProductsDropdownOpen(true)} className="text-pink-600 hover:text-pink-700 font-medium text-sm lg:text-base flex items-center px-1 lg:px-2 py-1 lg:py-1 rounded hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 transition-all duration-200 group">
								Products
								<svg className="w-4 h-4 ml-1 group-hover:text-pink-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
								</svg>
							</button>

							{isProductsDropdownOpen && (
								<div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-screen max-w-5xl bg-white rounded-xl shadow-xl z-50 border border-pink-100 overflow-hidden backdrop-blur-sm" onMouseLeave={() => setIsProductsDropdownOpen(false)}>
									<div className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 px-4 lg:px-6 py-3 lg:py-4 border-b border-yellow-100">
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
												<svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
												</svg>
											</div>
											<div>
												<h2 className="text-lg lg:text-xl font-bold text-gray-800">Our Product Range</h2>
												<p className="text-pink-700 text-xs">Professional industrial indicators</p>
											</div>
										</div>
									</div>

									<div className="p-4 lg:p-6">
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
											<div className="space-y-2">
												<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 lg:mb-3">Categories</h3>
												{categories.map((category) => (
													<button key={category.id} onMouseEnter={() => setHoveredCategory(category.id)} className={`w-full text-left p-2 lg:p-3 rounded-lg transition-all duration-300 group ${hoveredCategory === category.id ? "bg-gradient-to-r from-pink-100 to-pink-200 text-gray-800 shadow-md" : "text-gray-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 hover:text-gray-800 hover:shadow-sm"}`}>
														<div className="font-medium text-xs lg:text-sm text-gray-800 group-hover:text-pink-700 transition-colors">{category.name}</div>
													</button>
												))}
											</div>

											<div>
												{hoveredCategory ? (
													<div>
														<div className="mb-3 lg:mb-4">
															<div className="flex items-center space-x-2 mb-2">
																<div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-md flex items-center justify-center">
																	<span className="text-white text-[10px] lg:text-xs font-bold">★</span>
																</div>
																<h3 className="text-base lg:text-lg font-bold text-gray-800">{categories.find((c) => c.id === hoveredCategory)?.name}</h3>
															</div>
															<div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 rounded-full text-[10px] lg:text-xs font-medium">
																{getCategoryProducts(hoveredCategory).length} products
															</div>
														</div>
														<div className="space-y-3">
															{getCategoryProducts(hoveredCategory)
																.slice(0, 3)
																.map((product) => (
																	<Link key={product.id} href={`/products/${product.slug}`} className="group bg-gradient-to-br from-gray-50 to-white p-3 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-md border border-gray-200 block" onClick={() => setIsProductsDropdownOpen(false)}>
																		<div className="flex items-start space-x-3">
																			<div className="flex-shrink-0 relative">
																				{product.image.startsWith("/") ? (
																					<Image src={product.image} alt={product.name} width={48} height={48} className="w-12 h-12 object-contain rounded-md bg-white p-2 shadow-sm border border-gray-100" />
																				) : (
																					<div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-md flex items-center justify-center text-lg border border-yellow-200">
																						{product.image}
																					</div>
																				)}
																				{product.popular && (
																					<div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
																						<svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
																							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
																						</svg>
																					</div>
																				)}
																			</div>
																			<div className="flex-1 min-w-0">
																				<h4 className="font-semibold text-gray-800 text-xs group-hover:text-pink-600 transition-colors mb-1">{product.name}</h4>
																				<p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{product.description}</p>
																				<div className="flex items-center mt-1">
																					<div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${product.inStock ? "bg-green-400" : "bg-red-400"}`}></div>
																					<span className="text-xs text-gray-500">{product.inStock ? "In Stock" : "Out of Stock"}</span>
																				</div>
																			</div>
																		</div>
																	</Link>
																))}
														</div>
													</div>
												) : (
													<div className="text-center py-8 lg:py-12">
														<div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
															<svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
															</svg>
														</div>
														<h3 className="text-sm font-semibold text-gray-800 mb-1">Smart Keywords</h3>
														<p className="text-gray-600 text-xs">Discover related terms and applications</p>
													</div>
												)}
											</div>

											<div>
												{hoveredCategory ? (
													<div>
														<div className="bg-gradient-to-br from-pink-50 to-pink-100 p-3 lg:p-4 rounded-lg border border-pink-100 mb-4">
															<h4 className="text-xs lg:text-sm font-bold text-gray-800 mb-2 flex items-center">
																<svg className="w-4 h-4 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
																</svg>
																Keywords
															</h4>
															<div className="grid grid-cols-1 gap-1.5">
																{/* keyword chips omitted for brevity */}
															</div>
														</div>

														<button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300" onClick={() => {
															window.location.href = `/products/${hoveredCategory}`;
															setIsProductsDropdownOpen(false);
														}}>
															Explore All {categories.find((c) => c.id === hoveredCategory)?.name.toLowerCase()}
														</button>
													</div>
												) : (
													<div className="text-center py-8 lg:py-12">
														<div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-3">
															<svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
															</svg>
														</div>
														<h3 className="text-sm font-semibold text-gray-800 mb-1">Explore Our Products</h3>
														<p className="text-gray-600 text-xs">Select a category to view products</p>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						<Link href="/industries" className="text-pink-600 hover:text-pink-700 font-medium text-sm lg:text-base px-1 lg:px-2 py-1 lg:py-1 rounded hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 transition-all duration-200">
							Industries
						</Link>
						<Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium text-sm lg:text-base px-1 lg:px-2 py-1 lg:py-1 rounded hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 transition-all duration-200">
							Contact
						</Link>
					</nav>

					<button aria-label="Toggle menu" className="md:hidden p-1 text-pink-600 hover:text-pink-700 flex-shrink-0 z-10 ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-yellow-100 bg-gradient-to-br from-pink-50 to-pink-100 w-full">
						<nav className="flex flex-col w-full px-3 py-4 space-y-1">
							<Link href="/" className="text-pink-600 hover:text-pink-700 font-medium text-lg px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-200 transition-all duration-200 w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
								Home
							</Link>
							<Link href="/about" className="text-pink-600 hover:text-pink-700 font-medium text-lg px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-200 transition-all duration-200 w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
								About
							</Link>
							<Link href="/catalog" className="text-pink-600 hover:text-pink-700 font-medium text-lg px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-200 transition-all duration-200 w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
								Products
							</Link>
							<Link href="/industries" className="text-pink-600 hover:text-pink-700 font-medium text-lg px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-200 transition-all duration-200 w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
								Industries
							</Link>
							<Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium text-lg px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-100 hover:to-pink-200 transition-all duration-200 w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>
								Contact
							</Link>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
