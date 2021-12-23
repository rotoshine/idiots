import { Box, BoxProps } from '@chakra-ui/react'
import { Link } from 'remix'

interface Props extends BoxProps {
  link: string
  title: string
  text: string
}
export default function NavMenu({ link, title, text, onClick, ...restProps }: Props) {
  const linkItem = (
    <Box marginLeft="12px" marginRight="12px" {...restProps}>
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
