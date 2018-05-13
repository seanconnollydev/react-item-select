import React from 'react';
import withSelections from 'react-item-select';
import { Button, Header, Icon } from 'semantic-ui-react';
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
  // eslint-disable-next-line react/prop-types
    const { code, scope, title } = this.props;
    const { showEditor } = this.state;

    return (
      <LiveProvider code={code} scope={Object.assign({}, scope, defaultScope)}>
        <Header size="large">{title}</Header>
        <LivePreview />
        <Button onClick={this.toggleEditor} icon labelPosition="right" size="tiny">
          Edit<Icon name="caret down" />
        </Button>
        {showEditor && <LiveEditor />}
        <LiveError />
      </LiveProvider>
    );
  }
}

export default Example;
