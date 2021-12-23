const DEFAULT_TITLE = '멍청이 펑크밴드 이디어츠'
const DEFAULT_IMAGE_URL = 'https://idiots.band/images/logo-default.jpg'
const BASE_URL = 'https://idiots.band'

export const generateMeta = ({
  title = DEFAULT_TITLE,
  description = '',
  imageUrl = DEFAULT_IMAGE_URL,
  path,
}: {
  title?: string
  description: string
  imageUrl?: string
  path: string
}) => {
  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:url': `${BASE_URL}${path}`,
    'og:image': imageUrl,
    'twitter:card': 'summary',
    'twitter:site': 'band_idiots',
    'twitter:creator': 'band_idiots',
  }
}
