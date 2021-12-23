import { Box, AspectRatio, Image } from '@chakra-ui/react'
import { StrapiImage } from '~/types/types'
import { formatsToUrl } from '~/utils/image'

interface Props {
  imageRatio?: number
  image: StrapiImage
  isSoldOut: boolean
  alt: string
}

export default function GoodsImage({ imageRatio = 1, image, isSoldOut = false, alt }: Props) {
  return (
    <Box position="relative">
      <AspectRatio ratio={imageRatio} w="100%" objectFit="contain" bgColor="blackAlpha.700">
        <Image src={formatsToUrl(image?.formats)} objectFit="contain" objectPosition="50% 50%" alt={alt} />
      </AspectRatio>
      {isSoldOut && (
        <Box
          position="absolute"
          display="flex"
          top="0"
          left="0"
          zIndex="10"
          w="100%"
          h="100%"
          bgColor="blackAlpha.700"
          justifyContent="center"
          alignItems="center"
        >
          <Box bgColor="gray.900" padding="16px" borderRadius="16px">
            Soldout!
          </Box>
        </Box>
      )}
    </Box>
  )
}
