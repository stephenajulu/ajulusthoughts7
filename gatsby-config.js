module.exports = {
  siteMetadata: {
    title: `TechWit Ke`,
    name: `TechWit Ke `,
    siteUrl: `https://techwit7.netlify.app`,
    description: `Your Trusted Source of Quality Tech, Cybersecurity and Development Tips, Tricks, Tutorials, News, Reviews, Offers, Tools and More`,
    hero: {
      heading: `Welcome to TechWit Ke. A Source of Quality Tech Content`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/techwitke`,
      },
      {
        name: `github`,
        url: `https://github.com/techwitke`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/techwitke`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/techwitke/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/techwitke`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TechWit Ke`,
        short_name: `TechWit Ke`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
