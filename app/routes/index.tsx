import { AspectRatio, Box, Circle, Image } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '~/styles/index.css'
import { formatsToUrl } from '~/utils/image'
import { request } from 'graphql-request'
import { MainImageDocument, MainCarouselImageDocument } from '~/types/generated-idiots'
import { StrapiImage } from '~/types/types'
import { LinksFunction, MetaFunction } from '@remix-run/react/routeModules'
import { useLoaderData } from '@remix-run/react'

export let loader = async () => {
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
    'og:image': 'https://idiots.band/images/new-logo-square.jpeg',
    'twitter:card': 'summary',
    'twitter:site': 'band_idiots',
    'twitter:creator': 'band_idiots',
  }
}

export default function Index() {
  const { mainImage, carouselImages } = useLoaderData()

  console.log(mainImage)
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
            <AspectRatio ratio={16 / 9}>
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
          data-theme="dark"
        >
          <Circle size="24px" /> 이디어츠의 트윗을 불러오고 있습니다.
        </Box>
      </Box>
    </main>
  )
}
