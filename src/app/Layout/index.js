import React from "react";
import { Layout } from "antd";
import PageHeader from "./header";
import PageFooter from "./footer";
import PageContent from "./content";

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <PageHeader />
      <PageContent>{children}</PageContent>
      <PageFooter />
    </Layout>
  );
};
export default PageLayout;
