import { AspectRatio, Box, Button, Image, List, ListItem, HStack, HStack } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { Carousel } from 'react-responsive-carousel'
import { Link, LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { FindOneAlbumDocument, FindOneAlbumQuery } from '~/types/generated-indistreet'
import { requestToIndistreet } from '~/utils/api'
import { formatsToUrl } from '~/utils/image'
import { generateMeta } from '~/utils/meta'
import ScrollDescription from '~/components/ScrollDescription'
import { toDateFormat } from '~/utils/date'
import { strapiTextToHTML } from '~/utils/text'
import PageContent from '~/components/PageContent'
import { SiApplemusic, SiSpotify, SiYoutubemusic } from 'react-icons/si'

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params
  const data = await requestToIndistreet(FindOneAlbumDocument, {
    id,
  })

  return data
}

export let meta: MetaFunction = ({ data: { album } }) => {
  const imageUrl = formatsToUrl(album?.images[0]?.formats)
  const title = `이디어츠 - ${album?.name}`
  const description = !isEmpty(album?.description)
    ? `${album?.description?.slice(0, 100)}...`
    : `${album?.name} 앨범 정보`

  return generateMeta({
    title,
    description,
    imageUrl,
    path: `/albums/${album?.id}`,
  })
}
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: carouselStyles,
    },
  ]
}

const StreamingLink = ({ link, children }: { link?: string | null; children: React.ReactNode }) =>
  link ? (
    <List>
      (
      <ListItem>
        <a href={link} target="_blank">
          {children}
        </a>
      </ListItem>
      )
    </List>
  ) : null
export default function AlbumDetailPage() {
  const { album } = useLoaderData<FindOneAlbumQuery>()

  if (!album) {
    return null
  }

  return (
    <PageContent>
      <Box margin="0 auto" maxW="1366px" display="flex" flexDirection="column">
        <Box display="flex" flexDirection={['column', null, null, 'row']}>
          <Box flex="1" marginRi ght={[0, 0, 0, '24px']}>
            <Carousel showThumbs={false}>
              {album.images?.map((albumImage, i) => (
                <Box key={`poster-${i}`} bgColor="gray.400">
                  <AspectRatio ratio={1} bgColor="gray.400">
                    <Image
                      key={`image-${i}`}
                      src={formatsToUrl(albumImage?.formats)}
                      alt={`${album.name} 앨범의 ${i + 1} 번째 커버 이미지`}
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
            marginLeft={[0, 0, 0, '16px']}
          >
            <Box>
              <Box marginBottom="24px">
                <Box color="black">앨범 이름</Box>
                <Box backgroundColor="blackAlpha.100" padding="8px">
                  {album.name}
                </Box>
              </Box>
              <Box marginBottom="24px">
                <Box color="black">발매일</Box>
                <Box backgroundColor="blackAlpha.100" padding="8px">
                  {toDateFormat(album.releaseDate)}
                </Box>
              </Box>
              <Box marginBottom="24px">
                <Box color="black">앨범 설명</Box>
                <ScrollDescription backgroundColor="blackAlpha.100">
                  <Box padding="24px" dangerouslySetInnerHTML={{ __html: strapiTextToHTML(album.description ?? '') }} />
                </ScrollDescription>
              </Box>
            </Box>
            <Box marginBottom="24px">
              <Box color="black">스트리밍 링크</Box>
              <Box backgroundColor="blackAlpha.100" padding="8px">
                <List>
                  <StreamingLink link={album.bugsLink}>
                    <HStack>
                      <Image w="16px" h="16px" src="/images/bugs.png" alt="벅스 스트리밍 링크" />
                      <Box>벅스뮤직</Box>
                    </HStack>
                  </StreamingLink>
                  <StreamingLink link={album.melonLink}>
                    <HStack>
                      <Image w="16px" h="16px" src="/images/melon.png" alt="멜론 스트리밍 링크" />
                      <Box>멜론</Box>
                    </HStack>
                  </StreamingLink>
                  <StreamingLink link={album.vibeLink}>
                    <HStack>
                      <Image w="16px" h="16px" src="/images/vibe.png" alt="바이브 스트리밍 링크" />
                      <Box>바이브</Box>
                    </HStack>
                  </StreamingLink>
                  <StreamingLink link={album.spotifyLink}>
                    <HStack>
                      <SiSpotify /> <Box>Spotify</Box>
                    </HStack>
                  </StreamingLink>
                  <StreamingLink link={album.youtubeMusicLink}>
                    <HStack>
                      <SiYoutubemusic /> <Box>Youtube music</Box>
                    </HStack>
                  </StreamingLink>

                  <StreamingLink link={album.appleMusicLink}>
                    <HStack>
                      <SiApplemusic /> <Box>Applemusic</Box>
                    </HStack>
                  </StreamingLink>
                </List>
              </Box>
            </Box>
            {album.buyLink && (
              <Box>
                <a href={album.buyLink} target="_blank" rel="noopener noreferrer">
                  <Button w="100%" colorScheme="blue" color="white">
                    앨범 구입하기
                  </Button>
                </a>
              </Box>
            )}
          </Box>
        </Box>
        <Box alignSelf="flex-end" marginTop="16px">
          <Link to="/discography" title="Back to the list">
            <Button>Back to the list</Button>
          </Link>
        </Box>
      </Box>
    </PageContent>
  )
}
