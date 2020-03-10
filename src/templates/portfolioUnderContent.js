import React from 'react';
import Layout from '../components/layout';
import PorfolioItems from '../components/Portfolioitems';

export default ({pageContext}) => (
  <Layout>
      <h1 dangerouslySetInnerHTML={{__html:pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html:pageContext.content}} />
      <PorfolioItems />
  </Layout>  
);