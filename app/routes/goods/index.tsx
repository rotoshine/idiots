import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { Link, LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'
import GoodsImage from '~/components/GoodsImage'
import { FindProductsByMusicianDocument, ProductItemFragment } from '~/types/generated-indistreet'
import { StrapiImage } from '~/types/types'
import { requestToIndistreet } from '~/utils/api'
import { generateMeta } from '~/utils/meta'

export let loader: LoaderFunction = async () => {
  const data = await requestToIndistreet(FindProductsByMusicianDocument, {
    musicianId: 1,
  })

  return data?.musician?.products
}

export let meta: MetaFunction = () => {
  const title = `이디어츠 굿즈`
  const description = '이디어츠의 굿즈를 확인해보세요.'

  return generateMeta({
    title,
    description,
    path: '/goods',
  })
}

export default function GoodsPage() {
  const data = useLoaderData<ProductItemFragment[]>()

  return (
    <Box maxW="1080px" margin="0 auto">
      <Heading fontFamily="KOTRAHOPE">이디어츠 굿즈</Heading>
      <Box marginTop="40px">
        {data.length === 0 && <Box>아직 준비된 굿즈가 없어요. 조금만 기다려주세요!</Box>}
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {data.map((product, index) => (
            <Box
              key={`goods-${index}`}
              position="relative"
              transition="all .2s ease-in-out"
              _hover={{
                transform: 'translate(0, -10px)',
              }}
            >
              <Link to={`/goods/${product.id}`}>
                <GoodsImage
                  image={product.image}
                  isSoldOut={product.isSoldOut ?? false}
                  alt={`굿즈 ${product.name} 이미지`}
                />
                <Box bgColor="gray.800" padding="16px">
                  <Box color="white" fontSize={['1rem', '1.2rem', null, '2rem']} wordBreak="keep-all">
                    {product.name}
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
