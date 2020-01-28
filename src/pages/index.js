import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>My thoughts</h1>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <span>{ node.frontmatter.title  } - {node.frontmatter.date }</span>
            <p>{ node.excerpt }</p>
          </div>
        ))
      }
    </div>
  </Layout>
)

export const query = graphql`
  query{
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            description
            title
            date
          }
        }
      }
    }
  }
`
