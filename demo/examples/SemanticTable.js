import _range from 'lodash/range';
import faker from 'faker/locale/en';
import { Button, Checkbox, Segment, Table } from 'semantic-ui-react';

const members = _range(0, 15).map(i => ({
  id: i,
  username: faker.internet.userName(),
  first: faker.name.firstName(),
  last: faker.name.lastName(),
}));

const scope = {
  members, Button, Checkbox, Segment, Table,
};

const code = `
withSelections((props) => {
  const {
      areAllIndeterminate, areAllSelected, areAnySelected, selectedCount, handleClearAll, handleSelect, handleSelectAll, isItemSelected,
    } = props;

  return (
    <div>
      <Segment textAlign="left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {!areAnySelected && <span>Select items in the table below</span>}
        <div style={{ visibility: areAnySelected ? 'visible' : 'hidden' }}>
          <span style={{marginRight: '8px'}}>{selectedCount} selected</span>
          <Button basic onClick={handleClearAll}>Clear</Button>
        </div>
        <div>
          <span>{members.length} Members</span>
        </div>
      </Segment>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Checkbox checked={areAllSelected(members)} indeterminate={areAllIndeterminate(members)} onChange={() => handleSelectAll(members)} />
            </Table.HeaderCell>
            <Table.HeaderCell>USERNAME</Table.HeaderCell>
            <Table.HeaderCell>FIRST</Table.HeaderCell>
            <Table.HeaderCell>LAST</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {members.map(member => (
            <Table.Row key={member.id}>
              <Table.Cell>
                <Checkbox checked={isItemSelected(member.id)} onChange={() => handleSelect(member.id)} />
              </Table.Cell>
              <Table.Cell>{member.username}</Table.Cell>
              <Table.Cell>{member.first}</Table.Cell>
              <Table.Cell>{member.last}</Table.Cell>
            </Table.Row>
        ))}
        </Table.Body>
      </Table>
    </div>
  );
});
`;

export default { code, scope };
