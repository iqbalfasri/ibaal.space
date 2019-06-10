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

const BlogHeaderDesc = styled.p`
  color: #f2f2f2;
`;

const BlogHeaderText = styled.h1`
  color: #fcaf3e;
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
  const getFullYear = new Date().getFullYear();

  return (
    <Layout>
      <Seo title={`Blog`} />
      <BlogContent className="container">
        <BlogHeader>
          <BlogHeaderText>Catatan Iqbal</BlogHeaderText>
          <center>
            <BlogHeaderDesc>
              Karena saya pelupa, makanya saya catat.
            </BlogHeaderDesc>
          </center>
        </BlogHeader>
        <div className="row">
          {allMarkdownRemark.map(({ node }) => {
            return (
              <div
                key={node.id}
                className="blog-rows col-md-5 col-xs-12 col-sm-12"
              >
                <BlogCard node={node} />
              </div>
            );
          })}
        </div>
      </BlogContent>
      <div
        style={{
          color: "white",
          padding: "30px 0 0 0",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <p>&copy; Iqbal Fasri {getFullYear}</p>
      </div>
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
