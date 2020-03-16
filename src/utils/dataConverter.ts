import { Live } from '../types/models'

interface LiveListEdge {
  node: {
    id: string
    frontmatter: Live
    fields: {
      slug: string
    }
  }
}

interface MarkdownRemarkQueryResult {
  markdownRemark: {
    html?: string
    frontmatter: Live
    fields: {
      slug: string
    }
  }
}

export const edgesToLives = (edges: LiveListEdge[]) =>
  edges.map((edge: LiveListEdge) => ({
    id: edge.node.id,
    date: edge.node.frontmatter.date,
    title: edge.node.frontmatter.title,
    slug: edge.node.fields.slug,
  }))

export const markdownRemarkToLive = (data: MarkdownRemarkQueryResult) => {
  const { markdownRemark } = data
  const { frontmatter, fields } = markdownRemark
  const {
    title = '',
    seoDescription,
    posterUrl,
    posterUrls = [],
    date = '',
    place,
    teams = [],
    eventLink,
    priceInfo,
    priceInfos,
    ticketLink,
    content,
  } = frontmatter

  return {
    title,
    seoDescription,
    posterUrl,
    posterUrls,
    date,
    place,
    teams,
    eventLink,
    priceInfo,
    priceInfos,
    ticketLink,
    slug: fields.slug,
    content,
  }
}
