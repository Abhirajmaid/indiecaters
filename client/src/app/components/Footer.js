import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
			<div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
					<div className="lg:col-span-1 text-center sm:text-left">
						<div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
							<div className="relative mr-0 sm:mr-4 mb-3 sm:mb-0">
								<Image src="/indie.image.png" alt="IndieCaters Logo" width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
								<div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
									<svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
								</div>
							</div>
							<div className="text-center sm:text-left">
								<span className="text-xl sm:text-2xl font-bold text-white">IndieCaters</span>
								<p className="text-xs sm:text-sm text-pink-400 font-medium">Since 2008</p>
							</div>
						</div>
						<p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
							India&apos;s leading manufacturer of professional industrial indicators. The only woman-led manufacturer in India specializing in sterilization, moisture, and temperature monitoring solutions.
						</p>
						<div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
							<div className="flex items-start sm:items-center">
								<svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
								</svg>
								<span className="break-words">G-30,31, Ashoka Center, Pune – Satara Road, Pune - 411009</span>
							</div>
							<div className="flex items-center">
								<svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
								</svg>
								+91 98220 39087
							</div>
							<div className="flex items-start sm:items-center">
								<svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 mr-2 mt-1 sm:mt-0 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								<span className="break-all">archana@indiecaterS.com</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4 text-pink-400">Our Products</h3>
						<ul className="space-y-2 text-sm text-gray-300">
							<li>
								<Link href="/products/sterilization" className="hover:text-pink-400 transition-colors flex items-center">
									<span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>
									Sterilization Indicators
								</Link>
							</li>
							<li>
								<Link href="/products/humidity" className="hover:text-pink-400 transition-colors flex items-center">
									<span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>
									Humidity Indicators
								</Link>
							</li>
							<li>
								<Link href="/products/temperature" className="hover:text-pink-400 transition-colors flex items-center">
									<span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>
									Temperature Indicators
								</Link>
							</li>
							<li>
								<Link href="/products/moisture" className="hover:text-pink-400 transition-colors flex items-center">
									<span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>
									Moisture Indicators
								</Link>
							</li>
							<li>
								<Link href="/catalog" className="hover:text-pink-400 transition-colors flex items-center mt-4 pt-2 border-t border-gray-600">
									<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
									</svg>
									View All Products
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4 text-pink-400">Company</h3>
						<ul className="space-y-2 text-sm text-gray-300">
							<li><Link href="/about" className="hover:text-pink-400 transition-colors flex items-center"><span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>About Us</Link></li>
							<li><Link href="/leadership" className="hover:text-pink-400 transition-colors flex items-center"><span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>Leadership</Link></li>
							<li><Link href="/industries" className="hover:text-pink-400 transition-colors flex items-center"><span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>Industries We Serve</Link></li>
							<li><Link href="/quality" className="hover:text-pink-400 transition-colors flex items-center"><span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>Quality & Certifications</Link></li>
							<li><Link href="/contact" className="hover:text-pink-400 transition-colors flex items-center mt-4 pt-2 border-t border-gray-600"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Contact Us</Link></li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4 text-pink-400">Quick Facts</h3>
						<div className="space-y-4">
							<div className="bg-gray-700/50 p-3 rounded-lg">
								<div className="flex items-center mb-2">
									<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
									</div>
									<span className="text-sm font-medium">15+ Years</span>
								</div>
								<p className="text-xs text-gray-400">Industry Experience</p>
							</div>
							<div className="bg-gray-700/50 p-3 rounded-lg">
								<div className="flex items-center mb-2">
									<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
									</div>
									<span className="text-sm font-medium">ISO 9001:2015</span>
								</div>
								<p className="text-xs text-gray-400">Certified Quality</p>
							</div>
							<div className="bg-gray-700/50 p-3 rounded-lg">
								<div className="flex items-center mb-2">
									<div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
									</div>
									<span className="text-sm font-medium">500+ Clients</span>
								</div>
								<p className="text-xs text-gray-400">Trusted Worldwide</p>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 pt-6 sm:pt-8">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
							<div className="relative">
								<Image src="/indie.image.png" alt="IndieCaters Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
								<div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
							</div>
							<div className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">© 2024 IndieCaters Pvt Ltd. All rights reserved.</div>
						</div>
						<div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
							<Link href="/privacy" className="text-gray-300 hover:text-pink-400 transition-colors">Privacy Policy</Link>
							<Link href="/terms" className="text-gray-300 hover:text-pink-400 transition-colors">Terms of Service</Link>
							<Link href="/contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
