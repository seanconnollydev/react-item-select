import React from 'react';
import Head from 'next/head';
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import Example from '../examples/Example';
import SimpleList from '../examples/SimpleList';
import SemanticTable from '../examples/SemanticTable';

const Index = () => (
  <div>
    <Head>
      <title>React Item Select</title>
      <meta
        name="viewport"
        content={
          'user-scalable=0, initial-scale=1, ' +
          'minimum-scale=1, width=device-width, height=device-height'
        }
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" />
      <style>{'body { background-color: #f8f8f8; }'}</style>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-119318492-1', 'auto');
          ga('send', 'pageview');`,
        }}
      />
      <script async src="https://www.google-analytics.com/analytics.js" />
    </Head>
    <Container fluid>
      <Segment inverted vertical color="blue" padded="very" textAlign="center" className="index-segment">
        <Header size="huge">react-item-select</Header>
        <Header size="medium">A React component that takes away the pain of managing item selection state in tables and lists</Header>
        <Image src="static/github.png" href="https://github.com/goldenshun/react-item-select" />
      </Segment>
      <Container textAlign="center" className="index-description">
        The examples below use <a href="https://react.semantic-ui.com/introduction">Semantic UI React</a> but you can use <strong>react-item-select</strong> with <em>any</em> UI framework including Material UI, Bootstrap or your own custom library.
      </Container>
      <Example title="Table" {...SemanticTable} />
      <Example title="Simple List" {...SimpleList} />
    </Container>
    <style jsx global>{`
      .index-segment, .index-description {
        margin-bottom: 48px !important;
      }
    `}
    </style>
  </div>
);

export default Index;
