import { Helmet } from 'react-helmet-async';
import { SEOProps } from '@/types';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  children 
}: SEOComponentProps) {
  const siteTitle = "FPattern - Luxury Fashion Brand";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = url || window.location.href;
  const ogImage = image || "/src/assets/favicon.ico";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          "name": "FPattern",
          "description": description,
          "url": siteUrl,
          "logo": ogImage,
          "sameAs": [
            "https://www.instagram.com/fpattern",
            "https://www.facebook.com/fpattern",
            "https://www.twitter.com/fpattern"
          ]
        })}
      </script>
      
      {children}
    </Helmet>
  );
}