import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  lang?: 'id' | 'en';
  structuredData?: Record<string, any> | Record<string, any>[];
};

const DEFAULT_SITE_NAME = 'Pemerintah Kota Madiun';
const DEFAULT_SITE_URL = 'https://domain-kamu.com';
const DEFAULT_IMAGE = 'https://www.madiunkota.go.id/image/Lambang_Kota_Madiun.png';

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  if (!content) return;

  let element = document.querySelector(
    `meta[${attribute}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

function setJsonLd(data?: Record<string, any> | Record<string, any>[]) {
  const oldScript = document.getElementById('seo-jsonld');
  if (oldScript) oldScript.remove();

  if (!data) return;

  const script = document.createElement('script');
  script.id = 'seo-jsonld';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url = DEFAULT_SITE_URL,
  type = 'website',
  lang = 'id',
  structuredData
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(DEFAULT_SITE_NAME) ?
    title :
    `${title} | ${DEFAULT_SITE_NAME}`;

    document.documentElement.lang = lang;
    document.title = fullTitle;

    setMeta('name', 'description', description);
    setMeta('name', 'robots', 'index, follow');
    setMeta('name', 'author', DEFAULT_SITE_NAME);

    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    // Open Graph untuk share WhatsApp, LinkedIn, Facebook
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', DEFAULT_SITE_NAME);
    setMeta('property', 'og:locale', lang === 'en' ? 'en_US' : 'id_ID');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // Local GEO meta untuk lokasi Kota Madiun
    setMeta('name', 'geo.region', 'ID-JI');
    setMeta('name', 'geo.placename', 'Kota Madiun');
    setMeta('name', 'geo.position', '-7.6298;111.5239');
    setMeta('name', 'ICBM', '-7.6298, 111.5239');

    setCanonical(url);
    setJsonLd(structuredData);
  }, [title, description, keywords, image, url, type, lang, structuredData]);

  return null;
}