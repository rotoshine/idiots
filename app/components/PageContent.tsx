import { Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode | React.ReactNode[]
}
export default function PageContent({ children }: Props) {
  return (
    <Box maxW={['100%', null, null, '1366px']} margin="0 auto" padding={['8px', null, '16px', '24px']}>
      {children}
    </Box>
  )
}
