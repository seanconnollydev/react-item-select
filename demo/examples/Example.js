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
      <div>
        <LiveProvider code={code} scope={Object.assign({}, scope, defaultScope)}>
          <Container textAlign="center">
            <div className="header-container">
              <Header size="large">{title}</Header>
              <Button onClick={this.toggleEditor} size="tiny">
              Edit
              </Button>
            </div>
            <LivePreview />
          </Container>
          {showEditor && <LiveEditor />}
          <LiveError />
        </LiveProvider>
        <style jsx>{`
          div.header-container {
            display: flex;
            align-tems: center;
            justify-content: space-between;
            margin: 16px 0;
          }

          div.header-container > :global(.header) {
            margin-bottom: 0;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Example;
