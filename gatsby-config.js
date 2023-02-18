module.exports = {
  siteMetadata: {
    title: "Hakam",
    author: {
      name: "Syaiful Nur Hakam",
    },
    pathPrefix: "/",
    siteUrl: "https://hakam.my.id",
    description:
      "Syaiful Nur Hakam is an Undergraduate Student of Japanese Literature Studies at Brawijaya University. This is his personal website that capture his strange interest in web development. Combined with his other weird and seemingly random hobby, this website is somewhat the essence of his digital presence. While it maybe can not be conveyed correctly, he aspire to be full stack human. Kindly take it as it is, because he will not ellaborate more. &copy; 2022.",
    feedUrl: "https://hakam.my.id/rss.xml",
    logo: "https://hakam.my.id/logo.png",
  },

  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-json",

    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'png', 'jpg']
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },

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
        name: "images",
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-images",

    // Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              // linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
        ]
      },
    },

    // Meta
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hakam",
        short_name: "Hakam",
        description:
          "Syaiful Nur Hakam is an Undergraduate Student of Japanese Literature Studies at Brawijaya University. This is his personal website that capture his strange interest in web development. Combined with his other weird and seemingly random hobby, this website is somewhat the essence of his digital presence. While it maybe can not be conveyed correctly, he aspire to be full stack human. Kindly take it as it is, because he will not ellaborate more. &copy; 2023.",
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
            globPatterns: ["**/logo.png"]
         },
      },
    },
  ],
};
