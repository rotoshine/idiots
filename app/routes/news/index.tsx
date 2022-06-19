import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import type { LoaderFunction } from '@remix-run/node'
import { useNavigate } from '@remix-run/react'
import { MetaFunction } from '@remix-run/react/routeModules'
import { toSimpleDateFormat } from '~/utils/date'
import { generateMeta } from '~/utils/meta'

export let loader: LoaderFunction = async () => {
  return []
}

export let meta: MetaFunction = () => {
  const title = `이디어츠 소식`
  const description = '이디어츠의 여러가지 소식들을 확인할 수 있어요.'

  return generateMeta({
    title,
    description,
    path: '/news',
  })
}

export default function NewsPage() {
  const navigate = useNavigate()

  return (
    <Box margin="0 auto" maxW="900px">
      <Heading>이디어츠 소식</Heading>
      <Box minW="440px" marginTop="40px">
        <Box>새로 올라온 소식이 없습니다. 조금만 기다려주세요!</Box>
        {/*
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
        </Table>*/}
      </Box>
    </Box>
  )
}
