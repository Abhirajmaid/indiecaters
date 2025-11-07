import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-[#ce7c8a]/5 to-[#ce7c8a]/5"></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
					{/* Company Info */}
					<div className="md:col-span-2">
						<div className="flex items-center mb-4">
							<Image src="/indie.image.png" alt="IndieCaters Logo" width={48} height={48} className="w-10 h-10 object-contain mr-3" />
							<div>
								<span className="text-lg font-bold text-white">IndieCaters</span>
								<p className="text-xs font-medium" style={{ color: '#ce7c8a' }}>Since 2008</p>
							</div>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
							India's leading manufacturer of professional industrial indicators. Specializing in sterilization, moisture, and temperature monitoring solutions for healthcare, pharmaceutical, and manufacturing industries.
						</p>
						<div className="flex items-center text-sm text-gray-300">
							<svg className="w-4 h-4 mr-2" fill="currentColor" style={{ color: '#ce7c8a' }} viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
							</svg>
							<span>Pune, Maharashtra, India</span>
						</div>
					</div>

					{/* Products */}
					<div>
						<h3 className="text-sm font-semibold mb-3" style={{ color: '#ce7c8a' }}>Products</h3>
						<ul className="space-y-2 text-sm text-gray-300">
							<li><Link href="/products/sterilization" style={{ transition: 'color 0.2s' }} className="hover:!text-[#ce7c8a]">Sterilization Indicators</Link></li>
							<li><Link href="/products/humidity" className="hover:text-[#ce7c8a] transition-colors">Humidity Indicators</Link></li>
							<li><Link href="/products/temperature" className="hover:text-[#ce7c8a] transition-colors">Temperature Indicators</Link></li>
							<li><Link href="/products/moisture" className="hover:text-[#ce7c8a] transition-colors">Moisture Indicators</Link></li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-sm font-semibold mb-3" style={{ color: '#ce7c8a' }}>Company</h3>
						<ul className="space-y-2 text-sm text-gray-300">
							<li><Link href="/about" className="hover:text-[#ce7c8a] transition-colors">About Us</Link></li>
							<li><Link href="/industries" className="hover:text-[#ce7c8a] transition-colors">Industries</Link></li>
							<li><Link href="/quality" className="hover:text-[#ce7c8a] transition-colors">Quality</Link></li>
							<li><Link href="/contact" className="hover:text-[#ce7c8a] transition-colors">Contact</Link></li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-700 pt-4">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-3">
						<div className="flex items-center gap-3">
							<Image src="/indie.image.png" alt="IndieCaters Logo" width={24} height={24} className="w-6 h-6 object-contain" />
							<div className="text-xs text-gray-300">© 2024 IndieCaters Pvt Ltd. All rights reserved.</div>
						</div>
						<div className="flex items-center gap-4 text-xs text-gray-300">
							<span className="flex items-center">
								<svg className="w-3 h-3 mr-1" fill="currentColor" style={{ color: '#eab9c1' }} viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
								</svg>
								ISO 9001:2015 Certified
							</span>
							<span className="flex items-center">
								<svg className="w-3 h-3 mr-1" fill="currentColor" style={{ color: '#eab9c1' }} viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
								</svg>
								Made in India
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
