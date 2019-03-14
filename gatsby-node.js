const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

const createPagesByType = async (graphql, createPage, type, componentPath) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "${type}"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(componentPath),
      context: {
        slug: node.fields.slug,
      },
    })
    console.log(`[${type}] ${node.fields.slug} created,`)
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await createPagesByType(graphql, createPage, `live`, `./src/components/LiveDetail.tsx`)
  await createPagesByType(graphql, createPage, `album`, `./src/components/AlbumDetail.tsx`)
}