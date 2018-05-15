import React from 'react';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import Example from '../examples/Example';
import SimpleList from '../examples/SimpleList';
import SemanticTable from '../examples/SemanticTable';

const Index = () => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
    </Head>
    <Container fluid>
      <Example title="Table" {...SemanticTable} />
      <Example title="Simple List" {...SimpleList} />
    </Container>
  </React.Fragment>
);

export default Index;
