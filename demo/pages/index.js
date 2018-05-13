import React from 'react';
import Head from 'next/head';
import Example from '../examples/Example';
import SimpleList from '../examples/SimpleList';
import SemanticTable from '../examples/SemanticTable';

const Index = () => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
    </Head>
    <Example title="Table" code={SemanticTable.code} scope={SemanticTable.scope} />
    <Example title="Simple List" code={SimpleList.code} />
  </React.Fragment>
);

export default Index;
