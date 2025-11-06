export default function sitemap() {
    return [
        {
            url: 'https://davidlopezdev.com.ar',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://davidlopezdev.com.ar/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://davidlopezdev.com.ar/proyectos',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://davidlopezdev.com.ar/contacto',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
            {
            url: 'https://davidlopezdev.com.ar/servicios',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}