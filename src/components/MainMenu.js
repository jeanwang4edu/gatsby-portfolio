import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from '../components/Siteinfo';
import SiteLogo from '../components/SiteLogo';

const MainMenuWrapper = styled.div`
    display: flex;
    background-color: lightgray;
`
const MenuItem = styled(Link)`
    color: #000;
    font-weight: bold;
    display: block;
    padding: 8px 16px;
    text-decoration: none;
`

const MainMenuInner = styled.div`
    max-width: 960px;
    margin:10px auto;
    display: flex;
    width: 960px;
    height: 100%;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
      {
        allWordpressMenusMenusItems(filter:{
        name:{
            eq: "Main menu"
        }
        }) {
        edges{
            node{
            name
            items{
                title
                slug
                type
                url
            }
            }
        }
        }
      }
    `} render={props => (
        <MainMenuWrapper>
            <MainMenuInner>
                <SiteLogo />
                <SiteInfo />
                {props.allWordpressMenusMenusItems.edges[0].node.items.map(item=>(
                    item.type === "custom" ? 
                    <MenuItem to={`${item.url}`} key={item.title}>
                    {item.title}
                    </MenuItem> 
                    :
                    <MenuItem to={`/${item.slug}`} key={item.title}>
                    {item.title}
                    </MenuItem>
                ))}
            </MainMenuInner>
        </MainMenuWrapper>
     )}
    />
);

export default MainMenu;