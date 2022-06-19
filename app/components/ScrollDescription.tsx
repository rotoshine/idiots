import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends BoxProps {
  children: React.ReactNode
}

export default function ScrollDescription({ children, ...boxProps }: Props) {
  return (
    <Box
      bgColor="blackAlpha.100"
      maxH="300px"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'white',
          borderRadius: '24px',
        },
      }}
      {...boxProps}
    >
      {children}
    </Box>
  )
}
