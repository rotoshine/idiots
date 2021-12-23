import { Box, BoxProps } from '@chakra-ui/react'
import { isEmpty, isNil } from 'lodash'

/*
const markdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})
*/
interface Props extends BoxProps {
  markdown?: string
}

const HASHTAG_REGEX = /#([ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9]+)/g
const MENTION_REGEX = /@([0-9|a-z|A-Z\d-_.]+)/g
/*
const toHTML = (markdown: string) =>
  markdownIt.render(
    markdown
      .replace(/\n/g, '<br />')
      .replace(HASHTAG_REGEX, '<a class="hashtag" href="https://twitter.com/search?q=$1">#$1</a>')
      .replace(
        MENTION_REGEX,
        '<a class="twitter-link" href="https://twitter.com/$1" target="_blank" rel="noopener noreferrer">@$1</a>'
      )
  )
*/
export default function MarkdownText({ markdown, ...restProps }: Props) {
  if (isEmpty(markdown) || isNil(markdown)) {
    return null
  }
  return (
    <>
      <Box
        dangerouslySetInnerHTML={{
          __html: markdown
            .replace(/\n/g, '<br />')
            .replace(
              HASHTAG_REGEX,
              '<a class="hashtag" href="https://twitter.com/search?q=$1"target="_blank" rel="noopener noreferrer">#$1</a>'
            )
            .replace(
              MENTION_REGEX,
              '<a class="twitter-link" href="https://twitter.com/$1" target="_blank" rel="noopener noreferrer">@$1</a>'
            ),
        }}
        {...restProps}
      />
    </>
  )
}
