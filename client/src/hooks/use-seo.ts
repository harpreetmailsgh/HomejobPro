import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export function useSEO(seoProps: SEOProps) {
  useEffect(() => {
    // Update title
    if (seoProps.title) {
      document.title = seoProps.title;
    }

    // Update meta description
    if (seoProps.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', seoProps.description);
    }

    // Update meta keywords
    if (seoProps.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seoProps.keywords);
    }

    // Update canonical URL
    if (seoProps.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', seoProps.canonical);
    }

    // Update Open Graph tags
    if (seoProps.title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', seoProps.title);
      }
    }

    if (seoProps.description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', seoProps.description);
      }
    }

    if (seoProps.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', seoProps.ogImage);
      }
    }

    // Add structured data
    if (seoProps.structuredData) {
      const existingScript = document.querySelector('script[data-type="structured-data"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'structured-data');
      script.textContent = JSON.stringify(seoProps.structuredData);
      document.head.appendChild(script);
    }
  }, [seoProps]);
}