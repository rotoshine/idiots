import { Box, Heading } from '@chakra-ui/react'

export let meta: MetaFunction = () => {
  const imageUrl = 'https://lipimoon.world/images/logo.png'
  const title = `리피문 음원 정보`
  const description = '리피문의 음원 정보를 확인해보세요.'

  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:image': imageUrl,
    'og:url': 'https://lipimoon.world.com/discography',
    'twitter:card': 'summary',
    'twitter:site': '_LIPIMOON_',
    'twitter:creator': '_LIPIMOON_',
  }
}

export default function DiscographyPage() {
  return (
    <Box maxw="800px" margin="0 auto" textAlign="center">
      <Heading fontFamily="KOTRAHOPE" marginTop="32px">
        Release Soon...?
      </Heading>
    </Box>
  )
}
