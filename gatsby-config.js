module.exports = {
  siteMetadata: {
    title: "Hakam",
    author: {
      name: "Syaiful Nur Hakam",
    },
    pathPrefix: "/",
    siteUrl: "https://hakam.my.id",
    description:
      "Syaiful Nur Hakam's personal website. A full stack human, doing my best to become better human. &copy; 2021.",
    feedUrl: "https://hakam.my.id/rss.xml",
    logo: "https://hakam.my.id/logo.png",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",

    // Image and static
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-images",

    // Markdown
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
        ],
        extensions: [`.md`, `.mdx`],
      },
    },

    // Meta
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hakam.",
        short_name: "Hakam.",
        description: "Syaiful Nur Hakam's personal website. A full stack human, doing my best to become better human",
        start_url: "/",
        background_color: "white",
        theme_color: "#5183f5",
        display: "minimal-ui",
        icon: "static/logo.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },

    // Feed
    {
      resolve: "gatsby-plugin-feed",
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
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                categories: edge.node.frontmatter.tags,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.body }],
              })),
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { template: { eq: "post" } } }
              ) {
                edges {
                  node {
                    excerpt
                    body
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
            output: "/rss.xml",
            title: "Hakam. | RSS Feed",
          },
        ],
      },
    },
  ],
};
