import React from "react";
import { Layout } from "antd";
import "./style.scss";
const { Footer } = Layout;

const MealFooter = () => {
  return (
    <>
      <Footer style={{ bottom: "0", width: "100%" }}>
        <div className={"container"}>
          <div className={"footer-item"}>
            <img src={"/appimages/meal logo.png"} style={{ height: "140px" }} />
          </div>
          <div className={"footer-item"}>&copy; 2020 Created mealMan</div>

          <div>
            <div>subscribe for updates</div>
            <div>
              <a href={"#"}>mealapp@gmail.com</a>
            </div>
            <div>
              click <a href={"#"}>here</a> to subscribe
            </div>
          </div>
        </div>
        <div className={"copy-right"}>&copy; 2018 Created by mealMan</div>
      </Footer>
    </>
  );
};

export default MealFooter;
