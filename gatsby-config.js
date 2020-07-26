module.exports = {
  siteMetadata: {
    title: 'Hakam.',
    author:{
      name: 'Syaiful Nur Hakam'
    },
    pathPrefix: '/',
    siteUrl: 'https://hakam.my.id',
    description:
      'Full stack human. Doing my best to become better human',
    feedUrl: 'https://hakam.my.id/rss.xml',
    logo: 'https://hakam.my.id/logo.png',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',

    // Image and static
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // Markdown
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              classPrefix: 'language-',
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
        ],
      },
    },

    // Meta
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hakam.',
        short_name: 'Hakam.',
        description:
          'Full stack human. Doing my best to become better human',
        start_url: '/',
        background_color: 'white',
        theme_color: '#5183f5',
        display: 'minimal-ui',
        icon: 'static/logo.png',
      },
    },

    // Feed
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return { ...edge.node.frontmatter, categories: edge.node.frontmatter.tags,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],}
              })
            },
            query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { template: { eq: "post" } } }
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Hakam. | RSS Feed',
          },
        ],
      },
    },
  
  ],
}
