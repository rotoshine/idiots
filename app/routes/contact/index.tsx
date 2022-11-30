import { MetaFunction } from '@remix-run/react/routeModules'
import { generateMeta } from '~/utils/meta'
import PageContent from '~/components/PageContent'
import { Box, Heading, Link, SimpleGrid, Image } from '@chakra-ui/react'

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
  return (
    <PageContent>
      <Box maxW="1080px" margin="0 auto">
        <Heading as="h1" textAlign="center" marginTop="40px">
          이디어츠 연락처
        </Heading>
        <Box>
          <SimpleGrid columns={[1, 2, 3, 4]} display="flex" justifyContent="center" marginTop="40px">
            <Box
              position="relative"
              transition="all .2s ease-in-out"
              marginRight="40px"
              _hover={{
                transform: 'translate(0, -10px)',
              }}
            >
              <a href="https://www.instagram.com/idiots.band/" target="_blank" rel="noreferrer">
                <Image w="100px" h="100px" src="/images/Instagram_icon.png" alt="인스타그램 링크" />
              </a>
            </Box>
            <Box
              position="relative"
              transition="all .2s ease-in-out"
              marginRight="40px"
              _hover={{
                transform: 'translate(0, -10px)',
              }}
            >
              <a href="https://twitter.com/band_idiots" target="_blank" rel="noreferrer">
                <Image w="100px" h="100px" src="/images/twitter_icon.png" alt="트위터 링크" />
              </a>
            </Box>
            <Box
              position="relative"
              transition="all .2s ease-in-out"
              marginRight="40px"
              _hover={{
                transform: 'translate(0, -10px)',
              }}
            >
              <a href="https://ko-kr.facebook.com/bandidiots/" target="_blank" rel="noreferrer">
                <Image w="100px" h="100px" src="/images/Facebook_logo.png" alt="페이스북 링크" />
              </a>
            </Box>
            <Box
              position="relative"
              transition="all .2s ease-in-out"
              _hover={{
                transform: 'translate(0, -10px)',
              }}
            >
              <a href="mailto:yeonrock@idiots.band" target="_blank" rel="noreferrer">
                <Image w="120px" h="120px" src="/images/gmail_logo.png" alt="Gmail 링크" />
              </a>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </PageContent>
  )
}
