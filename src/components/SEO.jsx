import React from 'react'
import { Helmet } from 'react-helmet-async'

function normalizeImagePath(imagePath) {
  if (!imagePath) return undefined
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
}

const SEO = ({
  title = "Rithvik Katakam's Portfolio",
  description = 'Personal portfolio site.',
  image = '/Portfolio-picture.jpeg',
  url,
  type = 'website',
  twitterHandle,
}) => {
  const siteName = 'Rithvik Katakam'
  const imageUrl = normalizeImagePath(image)

  return (
    <Helmet prioritizeSeoTags>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" content={description} />
      )}

      {/* Open Graph */}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />} 
      {description && (
        <meta property="og:description" content={description} />
      )}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && (
        <meta name="twitter:site" content={twitterHandle} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  )
}

export default SEO
