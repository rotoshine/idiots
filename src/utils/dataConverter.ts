interface LiveListStrapiEdge {
  node: {
    date: string
    title: string
    slug: string
  }
}

export const edgesToLivesForStrapi = (edges: LiveListStrapiEdge[]) =>
  edges.map((edge: LiveListStrapiEdge) => ({
    date: edge.node.date,
    title: edge.node.title,
    slug: edge.node.slug,
  }))
