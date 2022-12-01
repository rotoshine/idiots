import { MetaFunction } from '@remix-run/react/routeModules'
import { generateMeta } from '~/utils/meta'
import PageContent from '~/components/PageContent'
import { Box, Heading, SimpleGrid, Image } from '@chakra-ui/react'

export function headers() {
  return {
    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
  }
}

export const meta: MetaFunction = () => {
  const title = `이디어츠 연락 정보`
  const description = '이디어츠의 SNS와 연락망을 확인해보세요.'

  return generateMeta({
    title,
    description,
    path: '/contact',
  })
}

export default function ContactPage() {
  const links = [
    {
      link: 'https://www.instagram.com/idiots.band/',
      imageUrl: '/images/Instagram_icon.png',
      alt: '인스타그램 링크',
    },
    { link: 'https://twitter.com/band_idiots', imageUrl: '/images/twitter_icon.png', alt: '트위터 링크' },
    {
      link: 'https://ko-kr.facebook.com/bandidiots/',
      imageUrl: '/images/Facebook_logo.png',
      alt: '페이스북 링크',
    },
    { link: 'mailto:yeonrock@idiots.band', imageUrl: '/images/email_icon.png', alt: '메일 링크' },
  ]

  return (
    <PageContent>
      <Box maxW="1080px" margin="0 auto">
        <Heading as="h1" textAlign="center" marginTop="40px">
          이디어츠 연락처
        </Heading>
        <Box>
          <SimpleGrid columns={[1, 2, 3, 4]} display="flex" justifyContent="center" marginTop="40px">
            {links.map(link => (
              <Box
                position="relative"
                transition="all .2s ease-in-out"
                margin="20px"
                _hover={{
                  transform: 'translate(0, -10px)',
                }}
              >
                <a href={link.link} target="_blank" rel="noreferrer">
                  <Image w="100px" h="100px" src={link.imageUrl} alt={link.alt} />
                </a>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </PageContent>
  )
}
