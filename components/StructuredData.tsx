export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Insignia Group",
    "description": "Vertically integrated real estate development company with three generations of excellence delivering landmark buildings across New York City.",
    "url": "https://insignia-group.vercel.app",
    "logo": "https://insignia-group.vercel.app/og-image.jpg",
    "foundingDate": "2005",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "50"
    },
    "knowsAbout": [
      "Real Estate Development",
      "Construction Management",
      "Property Management",
      "Architectural Design",
      "Vertical Integration",
      "Mixed-Use Development",
      "Residential Development",
      "Commercial Real Estate",
      "Hotel Development",
      "Healthcare Facilities"
    ],
    "slogan": "Vertically integrated. Completely controlled. Lasting impact."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Insignia Group",
    "image": "https://insignia-group.vercel.app/og-image.jpg",
    "description": "Three generations of vertically integrated real estate excellence delivering 43 landmark buildings throughout New York City.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "url": "https://insignia-group.vercel.app",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "43"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://insignia-group.vercel.app"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
