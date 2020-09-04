module.exports = {
  siteMetadata: {
    title: `Ajulu's Thoughts`,
    name: `Ajulu's Thoughts`,
    siteUrl: `https://ajulusthoughts7.netlify.app`,
    description: `Ajulu's Thoughts is an Informative Tech Blog authored by Stephen Ajulu and guest posters. Get Quality Tech, Cybersecurity and Dev Content`,
    hero: {
      heading: `Ajulu's Thoughts is an Informative Tech Blog authored by Stephen Ajulu & guest posters`,
      maxWidth: 1000,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/stephenajulu`,
      },
      {
        name: `github`,
        url: `https://github.com/stephenajulu`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/stephenajulu`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/stephenajulu/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/stephenajulu`,
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
        name: `Ajulu's Thoughts`,
        short_name: `Ajulu's Thoughts`,
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
