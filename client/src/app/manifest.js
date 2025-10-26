export default function manifest() {
    return {
        name: 'IndieCaters - Industrial Indicators Manufacturer',
        short_name: 'IndieCaters',
        description: 'India\'s premier manufacturer of professional industrial indicators for sterilization, moisture, and temperature monitoring',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#EC4899',
        icons: [
            {
                src: '/indie.image.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/indie.image.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        categories: ['business', 'industrial'],
        lang: 'en',
        orientation: 'portrait-primary',
        scope: '/',
    };
}
