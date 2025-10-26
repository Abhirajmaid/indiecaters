export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiecaterS.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
