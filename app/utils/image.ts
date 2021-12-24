import { trimStart } from 'lodash'

const NEXT_PUBLIC_IMAGE_PATH = 'https://indistreet-api.roto.codes'

export const getMediaPath = (src: string, imageServer: string) => `${imageServer}/${trimStart(src, '/')}`

export const findImage = (formats: any) => {
  if (!formats) {
    return null
  }

  if (formats.large) {
    return formats.large
  }

  if (formats.medium) {
    return formats.medium
  }

  if (formats.small) {
    return formats.small
  }

  if (formats.thumbnail) {
    return formats.thumbnail
  }
}

export const formatsToUrl = (formats?: any, imageServer = NEXT_PUBLIC_IMAGE_PATH) => {
  const image = findImage(formats)

  if (image) {
    return getMediaPath(image.url, imageServer)
  }

  return '/images/animal_music_band.png'
}

export const formatsToLipimoonImageUrl = (formats: any) => formatsToUrl(formats, 'https://admin.lipimoon.world')
