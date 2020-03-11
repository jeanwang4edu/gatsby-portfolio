import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';
import styled from 'styled-components';

const Pagination = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PageNumberWrapper = styled.div`
    border: 1px solid #eee;
    background: ${props => props.isCurrentPage ? '#eee': '#fff'};
`;

const PageNumber = styled(Link)`
    display: block;
    padding: 8px 16px;
    text-decoration: none;
`;

const ReadMoreLinkWrapper = styled.div`
    position: relative;    
    border: 1px solid black;
    width: 120px;
    padding-left: 15px;
    background-color: gray;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: black;
        transform: scaleY(0);
        transition: transform .2s,
                    width .4s cubic-bezier(1,0,0,1) .2s,
                    background-color .1s;
        z-index: 1;
    }

    &:hover::before {
        transform: scaleY(1);
        width: 100%;
    }
`;

const ReadMoreLink = styled(Link)`

    z-index: 10;

    &:link,
    &:visited {
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        position: relative;        
    }

`;

export default({pageContext}) => (
    <Layout>
        {pageContext.posts.map(post => (
            <div key={post.node.wordpress_id}>
                <h3 dangerouslySetInnerHTML={{__html:post.node.title}} />
                <small>
                    {post.node.date}
                </small>
                <p dangerouslySetInnerHTML={{__html:post.node.excerpt}} />
                <ReadMoreLinkWrapper>
                    <ReadMoreLink to={`/post/${post.node.slug}`}>
                        Read More &#x2192;
                    </ReadMoreLink>
                </ReadMoreLinkWrapper>
            </div>
        ))}
        <Pagination>
            { pageContext.currentPage === 1 ? ``:
                <PageNumberWrapper >
                    <PageNumber to={ pageContext.currentPage - 1 === 1 ? `/blog`:`/blog/${pageContext.currentPage - 1}`}>
                        &lt;
                    </PageNumber>
                </PageNumberWrapper> 
            }            
            { Array.from({length: pageContext.numberOfPages}).map((page, index) => (
                <PageNumberWrapper key={index} isCurrentPage={index +1 === pageContext.currentPage}>
                    <PageNumber to={index === 0 ? `/blog` : `/blog/${index + 1}`}>
                        {index +1 }
                    </PageNumber>
                </PageNumberWrapper>
            ))}
            { pageContext.currentPage === pageContext.numberOfPages ? ``:
                <PageNumberWrapper >
                    <PageNumber to={`/blog/${pageContext.currentPage + 1}`}>
                        &gt;
                    </PageNumber>
                </PageNumberWrapper>
            }
        </Pagination>

    </Layout>
);