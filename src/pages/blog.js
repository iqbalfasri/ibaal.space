import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Seo from "../components/seo";
import Layout from "../components/layout";
import BlogCard from "../components/blog-card";

const BlogHeader = styled.div`
  width: 100%;
  padding: 80px 0 50px;
  text-align: left;
  margin-bottom: 50px;
`;

const BlogHeaderText = styled.h1`
  color: #222;
  font-size: 44px;
  font-weight: bold;
  text-align: center;
`;

const BlogContent = styled.div`
  font-family: "Roboto Mono", monospace;
  width: 100% !important;
  max-width: 980px;
`;

const BlogPage = ({ data }) => {
  const allMarkdownRemark = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title={`Blog`} />
      <BlogContent className="container">
        <BlogHeader>
          <BlogHeaderText>Cuma iseng</BlogHeaderText>
        </BlogHeader>
        <div className="row">
          {allMarkdownRemark.map(({ node }) => {
            return (
              <div className="blog-rows col-md-4 col-xs-12 col-sm-12">
                <BlogCard node={node} />
                <BlogCard node={node} />
              </div>
            );
          })}
        </div>
      </BlogContent>
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
