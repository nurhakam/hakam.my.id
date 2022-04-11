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
    "gatsby-plugin-preact",

    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'png', 'jpg']
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
            globPatterns: ["**/logo.png"]
         },
      },
    },
    
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: '6tKuCWValpBWid9fCs89ooNXiFJHJCss',
  
        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: 'SEGMENT_DEV_WRITE_KEY',
  
        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,
  
        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 10,
  
        // boolean (defaults to false); whether to delay load Segment
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Segment to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Segment will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Segment
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: false,
  
        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000,
  
        // Whether to completely skip calling `analytics.load({writeKey})`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load({writeKey})` manually
        // elsewhere in your code or are using a library
        // like: https://github.com/segmentio/consent-manager that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        manualLoad: false,
  
        // This package will use a default version of Segment's code snippet, but
        // if you'd like to include your own you can do so here. This is useful if
        // the version this package uses is different than the one you'd like to
        // use...or you need to do something custom.
        // While you should NOT use a back-ticked template string here, the string
        // will be evaluated as template literal with the following variables
        // available to it:
        //    - `writeKey`: The appropriate value from the `prodKey` and `devKey`
        //      options, based on the `NODE_ENV`
        //    - any of the other options passed here
        // 
        // NOTES: 
        // - If you provide a custom snippet, an immediate call to
        //   `analytics.load()` and/or `analytics.page()` will not be added by
        //   this plugin. You can - of course - add them yourself to your snippet.
        // - If your custom snippet does not include a call to `analytics.load()`
        //   then you must either:
        //   1. Manually load it and set the `manualLoad` option here to `true`
        //   2. Use the `delayLoad` option here
        customSnippet: '!function(){var analytics=window.analytics||[];...;analytics.load("${writeKey}");analytics.page();}}();'
      },
    },
  ],
};
