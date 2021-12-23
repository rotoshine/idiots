import { AspectRatio, Box, Circle, Heading, Image } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { LinksFunction, MetaFunction, LoaderFunction, useLoaderData } from 'remix'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '~/styles/index.css'
import { formatsToUrl } from '~/utils/image'
import { strapiTextToHTML } from '~/utils/text'
import { AnimationHandlerResponse } from 'react-responsive-carousel/lib/ts/components/Carousel/types'
import { request } from 'graphql-request'
import { MainImageDocument, MainCarouselImageDocument } from '~/types/generated-idiots'
import { StrapiImage } from '~/types/types'

export let loader: LoaderFunction = async () => {
  const { mainImage } = await request('https://admin.idiots.band/graphql', MainImageDocument)
  const { mainCarouselImage } = await request('https://admin.idiots.band/graphql', MainCarouselImageDocument)

  return {
    mainImage: mainImage,
    carouselImages: mainCarouselImage?.images,
  }
}

export let links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: carouselStyles,
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

export let meta: MetaFunction = () => {
  const title = '멍청이 펑크락 밴드 이디어츠 홈페이지'
  const description = '👻 멍청이 펑크 밴드 이디어츠! 👻'
  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:url': `https://idiots.band`,
    'og:image': 'https://idiots.band/images/logo-default.jpg',
    'twitter:card': 'summary',
    'twitter:site': 'band_idiots',
    'twitter:creator': 'band_idiots',
  }
}

export default function Index() {
  const { mainImage, carouselImages } = useLoaderData()

  useEffect(() => {
    const scriptSrc = 'https://platform.twitter.com/widgets.js'
    const script = document.createElement('script')
    script.id = 'twitter'
    script.src = scriptSrc
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    document.body.append(script)

    return () => {
      document.querySelector('script#twitter')?.remove()
    }
  }, [])

  return (
    <main>
      <Carousel autoPlay showThumbs={false} showStatus={false} showIndicators={false} showArrows={false}>
        {carouselImages?.map((image: StrapiImage, index: number) => (
          <Box key={`home-image-${index}`}>
            <AspectRatio ratio={4 / 3}>
              <Image
                w="100%"
                src={formatsToUrl(image?.formats, 'https://admin.idiots.band')}
                objectFit="cover"
                objectPosition="center"
              />
            </AspectRatio>
          </Box>
        ))}
      </Carousel>

      <Box marginTop="24px" maxWidth="800" margin="0 auto">
        <Box
          as="a"
          className="twitter-timeline"
          href="https://twitter.com/band_idiots"
          data-width="100%"
          data-chrome="nofooter noborders transparent"
          data-tweet-limit="3"
        >
          <Circle size="24px" /> 이디어츠의 트윗을 불러오고 있습니다.
        </Box>
      </Box>
    </main>
  )
}
