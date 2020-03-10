import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const PorfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const PorfolioItem = styled.div`
    width: 300px;
    border: 1px solid #efefef;
    padding: 16px;
    margin: 16px;
`
const PorfolioImage= styled.img`
    max-width: 100%;
`

const PorfolioItems = () => {
    return (
        <StaticQuery query={graphql`
            {
                allWordpressWpPortfolio {
                    edges{
                        node{
                            id
                            title
                            slug
                            excerpt
                            content
                            featured_media{
                                source_url
                            }
                        }
                    }
                }
            }          
        `} render={ props => <PorfolioItemsWrapper>
            { props.allWordpressWpPortfolio.edges.map(portfolioItem =>(
                <PorfolioItem key={portfolioItem.node.id}>
                    <h2>{portfolioItem.node.title}</h2>
                    <PorfolioImage src={portfolioItem.node.featured_media.source_url} alt="Thumbnail"/>
                    <div dangerouslySetInnerHTML={{__html:portfolioItem.node.excerpt}} />
                    <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                        Read More
                    </Link>
                </PorfolioItem>
            ))}
            </PorfolioItemsWrapper>} />
    )
}

export default PorfolioItems;