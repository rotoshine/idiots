import React from 'react'
import Head from 'next/head'

const DEFAULT_TITLE = '멍청이 펑크락 밴드 이디어츠 홈페이지'
const DEFAULT_URL = 'https://idiots.band'
const DEFAULT_DESCRIPTION = `멍청이 펑크락 밴드 이디어츠(Idiots)의 홈페이지입니다. 발매 음원, 공연 일정 등을 볼 수 있습니다.`
const DEFAULT_IMAGE_URL =
  'https://idiots.band/images/default.JPG'
const DEFAULT_IMAGE_WIDTH = 1370
const DEFAULT_IMAGE_HEIGHT = 635

interface Props {
  title?: string
  path?: string
  description?: string
  imageUrl?: string
  imageWidth?: number | null
  imageHeight?: number | null
  children?: React.ReactNode
}

export const Meta = ({
  title = DEFAULT_TITLE,
  path = '',
  description = DEFAULT_DESCRIPTION,
  imageUrl = DEFAULT_IMAGE_URL,
  imageWidth = !imageUrl ? DEFAULT_IMAGE_WIDTH : null,
  imageHeight = !imageUrl ? DEFAULT_IMAGE_HEIGHT : null,
  children,
}: Props) => {
  const url = `${DEFAULT_URL}/${
    path.indexOf('/') === 0 ? path.substr(1) : path
  }`
  const fullImageUrl = /^(https?:\/\/)/.test(imageUrl)
    ? imageUrl
    : `${DEFAULT_URL}${imageUrl}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="canonical" href={url} />
      <meta
        name="google-site-verification"
        content="U3sjUaSWzxwiO1hfB1qC9ghlGOM2fuXxaBKcUZzLj1M"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      {imageWidth && (
        <meta property="og:image:width" content={imageWidth + ''} />
      )}
      {imageHeight && (
        <meta property="og:image:height" content={imageHeight + ''} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@band_idiots" />
      <meta name="twitter:creator" content="@winterwolf0412" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {children}
    </Head>
  )
}
export default Meta
