import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

/**
 * Styling card with styled components
 */
const CardLink = styled.a`

  background-color: red;

`;


function BlogCard({ node }) {
  const { id, excerpt, frontmatter } = node;
  const { title, date, path } = frontmatter;

  return (
    <CardLink id={id} href={path}>
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{excerpt}</p>
    </CardLink>
  );
}

export default BlogCard;
