// import React from 'react'
// import PropTypes from 'prop-types'

// import { Container } from './styles'

// const Image = ({ src, alt, cover }) => (
//   <Container cover={cover}>
//     <img src={src} alt={alt} title={alt} />
//   </Container>
// )

// Image.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   cover: PropTypes.bool,
// }

// Image.defaultProps = {
//   cover: false,
// }

// export default Image

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ src, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(src)
      })

      if (!image) return null

      return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
