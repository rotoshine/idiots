import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { MetaFunction, LoaderFunction } from 'remix'
import { useLoaderData, useNavigate } from 'remix'
import { Article } from '~/types'
import { fetchLipimoonApi } from '~/utils/api'
import { toSimpleDateFormat } from '~/utils/date'

export let loader: LoaderFunction = async () => {
  const data = await fetchLipimoonApi('/articles', {
    sort: 'publishDate:DESC',
    populate: 'images',
    'filters[publishDate][$lte]': new Date().toISOString(),
  })

  return data
}

export let meta: MetaFunction = () => {
  const imageUrl = 'https://lipimoon.world/images/logo.png'
  const title = `리피문 소식`
  const description = '리피문의 여러가지 소식들을 확인할 수 있어요.'

  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:image': imageUrl,
    'og:url': 'https://lipimoon.world.com/news',
    'twitter:card': 'summary',
    'twitter:site': '_LIPIMOON_',
    'twitter:creator': '_LIPIMOON_',
  }
}

export default function NewsPage() {
  const articles = useLoaderData<{
    data: Article[]
  }>()
  const navigate = useNavigate()

  return (
    <Box margin="0 auto" maxW="900px">
      <Heading fontFamily="KOTRAHOPE">리피문 소식</Heading>
      <Box minW="440px" marginTop="40px">
        {articles?.data?.length === 0 && <Box>새로 올라온 소식이 없습니다. 조금만 기다려주세요!</Box>}
        <Table>
          <Tbody>
            {articles?.data?.map(article => (
              <Tr
                h="50px"
                key={article.id}
                paddingLeft="24px"
                transition="all .2s ease-in-out"
                _hover={{
                  transform: 'translate(0, -3px)',
                  backgroundColor: 'gray.900',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate(`/news/${article.id}`)
                }}
              >
                <Td w="30%">{toSimpleDateFormat(article.attributes.publishDate)}</Td>
                <Td w="90%">{article.attributes.title}</Td>
                <Td alignSelf="flex-end" justifySelf="flex-end">
                  <Button size="sm">Read More</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
