import { AspectRatio, Box, Image, SimpleGrid } from '@chakra-ui/react'
import { Link, useLoaderData } from '@remix-run/react'
import { MetaFunction } from '@remix-run/react/routeModules'
import PageContent from '~/components/PageContent'
import { AlbumListDocument, AlbumListQuery } from '~/types/generated-indistreet'
import { StrapiImage } from '~/types/types'
import { requestToIndistreet } from '~/utils/api'
import { formatsToUrl } from '~/utils/image'
import { generateMeta } from '~/utils/meta'

export const loader = async () => {
  const data = await requestToIndistreet(AlbumListDocument, {
    where: {
      isRemoved: false,
      'musician.id': 1,
    },
    sort: 'releaseDate:DESC',
  })

  console.log(data)
  return data
}

export const meta: MetaFunction = () => {
  const title = `이디어츠 음원 정보`
  const description = '이디어츠의 음원 정보를 확인해보세요.'

  return generateMeta({
    title,
    description,
    path: '/discography',
  })
}

export default function DiscographyPage() {
  const { albums } = useLoaderData<AlbumListQuery>()

  if (!albums) {
    return null
  }

  return (
    <PageContent>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {albums.map(album => (
          <Box
            key={`album-${album?.id}`}
            position="relative"
            transition="all .2s ease-in-out"
            _hover={{
              transform: 'translate(0, -10px)',
            }}
          >
            <Link to={`/discography/${album?.id}`}>
              <AspectRatio ratio={1}>
                <Image
                  w="100%"
                  src={formatsToUrl((album?.images?.[0] as StrapiImage).formats)}
                  alt={`${album?.name} 앨범 커버`}
                />
              </AspectRatio>
              <Box>{album?.name}</Box>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </PageContent>
  )
}
