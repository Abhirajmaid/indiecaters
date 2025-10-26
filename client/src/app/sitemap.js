export default function sitemap() {
    const baseUrl = 'https://indiecaterS.com';

    const routes = [
        '',
        '/about',
        '/catalog',
        '/contact',
        '/industries',
        '/careers',
        '/case-studies',
        '/investors',
        '/leadership',
        '/news',
        '/partners',
        '/quality',
        '/support',
        '/training',
        '/products/sterilization',
        '/products/humidity',
        '/products/moisture',
        '/products/temperature',
    ];

    const sitemapEntries = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    return sitemapEntries;
}
