import React from "react";
import { graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
  color: #fcaf3e;
  font-size: 44px;
  font-weight: bold;
  text-align: center;
`;

const BlogHeaderInfo = styled.div`
  text-align: center;
  padding: 10px 0 20px 0;
  box-sizing: border-box;
  justify-content: center;
`;

const BlogContent = styled.div`
  font-family: "Roboto Mono", monospace;
  width: 100% !important;
  max-width: 980px;
  color: #fff;
`;


export default ({ data }) => {
  const post = data.markdownRemark;
  const readingTime = post.fields.readingTime.text;

  console.log(data, "Error data disini")

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <BlogContent className="container">
        <BlogHeader>
          <BlogHeaderText>{post.frontmatter.title}</BlogHeaderText>
          <BlogHeaderInfo className="row">
            <p className="col-md-2">{readingTime}</p>
            <p className="col-md-3">{post.frontmatter.date}</p>
          </BlogHeaderInfo>
        </BlogHeader>
        <p dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link className="floating-button-back" to="/blog">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
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
