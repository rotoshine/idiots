import { Box, Button, Heading, Image, Link } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { APIResponse, Article } from '~/types/types'
import { formatsToLipimoonImageUrl } from '~/utils/image'
import { strapiTextToHTML } from '~/utils/text'
import { fetchLipimoonApi } from '~/utils/api'
import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { MetaFunction } from '@remix-run/react/routeModules'

export let loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  try {
    const data = await fetchLipimoonApi(`/articles/${id}`, {
      populate: 'images',
      'filters[publishDate][$lte]': new Date().toISOString(),
    })
    return data
  } catch {
    throw new Response('Not Found', {
      status: 404,
      statusText: '존재하지 않는 게시글입니다!',
    })
  }
}

export let meta: MetaFunction = ({ data }) => {
  const { data: article } = data
  const attributes = article?.attributes ?? {}

  const imageUrl = attributes?.images.data
    ? formatsToLipimoonImageUrl(attributes?.images.data[0]?.attributes.formats)
    : 'https://lipimoon.world/images/logo.png'
  const title = `이디어츠 소식 - ${attributes?.title}`
  const description = !isEmpty(attributes?.description)
    ? `${attributes?.description.slice(0, 100)}...`
    : '이디어츠의 새로운 소식을 확인할 수 있어요.'

  return {
    title,
    description,
    'og:title': title,
    'og:description': description,
    'og:image': imageUrl,
    'og:url': `https://lipimoon.world.com/news/${data?.id}`,
    'twitter:card': 'summary',
    'twitter:site': '_LIPIMOON_',
    'twitter:creator': '_LIPIMOON_',
  }
}

export default function NewsDetailPage() {
  const {
    data: { attributes },
  } = useLoaderData<APIResponse<Article>>()

  return (
    <Box maxW="900px" margin="0 auto" marginTop="40px">
      <Heading fontFamily="KOTRAHOPE">{attributes?.title}</Heading>
      <Box bgColor="gray.500" padding="40px" borderRadius="16px" marginTop="16px">
        {attributes.images.data?.map((image, i) => (
          <Image
            w="100%"
            key={`news-image-${i}`}
            src={formatsToLipimoonImageUrl(image.attributes.formats)}
            alt={image.attributes.name}
            marginBottom="16px"
          />
        ))}
        <Box dangerouslySetInnerHTML={{ __html: strapiTextToHTML(attributes.description) }} padding="16px" />
        <Box display="flex" justifyContent="center">
          <Link to="/news">
            <Button w="100%" maxW="600px">
              목록으로 돌아가기
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
