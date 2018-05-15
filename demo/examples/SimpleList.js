import { List } from 'semantic-ui-react';

const scope = { List };

const code = `
withSelections((props) => {
  const { handleSelect, isItemSelected } = props;

  const items = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}];

  return (
    <div>
      <List selection>
        {items.map(item => (
          <List.Item
            key={item.id}
            onClick={() => handleSelect(item.id)}
            active={isItemSelected(item.id)}
          >{item.name}
        </List.Item>
        ))}
      </List>
    </div>
  );
});
`;

export default { code, scope };
