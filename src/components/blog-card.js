import React from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

function BlogCard({ node }) {
  const { id, excerpt, frontmatter } = node;
  const { title, date, path } = frontmatter;

  return (
    <div className="container">
      <Link id={id} to={path}>
        <h1>{title}</h1>
        <span>{date}</span>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
}

export default BlogCard;
