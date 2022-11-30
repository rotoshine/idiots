import { Box, AspectRatio, Image } from '@chakra-ui/react'
import { StrapiImage } from '~/types/types'
import { formatsToUrl } from '~/utils/image'

interface Props {
  imageRatio?: number
  image: StrapiImage
  alt: string
}

export default function ContactImage({ imageRatio = 1, image, alt }: Props) {
  return (
    <Box position="relative">
      <AspectRatio ratio={imageRatio} w="100%" objectFit="contain" bgColor="blackAlpha.700">
        <Image src={formatsToUrl(image?.formats)} objectFit="contain" objectPosition="50% 50%" alt={alt} />
      </AspectRatio>
    </Box>
  )
}
