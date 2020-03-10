import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({pageContext}) => (
  <Layout>
      <h1>
          {pageContext.title}
      </h1>
      <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer" >
        Blog Link
      </a>
      <div><FeaturedImage src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} /></div>
      <div dangerouslySetInnerHTML={{__html:pageContext.content}} />
  </Layout>  
);
