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

export default({pageContext}) => (
    <Layout>
        {pageContext.posts.map(post => (
            <div key={post.node.wordpress_id}>
                <h3 dangerouslySetInnerHTML={{__html:post.node.title}} />
                <p dangerouslySetInnerHTML={{__html:post.node.excerpt}} />
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