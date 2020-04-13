const path = require('path')
const { createRemoteFileNode } = require('gatsby-source-filesystem')

const makeRequest = (graphql, query) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(query).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        return result
      })
    )
  })

exports.onCreateNode = async ({ node, actions, store, cache }) => {
  const { createNode } = actions

  const createRemoteFileNodes = async images => {
    for (const image of images) {
      const fileNode = await createRemoteFileNode({
        url: 'https://admin.idiots.band' + image.url,
        store,
        cache,
        createNode,
        createNodeId: () => image.id,
      })
      if (fileNode) {
        image.localFile___NODE = fileNode.id
      }
    }
  }

  if (node.internal.type === 'StrapiAlbums') {
    await createRemoteFileNodes(node.covers)
  }

  if (node.internal.type === 'StrapiLives') {
    await createRemoteFileNodes(node.posters)
  }

  if (node.internal.type === 'StrapiHomeContent') {
    await createRemoteFileNodes(node.schedulePosters)
    await createRemoteFileNodes(node.carouselImages)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const livesRes = await makeRequest(
    graphql,
    `
    {
      allStrapiLives {
        edges {
          node {
            slug           
          }
        }
      }
    }
    `
  )

  const { edges: lives } = livesRes.data.allStrapiLives
  lives.forEach(({ node }) => {
    createPage({
      path: `/live/${node.slug}/`,
      component: path.resolve('./src/components/LiveDetail.tsx'),
      context: {
        slug: node.slug,
      },
    })
    console.log(`path: /live/${node.slug}/`)
  })

  const albumsRes = await makeRequest(
    graphql,
    `
    {
      allStrapiAlbums {
        edges {
          node {
            slug            
          }
        }
      }
    }
    `
  )

  const { edges: albums } = albumsRes.data.allStrapiAlbums
  albums.forEach(({ node }) => {
    createPage({
      path: `/album/${node.slug}`,
      component: path.resolve('./src/components/AlbumDetail.tsx'),
      context: {
        slug: node.slug,
      },
    })
    console.log(`path: /album/${node.slug}/`)
  })
}
