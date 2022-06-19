import { Box, BoxProps } from '@chakra-ui/react'
import { Link, useLocation } from '@remix-run/react'

interface Props extends BoxProps {
  link: string
  title: string
  text: string
}
export default function NavMenu({ link, title, text, onClick, ...restProps }: Props) {
  const { pathname } = useLocation()

  const isHome = pathname === '/' && link === '/'
  const isActive = isHome ? true : pathname.includes(link) && link !== '/'

  const linkItem = (
    <Box
      marginLeft="16px"
      marginRight="16px"
      transform="rotate(-10deg)"
      fontFamily="AHDN"
      fontWeight="bold"
      color={isActive ? 'blue.700' : 'gray.700'}
      transition="all ease 0.5s"
      _hover={{
        transform: 'rotate(370deg)',
        cursor: 'pointer',
        color: 'blue.700',
      }}
      {...restProps}
    >
      {text}
    </Box>
  )

  if (link.startsWith('/')) {
    return (
      <Link to={link} title={title}>
        {linkItem}
      </Link>
    )
  } else {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkItem}
      </a>
    )
  }
}
