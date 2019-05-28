import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";
import BlogCard from "../components/blog-card";

const BlogPage = ({ data }) => {
  const allMarkdownRemark = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title={`Blog`} />

      {allMarkdownRemark.map(({ node }) => {
        return <BlogCard node={node} />;
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
