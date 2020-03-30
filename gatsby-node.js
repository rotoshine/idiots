const path = require('path')

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
            bands {
              name
              instagramUrl
            }
            date
            content
            eventLink
            place
            posters {
              url
            }
            priceInfo
            seoDescription
            ticketLink
            title
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
            title
            content
            releaseDate
            purchaseLink
            streamingLinks
            covers {
              url
            }
            songs {
              track
              name
            }
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
