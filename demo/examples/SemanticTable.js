import _range from 'lodash/range';
import { Button, Checkbox, Segment, Table } from 'semantic-ui-react';

const scope = {
  _range, Button, Checkbox, Segment, Table,
};

const code = `
withSelections((props) => {
  const {
      areAllIndeterminate, areAllSelected, areAnySelected, selectedCount, handleClearAll, handleSelect, handleSelectAll, isItemSelected,
    } = props;

  const members = _range(0, 15).map(i => ({
    id: i,
    username: \`username_\${i}\`,
    first: \`first_\${i}\`,
    last: \`last_\${i}\`,
  }));

  return (
    <div>
      <Segment textAlign="left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ visibility: areAnySelected ? 'visible' : 'hidden' }}>
          <span>{selectedCount} selected</span>
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
