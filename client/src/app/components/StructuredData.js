export default function StructuredData() {
    const baseUrl = 'https://www.indiecaterS.com';

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'IndieCaters Pvt Ltd',
        url: baseUrl,
        logo: `${baseUrl}/indie.image.png`,
        description: "India's premier manufacturer of professional industrial indicators. Specializing in sterilization, moisture, and temperature monitoring solutions.",
        foundingDate: '2009',
        founder: {
            '@type': 'Person',
            name: 'IndieCaters Founder',
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'IN',
            addressLocality: 'India',
        },
        sameAs: [
            // Add social media links here when available
            // 'https://www.linkedin.com/company/indiecaterS',
            // 'https://twitter.com/indiecaterS',
            // 'https://www.facebook.com/indiecaterS',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            url: `${baseUrl}/contact`,
        },
    };

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'IndieCaters',
        url: baseUrl,
        description: 'Professional industrial indicators for sterilization, moisture, and temperature monitoring.',
        potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
