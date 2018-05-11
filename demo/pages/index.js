import React from 'react';
import withSelections from 'react-item-select';

const items = [{
  id: 1, name: 'One',
}, {
  id: 2, name: 'Two',
}, {
  id: 3, name: 'Three',
}];

const Index = (props) => {
  const { handleSelect, isItemSelected } = props; // eslint-disable-line react/prop-types

  return (
    <div>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => handleSelect(item.id)}
            style={{ cursor: 'pointer', fontWeight: isItemSelected(item.id) ? 'bold' : 'normal' }}
          >{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withSelections(Index);
