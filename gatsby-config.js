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
    "gatsby-plugin-sitemap",

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
    "gatsby-plugin-image",
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
        description:
          "Syaiful Nur Hakam's personal website. A full stack human, doing my best to become better human",
        start_url: "/",
        background_color: "white",
        theme_color: "#5183f5",
        display: "minimal-ui",
        icon: "static/logo.png",
        cache_busting_mode: "none",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },

    {
      resolve: "gatsby-plugin-offline",
      options: {
         workboxConfig: {
            globPatterns: ["**/icon-path*"]
         },
      },
    },
  ],
};
