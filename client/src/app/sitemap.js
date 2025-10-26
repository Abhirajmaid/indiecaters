export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiecaterS.com';

    // Static pages
    const routes = [
        '',
        '/about',
        '/careers',
        '/case-studies',
        '/catalog',
        '/contact',
        '/industries',
        '/industries/healthcare',
        '/investors',
        '/leadership',
        '/news',
        '/partners',
        '/products',
        '/products/temperature',
        '/products/moisture',
        '/products/humidity',
        '/products/sterilization',
        '/quality',
        '/support',
        '/training',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
