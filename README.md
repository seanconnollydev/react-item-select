# react-item-select
A React component that takes away the pain of managing item selection state in tables and lists

https://react-item-select.now.sh/ (Demo)

## Install
```
npm i --save react-item-select
```

## Usage

### Basic
```
import withSelections from 'react-item-select';

const MyBasicList = ({ handleSelect, isItemSelected }) => (
  <div>
    <div>
      <input name="first" type="checkbox" checked={isItemSelected(1)} onChange={handleSelect(1)} />
    </div>
    <div>
      <input name="first" type="checkbox" checked={isItemSelected(2)} onChange={handleSelect(2)} />
    </div>
</div>

export default withSelections(MyBasicList);
```

### Table
```
import withSelections from 'react-item-select';

const items = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}];

const MyTable = ({ handleSelect, isItemSelected }) => (
  <table>
    <tbody>
      {items.map(item => (
        <tr>
          <td>
            <input name="first" type="checkbox" checked={isItemSelected(item.id)} onChange={handleSelect(item.id)} />
          </td>
          <td>
            {item.name}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default withSelections(MyTable);
```

### Semantic UI React Table
```
import withSelections from 'react-item-select';
import { Table } from 'semantic-ui-react';

const items = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}];

const MyTable = ({ handleSelect, isItemSelected }) => (
  <Table>
    <Table.Body>
      {items.map(item => (
        <Table.Row>
          <Table.Cell>
            <Checkbox checked={isItemSelected(item.id)} onChange={handleSelect(item.id)} />
          </Table.Cell>
          <Table.Cell>
            {item.name}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default withSelections(MyTable);
```

## Options
| Property        | Description           | Type  |
| ------------- |-------------| -----|
| areAllIndeterminate(items) | `true` if at least one item is selected not all `items` are selected | function
| areAllSelected(items) | `true` if all `items` are selected, otherwise `false`      |    function |
| areAnySelected      | `true` if at least one item in the list is selected, otherwise `false` | boolean
| handleClearAll()      | Deselects all items | function
| handleSelect(id) | Toggles an item (e.g. when a user clicks a checkbox)      |    function |
| handleSelectAll(items) | Toggles all `items`      |    function |
| isItemSelected(item.id) | `true` if the `item` is selected, otherwise `false`      |    function |
| selectedCount      | The number of items selected | number
| selections | Keyed object where the key is a specified `id` and the value is `true` if the item is in the list      |    object |
