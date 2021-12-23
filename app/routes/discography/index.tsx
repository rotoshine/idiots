import { Box, Heading } from '@chakra-ui/react'
import { generateMeta } from '~/utils/meta'

export let meta: MetaFunction = () => {
  const title = `이디어츠 음원 정보`
  const description = '이디어츠의 음원 정보를 확인해보세요.'

  return generateMeta({
    title,
    description,
    path: '/discography',
  })
}

export default function DiscographyPage() {
  return (
    <Box maxw="800px" margin="0 auto" textAlign="center">
      <Heading marginTop="32px">Release Soon...?</Heading>
    </Box>
  )
}
