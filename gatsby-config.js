/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description: "This is the description or our website",
    keywords: "gatsby, gatsby, project, bootstrap",
    image: "/static/gatsby.jpg",
    url: "http://www.atomicdevs.tech"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
/**
 <Helmet>
 <title>Gatsby Boopstrap Wordpress Sourced</title>
 <meta name={'description'} content={'This is the description or our website'}/>
 <meta name={'keywords'} content={'gatsby, gatsby, project, bootstrap'}/>
 <meta name={'robots'} content={'index, follow'}/>
 </Helmet>
 **/
