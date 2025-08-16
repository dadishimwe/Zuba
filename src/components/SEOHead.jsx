import { useEffect } from 'react'
import { COMPANY_INFO } from '@/constants/company.js'

const SEOHead = ({
  title = '',
  description = COMPANY_INFO.description,
  keywords = 'Starlink, Peplink, satellite internet, SD-WAN, maritime connectivity, aviation internet, remote site connectivity, network solutions',
  canonical = '',
  image = '',
  type = 'website',
  noindex = false,
  structuredData = null,
  publishDate = null,
  modifiedDate = null,
  author = null
}) => {
  const siteTitle = title ? `${title} | ${COMPANY_INFO.name}` : `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`
  const siteUrl = 'https://zubabroadband.com' // Replace with actual domain
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/og-image.jpg`

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "description": COMPANY_INFO.description,
    "url": siteUrl,
    "telephone": COMPANY_INFO.contact.phone,
    "email": COMPANY_INFO.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.contact.address.street,
      "addressLocality": COMPANY_INFO.contact.address.city,
      "addressRegion": COMPANY_INFO.contact.address.state,
      "postalCode": COMPANY_INFO.contact.address.zip,
      "addressCountry": COMPANY_INFO.contact.address.country
    },
    "areaServed": COMPANY_INFO.serviceAreas,
    "serviceType": [
      "Satellite Internet Services",
      "SD-WAN Solutions",
      "Network Infrastructure",
      "Telecommunications"
    ],
    "founder": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    },
    "foundingDate": "2016",
    "sameAs": [
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.twitter,
      COMPANY_INFO.social.facebook,
      COMPANY_INFO.social.youtube
    ],
    "hasCredential": [
      "Authorized Starlink Reseller",
      "Certified Peplink Partner",
      "FCC Licensed Installation Teams"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData

  useEffect(() => {
    // Update document title
    document.title = siteTitle

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', author || COMPANY_INFO.name)
    updateMetaTag('robots', noindex ? 'noindex,nofollow' : 'index,follow')
    updateMetaTag('viewport', 'width=device-width, initial-scale=1')
    
    // Additional SEO meta tags
    updateMetaTag('theme-color', '#ffffff')
    updateMetaTag('msapplication-TileColor', '#ffffff')
    updateMetaTag('apple-mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default')
    
    // Date meta tags for content freshness
    if (publishDate) {
      updateMetaTag('article:published_time', publishDate, true)
    }
    if (modifiedDate) {
      updateMetaTag('article:modified_time', modifiedDate, true)
      updateMetaTag('og:updated_time', modifiedDate, true)
    }

    // Open Graph
    updateMetaTag('og:title', siteTitle, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', fullCanonical, true)
    updateMetaTag('og:image', fullImage, true)
    updateMetaTag('og:site_name', COMPANY_INFO.name, true)

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', siteTitle)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', fullImage)

    // Add structured data
    let structuredScript = document.querySelector('#structured-data')
    if (!structuredScript) {
      structuredScript = document.createElement('script')
      structuredScript.type = 'application/ld+json'
      structuredScript.id = 'structured-data'
      document.head.appendChild(structuredScript)
    }
    structuredScript.textContent = JSON.stringify(finalStructuredData)

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = fullCanonical

  }, [siteTitle, description, keywords, fullCanonical, fullImage, type, finalStructuredData, noindex, publishDate, modifiedDate, author])

  return null // This component doesn't render anything
}

export default SEOHead