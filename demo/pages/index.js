import React from 'react';
import Head from 'next/head';
import { Grid, Rail, Sticky } from 'semantic-ui-react';
import Example from '../examples/Example';
import SimpleList from '../examples/SimpleList';
import SemanticTable from '../examples/SemanticTable';

const Index = () => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
    </Head>
    <Grid centered columns={2}>
      <Grid.Column>
        <Example id="table" title="Table" code={SemanticTable.code} scope={SemanticTable.scope} />
        <Example id="list" title="Simple List" code={SimpleList.code} />
        <Rail position="left">
          <Sticky>
            <div><a href="#table">Table</a></div>
            <div><a href="#list">List</a></div>
          </Sticky>
        </Rail>
      </Grid.Column>
    </Grid>
  </React.Fragment>
);

export default Index;
