"use client";

import React from "react";

export default function IndustryModal({ industry, isOpen, onClose }) {
	if (!isOpen || !industry) return null;

	return (
		<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
				<div className="flex items-center justify-between p-6 border-b border-gray-200">
					<h2 className="text-2xl font-bold text-gray-800">{industry.name}: Why Indicators Matter</h2>
					<button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div className="p-6">
					<p className="text-gray-700 mb-6 leading-relaxed">{industry.detailedDescription}</p>

					{/* Key Points Section */}
					{industry.keyPoints && (
						<div className="bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200 rounded-lg p-4 mb-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Key Technical Points</h3>
							<div className="space-y-3">
								{industry.keyPoints.map((point, index) => (
									<div key={index} className="bg-white p-3 rounded-lg border border-pink-100">
										<p className="text-gray-700 font-medium">{point}</p>
									</div>
								))}
							</div>
						</div>
					)}

					<div className="grid sm:grid-cols-2 gap-6 mb-6">
						<div>
							<h4 className="font-semibold text-gray-800 mb-3">Applications</h4>
							<ul className="space-y-2 text-gray-700">
								{industry.applications.map((item, idx) => (
									<li key={idx} className="flex items-start">
										<span className="mt-1 mr-2 w-2 h-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></span>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-gray-800 mb-3">Benefits</h4>
							<ul className="space-y-2 text-gray-700">
								{industry.benefits.map((item, idx) => (
									<li key={idx} className="flex items-start">
										<span className="mt-1 mr-2 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="bg-gray-50 rounded-lg p-4">
						<h4 className="font-semibold text-gray-800 mb-3">Key Products</h4>
						<div className="flex flex-wrap gap-2">
							{industry.products.map((p, idx) => (
								<span key={idx} className="px-3 py-1 rounded-full bg-white text-gray-800 text-sm border border-gray-200 shadow-sm">
									{p}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}






