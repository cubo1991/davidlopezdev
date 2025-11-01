// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*", // todos los bots
        allow: "/",     // permite rastrear todo
      },
    ],
    sitemap: "https://davidlopezdev.com.ar/sitemap.xml", // 👈 tu sitemap real
  };
}
