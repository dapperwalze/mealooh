import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "antd";
import { Logo } from "./../../../components/Logo/index";
import styles from "./header.module.scss";
import { SearchBar } from './../../../components/SearchBar/index';

const { Header } = Layout;

const PageHeader = () => {
  return (
    <>
      <Header className={styles.header} >
              <Logo />

        <div className={styles.headerFeatures}>
          
            
            <SearchBar/>
         

          <nav className={ styles.navLinkGroup }>
            
            <NavLink to="/"
              exact
              activeStyle={ {
                color: "#25f525",
              } }
              className={ styles.headerNavLink }>
              
    
              Home
              </NavLink>
            
            <NavLink to="/cart"
          exact activeStyle={{color: "#25f525" } } className={ styles.headerNavLink }>Cart</NavLink>
            

            <NavLink to="/order-history"
          exact
          activeStyle={{
            color: "#25f525" } }
              className={ styles.headerNavLink }>Order history</NavLink>
          </nav>
        </div>
      </Header>
    </>
  );
};

export default PageHeader;
