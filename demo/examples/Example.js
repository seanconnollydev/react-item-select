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
            <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '16px 0',
            }}
            >
              <Header size="large" style={{ marginBottom: '0' }}>{title}</Header>
              <Button onClick={this.toggleEditor} size="tiny">
              Edit
              </Button>
            </div>
            <LivePreview />
          </Container>
          {showEditor && <LiveEditor />}
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
}

export default Example;
