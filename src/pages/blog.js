import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  const allMarkdownRemark = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title={`Blog`} />

      {allMarkdownRemark.map(({ node }) => {
        const { id, excerpt, frontmatter, fields } = node;
        const { title, date, path } = frontmatter;
        const { slug, readingTime } = fields;

        return (
          <Link key={id} to={path}>
            <div>
              <h1>{title}</h1>
              <span>
                <p>{date}</p>
              </span>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
