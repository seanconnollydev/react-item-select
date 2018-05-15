/* eslint-disable react/prop-types */
import React from 'react';
import withSelections from 'react-item-select';
import { Button, Container, Header } from 'semantic-ui-react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';

const defaultScope = { withSelections };

class Example extends React.Component {
  state = {
    showEditor: false,
  };

  toggleEditor = () => {
    this.setState(prevState => ({ showEditor: !prevState.showEditor }));
  }

  render() {
    const {
      code, scope, title,
    } = this.props;

    const { showEditor } = this.state;

    return (
      <div className="example">
        <LiveProvider code={code} scope={Object.assign({}, scope, defaultScope)}>
          <Container textAlign="center">
            <div className="header-wrapper">
              <Header size="large">{title}</Header>
              <Button onClick={this.toggleEditor} size="tiny" basic color="blue">
              Edit
              </Button>
            </div>
            <LivePreview />
          </Container>
          {showEditor && <div className="editor"><LiveEditor /></div>}
          <LiveError />
        </LiveProvider>
        <style jsx>{`
          div.example {
            margin-bottom: 48px;
          }

          div.header-wrapper {
            display: flex;
            align-tems: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }

          div.header-wrapper > :global(.header) {
            margin-bottom: 0;
          }

          div.editor {
            margin: 16px 0;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Example;
