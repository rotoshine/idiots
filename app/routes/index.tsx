import { AspectRatio, Box, Circle, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '~/styles/index.css'
import { formatsToUrl } from '~/utils/image'
import { request } from 'graphql-request'
import { MainCarouselImageDocument, MainCarouselImageQuery } from '~/types/generated-idiots'
import { LinksFunction, MetaFunction } from '@remix-run/react/routeModules'
import { useLoaderData } from '@remix-run/react'

export function headers() {
  return {
    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
  }
}

export let loader = async () => {
  const result = await request<MainCarouselImageQuery>('https://admin.idiots.band/graphql', MainCarouselImageDocument)

  return result
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
    'og:image': 'https://idiots.band/images/new-logo-square.jpeg',
    'twitter:card': 'summary',
    'twitter:site': 'band_idiots',
    'twitter:creator': 'band_idiots',
  }
}

export default function Index() {
  const { mainCarouselImage } = useLoaderData<MainCarouselImageQuery>()

  return (
    <main>
      <Carousel autoPlay showThumbs={false} showStatus={false} showIndicators={false} showArrows={false}>
        {mainCarouselImage?.data?.attributes?.images?.data.map((image, index: number) => (
          <Box key={`home-image-${index}`}>
            <AspectRatio ratio={16 / 9}>
              <Image
                w="100%"
                src={formatsToUrl(image!.attributes!.formats, 'https://admin.idiots.band')}
                objectFit="cover"
                objectPosition="center"
              />
            </AspectRatio>
          </Box>
        ))}
      </Carousel>
    </main>
  )
}
