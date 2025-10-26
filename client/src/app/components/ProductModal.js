"use client";

import Image from "next/image";

export default function ProductModal({ product, isOpen, onClose }) {
	if (!isOpen || !product) return null;

	return (
		<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-pink-100">
				<div className="relative bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 px-6 lg:px-8 py-4 lg:py-6 rounded-t-3xl border-b border-yellow-200 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-pink-500/5"></div>
					<div className="relative flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<div className="relative">
								<div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
									{product.image.startsWith("/") ? (
										<Image src={product.image} alt={product.name} width={40} height={40} className="w-10 h-10 object-contain" />
									) : (
										<span className="text-white text-2xl">{product.image}</span>
									)}
								</div>
								{product.popular && (
									<div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
										<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									</div>
								)}
							</div>
							<div>
								<h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-1">{product.name}</h2>
								<p className="text-pink-700 text-sm font-medium">{product.type}</p>
								<div className="flex items-center mt-2">
									<div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
									<span className={`text-sm font-medium ${product.inStock ? "text-green-700" : "text-red-700"}`}>{product.inStock ? "In Stock" : "Out of Stock"}</span>
								</div>
							</div>
						</div>
						<button onClick={onClose} aria-label="Close" className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl border border-pink-200">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>

				<div className="p-6 lg:p-8">
					<div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
						<div className="lg:col-span-1">
							<div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 lg:p-8 flex items-center justify-center rounded-2xl border border-pink-200 shadow-sm">
								{product.image.startsWith("/") ? (
									<Image src={product.image} alt={product.name} width={512} height={256} className="max-h-64 max-w-full object-contain rounded-lg" />
								) : (
									<div className="text-8xl">{product.image}</div>
								)}
							</div>

							<div className="mt-6 space-y-4">
								<div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 shadow-sm">
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
												</svg>
											</div>
											<span className="text-sm font-semibold text-green-800">Availability</span>
										</div>
										<div className="flex items-center">
											<div className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? "bg-green-500" : "bg-red-500"}`}></div>
											<span className={`text-sm font-bold ${product.inStock ? "text-green-700" : "text-red-700"}`}>{product.inStock ? "In Stock" : "Out of Stock"}</span>
										</div>
									</div>
								</div>

								<div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-pink-200 shadow-sm">
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
											</div>
											<span className="text-sm font-semibold text-pink-800">Category</span>
										</div>
										<span className="text-sm font-bold text-pink-700 capitalize">{product.category}</span>
									</div>
								</div>

								<div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200 shadow-sm">
									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
												<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
											</div>
											<span className="text-sm font-semibold text-blue-800">Pricing</span>
										</div>
										<span className="text-sm font-bold text-blue-700">{product.price}</span>
									</div>
								</div>
							</div>
						</div>

						<div className="lg:col-span-2 space-y-6">
							<div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-pink-200 rounded-2xl p-6 shadow-sm">
								<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
									<div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
									</div>
									Product Description
								</h3>
								<p className="text-gray-700 leading-relaxed text-base lg:text-lg">{product.description}</p>
							</div>

							<div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-sm">
								<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
									<div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
									</div>
									Key Features
								</h3>
								<div className="grid md:grid-cols-2 gap-3">
									{product.features.map((feature, index) => (
										<div key={index} className="flex items-start bg-white/70 p-3 rounded-lg border border-green-100">
											<div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
												<svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
											</div>
											<span className="text-gray-700 font-medium">{feature}</span>
										</div>
									))}
								</div>
							</div>

							<div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6 shadow-sm">
								<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
									<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
									</div>
									Technical Specifications
								</h3>
								<div className="bg-white/70 rounded-xl p-4 border border-purple-100">
									<dl className="grid md:grid-cols-2 gap-3">
										{Object.entries(product.specifications).map(([key, value]) => (
											<div key={key} className="flex justify-between items-center py-2 px-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
												<dt className="text-sm font-semibold text-gray-800">{key}:</dt>
												<dd className="text-sm text-purple-700 font-bold">{value}</dd>
											</div>
										))}
									</dl>
								</div>
							</div>

							<div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
								<h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
									<div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
										<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
									</div>
									Typical Applications
								</h3>
								<div className="flex flex-wrap gap-2">
									{(product.applications && product.applications.length > 0
										? product.applications
										: ["Medical Devices", "Laboratory Equipment", "Pharmaceutical", "Food Industry"]).map((app, index) => (
										<span key={index} className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold border border-pink-200 shadow-sm">
											{app}
										</span>
									))}
								</div>
							</div>

							<div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-pink-200 rounded-2xl p-6 shadow-sm">
								<div className="flex items-start">
									<div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
									</div>
									<div>
										<h4 className="text-pink-800 font-bold text-lg mb-2">Quality Assurance</h4>
										<p className="text-pink-700 text-base leading-relaxed">All our indicators are manufactured according to international standards and undergo rigorous quality control testing to ensure reliability and accuracy.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-center px-6 lg:px-8 py-4 lg:py-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-b-3xl border-t border-yellow-200">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
								<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
							</div>
							<span className="text-sm text-gray-700 font-semibold">Secure & Trusted</span>
						</div>
						<div className="flex flex-col sm:flex-row gap-3">
							<button onClick={onClose} className="px-6 lg:px-8 py-2.5 lg:py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-white hover:border-gray-400 transition-all duration-200 shadow-sm">Close</button>
							<button onClick={() => { window.location.href = "/contact"; }} className="px-6 lg:px-8 py-2.5 lg:py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-lg">Get Quote</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
