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

export const edgesToLives = (edges: LiveListEdge[]) => (
  edges.map((edge: LiveListEdge) => (
    {
      id: edge.node.id,
      date: edge.node.frontmatter.date,
      title: edge.node.frontmatter.title,
      slug: edge.node.fields.slug,
    }
  ))
)

export const markdownRemarkToLive = (data: MarkdownRemarkQueryResult) => {
  const { markdownRemark } = data
  const { frontmatter, fields } = markdownRemark
  const {
    title = '',
    posterUrl,
    date = '',
    place,
    teams = [],
    eventLink,
    priceInfo
  } = frontmatter

  return {
    title,
    posterUrl,
    date,
    place,
    teams,
    eventLink,
    priceInfo,
    slug: fields.slug
  }
}