import { useEffect } from 'react';

interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export const OrganizationSchema = ({
  name,
  description,
  url,
  logo,
  address,
  contactPoint,
  sameAs = [],
}: OrganizationSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name,
      description,
      url,
      ...(logo && { logo }),
      ...(address && { address: { "@type": "PostalAddress", ...address } }),
      ...(contactPoint && { contactPoint: { "@type": "ContactPoint", ...contactPoint } }),
      ...(sameAs.length > 0 && { sameAs }),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, url, logo, address, contactPoint, sameAs]);

  return null;
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
  offers?: {
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
  }[];
}

export const ServiceSchema = ({
  name,
  description,
  provider,
  areaServed,
  serviceType,
  offers = [],
}: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      provider: {
        "@type": "Organization",
        name: provider,
      },
      areaServed,
      serviceType,
      ...(offers.length > 0 && {
        offers: offers.map(offer => ({
          "@type": "Offer",
          ...offer,
        })),
      }),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, description, provider, areaServed, serviceType, offers]);

  return null;
};

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  authorName: string;
  publisherName?: string;
}

/** BlogPosting JSON-LD for blog post pages - enables Article rich results. */
export const ArticleSchema = ({
  headline,
  description,
  url,
  image,
  datePublished,
  authorName,
  publisherName = 'Haydeen Technologies',
}: ArticleSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline,
      description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      ...(image && { image }),
      datePublished,
      author: { "@type": "Person", name: authorName },
      publisher: {
        "@type": "Organization",
        name: publisherName,
        logo: { "@type": "ImageObject", url: "https://haydeentechnologies.com/og-image.jpg" },
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [headline, description, url, image, datePublished, authorName, publisherName]);

  return null;
};

interface BreadcrumbSchemaProps {
  /** Ordered trail, e.g. [{name:'Home',url:'https://…/'},{name:'Blog',url:'https://…/blog'},{name:postTitle,url:postUrl}] */
  items: Array<{ name: string; url: string }>;
}

/** BreadcrumbList JSON-LD - shows the page's position in search snippets. */
export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  return null;
};

interface WebsiteSchemaProps {
  name: string;
  url: string;
  description: string;
  publisher: string;
  inLanguage?: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}

export const WebsiteSchema = ({
  name,
  url,
  description,
  publisher,
  inLanguage = 'en',
  potentialAction,
}: WebsiteSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name,
      url,
      description,
      publisher: {
        "@type": "Organization",
        name: publisher,
      },
      inLanguage,
      ...(potentialAction && {
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: potentialAction.target,
          },
          "query-input": `required name=${potentialAction.queryInput}`,
        },
      }),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [name, url, description, publisher, inLanguage, potentialAction]);

  return null;
};