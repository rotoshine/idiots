import { Box, Heading, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useLoaderData, useNavigate } from 'remix'
import type { LoaderFunction, MetaFunction } from 'remix'
import { toSimpleDateFormat } from '~/utils/date'
import { requestToIndistreet } from '~/utils/api'
import { LiveListDocument, LiveListQuery } from '~/types/generated-indistreet'
import { generateMeta } from '~/utils/meta'
import PageContent from '~/components/PageContent'

export let loader: LoaderFunction = async () => {
  const data = await requestToIndistreet(LiveListDocument, {
    where: {
      'musicians.id': 1,
      isRemoved: false,
    },
    sort: 'startDate:DESC',
    limit: 100,
  })

  return data
}

export let meta: MetaFunction = () => {
  return generateMeta({
    title: '이디어츠 공연 일정',
    description: '이디어츠의 공연 일정입니다.',
    path: '/live',
  })
}

export default function LivePage() {
  const { lives } = useLoaderData<LiveListQuery>()

  const navigate = useNavigate()

  return (
    <PageContent>
      <Heading as="h1" textAlign="center">
        Live schedule
      </Heading>
      <Box marginTop="40px">
        <Table wordBreak="keep-all">
          <Thead>
            <Tr>
              <Th>공연일</Th>
              <Th>공연명</Th>
              <Th>장소</Th>
            </Tr>
          </Thead>
          <Tbody>
            {lives?.map(live => (
              <Tr
                key={live?.id}
                transition="all .2s ease-in-out"
                _hover={{
                  transform: 'translate(0, -3px)',
                  backgroundColor: 'whiteAlpha.900',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate(`/live/${live?.id}`)
                }}
              >
                <Td>{toSimpleDateFormat(live?.startDate)}</Td>
                <Td>{live?.title}</Td>
                <Td>{live?.stage?.name ?? '장소미정'}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </PageContent>
  )
}
