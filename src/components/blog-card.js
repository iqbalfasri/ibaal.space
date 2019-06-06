import React from "react";
import { Link } from "gatsby";

function BlogCard({ node }) {
  const { id, frontmatter } = node;
  const { title, date, path } = frontmatter;

  return (
    <Link id={id} to={path}>
      <div className="blog-card">
        <h1 className="blog-title">{title}</h1>
        <span>{date}</span>
      </div>
    </Link>
  );
}

export default BlogCard;
