import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

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


export default ({ data }) => {
  const post = data.markdownRemark;

  const readingTime = post.fields.readingTime.text;

  console.log(readingTime)

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BlogContent className="container">
        <BlogHeader>
          <BlogHeaderText>
            {post.frontmatter.title}
          </BlogHeaderText>
        </BlogHeader>
        <p dangerouslySetInnerHTML={{ __html: post.html }} />
        {/* <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content> */}
      </BlogContent>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
