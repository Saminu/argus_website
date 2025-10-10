import { useEffect } from 'react'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description)
    }

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage && image) {
      ogImage.setAttribute('content', image)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && url) {
      ogUrl.setAttribute('content', url)
    }

    const ogType = document.querySelector('meta[property="og:type"]')
    if (ogType && type) {
      ogType.setAttribute('content', type)
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title)
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description)
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]')
    if (twitterImage && image) {
      twitterImage.setAttribute('content', image)
    }

    const twitterUrl = document.querySelector('meta[property="twitter:url"]')
    if (twitterUrl && url) {
      twitterUrl.setAttribute('content', url)
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical && url) {
      canonical.setAttribute('href', url)
    }
  }, [title, description, keywords, image, url, type])

  return null
}

export default SEO
