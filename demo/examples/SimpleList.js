import { List, Segment } from 'semantic-ui-react';

const scope = { List, Segment };

const code = `
withSelections((props) => {
  const { handleSelect, isItemSelected } = props;

  const items = [
    { id: 1, name: 'One'},
    { id: 2, name: 'Two'},
    { id: 3, name: 'Three'},
  ];

  return (
    <Segment inverted>
      <List selection inverted divided>
        {items.map(item => (
          <List.Item
            key={item.id}
            onClick={() => handleSelect(item.id)}
            active={isItemSelected(item.id)}
          >{item.name}
        </List.Item>
        ))}
      </List>
    </Segment>
  );
});
`;

export default { code, scope };
