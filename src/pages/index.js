import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import LandingPage from './landing';

const IndexPage = () => (
  <Layout>
    <LandingPage />
  </Layout>
);

export default IndexPage;
