// app/robots.js
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*", // todos los bots
        allow: "/",     // permite rastrear todo
      },
    ],
    sitemap: "https://davidlopezdev.com.ar/sitemap.xml", 
  };
}
