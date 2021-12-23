const HASHTAG_REGEX = /#([ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9]+)/g
const MENTION_REGEX = /@([0-9|a-z|A-Z\d-_.]+)/g

export const strapiTextToHTML = (strapiText: string) =>
  strapiText
    .replace(/\n/g, '<br />')
    .replace(
      HASHTAG_REGEX,
      '<a class="hashtag" href="https://twitter.com/search?q=$1"target="_blank" rel="noopener noreferrer">#$1</a>'
    )
    .replace(
      MENTION_REGEX,
      '<a class="twitter-link" href="https://twitter.com/$1" target="_blank" rel="noopener noreferrer">@$1</a>'
    )
