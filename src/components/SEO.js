import React from "react"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"
import innerText from 'innertext';

const SEO = ({title, description, keywords, image}) => (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultImage,
            url,
            keywords,
          },
        },
      }) => {
        const seo = {
          title: defaultTitle,
          description: defaultDescription,
          image: `${image ? image : url + defaultImage}`,
          keywords,
        }
        return (
          <Helmet>
            <title>{innerText(title || seo.title)}</title>
            <meta name={"image"} content={image || seo.image} />
            <meta name={"description"} content={innerText(description || seo.description)} />
            <meta name={"keywords"} content={keywords || seo.keywords} />
            <meta name={"robots"} content={"index, follow"} />
          </Helmet>
        )
      }}
    />
)

export default SEO

export const query = graphql`
  query metadata {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        keywords
        defaultImage: image
        url
      }
    }
  }
`
