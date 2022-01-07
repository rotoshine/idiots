import { AspectRatio, Avatar, Box, Button, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { Carousel } from 'react-responsive-carousel'
import { LoaderFunction, MetaFunction, LinksFunction, Link } from 'remix'
import { useLoaderData } from 'remix'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { toDateFormat } from '~/utils/date'
import { formatsToUrl } from '~/utils/image'
import ScrollDescription from '~/components/ScrollDescription'
import { strapiTextToHTML } from '~/utils/text'
import { requestToIndistreet } from '~/utils/api'
import { FindOneLiveDocument, FindOneLiveQuery } from '~/types/generated-indistreet'
import { generateMeta } from '~/utils/meta'
import PageContent from '~/components/PageContent'

export let loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  const data = await requestToIndistreet(FindOneLiveDocument, {
    id,
  })

  return data
}

export let meta: MetaFunction = ({ data: { live } }) => {
  const imageUrl = formatsToUrl(live?.posters[0]?.formats)
  const title = `이디어츠 - ${live?.title}`
  const description = !isEmpty(live?.description) ? `${live?.description?.slice(0, 100)}...` : '리피문 공연 정보'

  return generateMeta({
    title,
    description,
    imageUrl,
    path: `/live/${live?.id}`,
  })
}

export let links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: carouselStyles,
    },
  ]
}
export default function LiveDetailPage() {
  const { live } = useLoaderData<FindOneLiveQuery>()

  if (!live) {
    return null
  }

  return (
    <PageContent>
      <Box margin="0 auto" maxW="1366px" display="flex" flexDirection="column">
        <Box display="flex" flexDirection={['column', null, null, 'row']}>
          <Box flex="1" marginRight={[0, 0, 0, '24px']}>
            <Carousel showThumbs={false}>
              {live.posters?.map((poster, i) => (
                <Box key={`poster-${i}`} bgColor="gray.400">
                  <AspectRatio ratio={3 / 4} bgColor="gray.400">
                    <Image
                      key={`image-${i}`}
                      src={formatsToUrl(poster?.formats)}
                      alt={`${live.title} 공연의 ${i + 1} 번째 포스터`}
                      // @ts-ignore
                      objectFit="contain !important"
                      objectPosition="center"
                    />
                  </AspectRatio>
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box
            bgColor="blackAlpha.50"
            padding="24px"
            flex="1"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Box>
              <Box marginBottom="24px">
                <Box color="black">공연명</Box>
                <Box backgroundColor="blackAlpha.100" padding="8px">
                  {live.title}
                </Box>
              </Box>
              <Box marginBottom="24px">
                <Box color="black">공연장소</Box>
                <Box backgroundColor="blackAlpha.100" padding="8px">
                  {live.stage?.name ?? '장소 미정'}
                </Box>
              </Box>
              {live.stage && live.stage.address && (
                <Box marginBottom="24px">
                  <Box color="black">공연장 주소</Box>
                  <Box backgroundColor="blackAlpha.100" padding="8px">
                    {live.stage.address}
                  </Box>
                </Box>
              )}
              <Box marginBottom="24px">
                <Box color="black">공연시간</Box>
                <Box backgroundColor="blackAlpha.100" padding="8px">
                  {toDateFormat(live.startDate)} ~ {toDateFormat(live.endDate)}
                </Box>
              </Box>
              <Box marginBottom="24px">
                <Box color="black">라인업</Box>
                <Box backgroundColor="blackAlpha.100" padding="8px">
                  <SimpleGrid columns={[1, 2, 3, 4]} scaping={10} spacingY={10} marginTop="10px">
                    {live.musicians
                      ?.filter(musician => musician?.name !== '이디어츠')
                      .map((musician, i) => (
                        <a
                          key={`lineup-${i}`}
                          href={`https://indistreet.com/musicians/${musician?.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Flex alignItems="center">
                            <Avatar
                              name={musician?.name}
                              src={formatsToUrl(musician?.profileImage?.formats) ?? '/images/animal_music_band.png'}
                              marginRight="10px"
                            />
                            <Box>{musician?.name}</Box>
                          </Flex>
                        </a>
                      ))}
                  </SimpleGrid>
                </Box>
              </Box>
              <Box marginBottom="24px">
                <Box color="black">공연 설명</Box>
                <ScrollDescription backgroundColor="blackAlpha.100">
                  <Box
                    padding="24px"
                    wordBreak="keep-all"
                    dangerouslySetInnerHTML={{ __html: strapiTextToHTML(live.description ?? '') }}
                  />
                </ScrollDescription>
              </Box>
            </Box>
            {live.purchaseTicketLink && (
              <Box>
                <a href={live.purchaseTicketLink} target="_blank" rel="noopener noreferrer">
                  <Button w="100%" colorScheme="blue" color="white">
                    티켓 구입하기
                  </Button>
                </a>
              </Box>
            )}
          </Box>
        </Box>
        <Box alignSelf="flex-end" marginTop="16px">
          <Link to="/live" title="Back to the list">
            <Button>Back to the list</Button>
          </Link>
        </Box>
      </Box>
    </PageContent>
  )
}
