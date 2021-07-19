import React from "react";
import PageHeader from "./header"
import PageFooter from "./footer"
import PageContent from "./content"
import { Layout } from 'antd';



const PageLayout=({children})=>{

    return (
        <>
            <Layout>
                <PageHeader/>
                <PageContent>{children}</PageContent>
                <PageFooter/>
            </Layout>

        </>
    );
};
export default PageLayout;