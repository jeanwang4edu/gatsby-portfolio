/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import MainMenu from "./MainMenu";
import styled, {createGlobalStyle} from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';
import SEO from '../components/SEO';


const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <StaticQuery query={graphql`
      {
        allWordpressWpFavicon{
          edges{
            node{
              url{
                source_url
              }
            }
          }
        }
      }
    `} render={props => (
        <div>
          <SEO title="Gatsby Wordpress Site"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i&display=swap" rel="stylesheet"></link>
          <GlobalStyles />
          <MainMenu />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>
    )}
    />
  
  )
}

export default Layout

/*

          <Helmet>
            <link rel="shortcut icon" type="image/png" src={props.allWordpressWpFavicon.edges[0].node.url.source_url} />
          </Helmet>
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
    
  </div>
  */