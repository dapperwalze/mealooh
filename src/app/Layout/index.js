import React from "react";
import MealHeader from "./header"
import MealFooter from "./footer"
import MealContent from "./content"
import { Layout } from 'antd';



const MealLayout=({children})=>{

    return (
        <>
            <Layout>
                <MealHeader/>
                <MealContent>{children}</MealContent>
                <MealFooter/>
            </Layout>

        </>
    );
};
export default MealLayout;