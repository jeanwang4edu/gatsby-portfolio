import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const SiteLogoWrapper = styled.div`
    display: block;
    width: 170px;
    height: 106px;
`;

const SiteLogo = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpLogo {
                edges{
                    node{
                    id
                        url{
                            slug
                            source_url
                        }
                }
            }
        }
        }   
    `} render={ props => (
        <SiteLogoWrapper>
            <a href="/">
                <img src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Site Logo" height="100%" />
            </a>
        </SiteLogoWrapper>
    ) }
    />
);

export default SiteLogo;