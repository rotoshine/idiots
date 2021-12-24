import { Box, Button, Divider, Flex } from '@chakra-ui/react'
import { LoaderFunction, MetaFunction, useLoaderData, Link } from 'remix'
import GoodsImage from '~/components/GoodsImage'
import { isEmpty } from 'lodash'
import { formatsToUrl } from '~/utils/image'
import { fetchIndistreetApi } from '~/utils/api'
import { generateMeta } from '~/utils/meta'
import PageContent from '~/components/PageContent'

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  try {
    const data = await fetchIndistreetApi(`/products/${id}`)

    return data
  } catch {
    throw new Response('Not Found', {
      status: 404,
      statusText: '존재하지 않는 굿즈입니다!',
    })
  }
}

const priceFormat = new Intl.NumberFormat('ko', {
  style: 'currency',
  currency: 'KRW',
})

const productTypeText: {
  [key: string]: string
} = {
  ALBUM: '음반',
  GOODS: '굿즈',
}

export let meta: MetaFunction = ({ data }) => {
  const imageUrl = formatsToUrl(data?.image?.formats)
  const title = `이디어츠 굿즈 - ${data?.name}`
  const description = !isEmpty(data?.description) ? `${data?.description?.slice(0, 100)}...` : `리피문의 굿즈`

  return generateMeta({
    title,
    description,
    imageUrl,
    path: `/goods/${data?.id}`,
  })
}

export default function GoodsItemDetail() {
  const data = useLoaderData()
  return (
    <PageContent>
      <Flex flexDir={['column', null, 'row']}>
        <Box flex="1">
          <GoodsImage image={data.image} isSoldOut={data.isSoldOut} alt={`굿즈 ${data.name} 이미지`} />
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDir="column"
          marginLeft={[null, null, '24px', '48px']}
          maxW={['100%', null, '500px']}
        >
          <Box flex="1" bgColor="blackAlpha.50" display="flex" flexDir="column">
            <Box padding="24px">
              <Box fontSize="1.5rem" marginBottom="16px">
                {data.name}
              </Box>
              <Divider />
              <Box>상품 종류: {productTypeText[data.productType]}</Box>
              <Box textAlign="right">{priceFormat.format(data.price)}</Box>
            </Box>
            {data.description && (
              <Box
                maxH="500px"
                marginTop="8px"
                overflowY="scroll"
                padding="24px"
                dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, '<br />') }}
              />
            )}
          </Box>
          {!data.isSoldOut && (
            <Box justifySelf="flex-end">
              <a href={data.purchaseLink} target="_blank" rel="noopener noreferrer">
                <Button w="100%" colorScheme="blue">
                  구입하러가기
                </Button>
              </a>
            </Box>
          )}
          <Link to="/goods">
            <Button marginTop="24px" w="100%">
              목록으로 돌아가기
            </Button>
          </Link>
        </Box>
      </Flex>
    </PageContent>
  )
}
