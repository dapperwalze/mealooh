import React from "react";
import { Layout } from "antd";
import PageHeader from "./header";
import PageFooter from "./footer";
import PageContent from "./content";
import styles from "./layout.module.scss";

const PageLayout = () => {
  return (
    <Layout className={styles.layout}>
      <PageHeader />
      <PageContent />
      <PageFooter />
    </Layout>
  );
};
export default PageLayout;
