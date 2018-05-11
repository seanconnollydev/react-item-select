import React from 'react';
import { mount } from 'enzyme';
import withSelections from '../src/withSelections';

describe('withSelections defaults', () => {
  let wrapper;
  let BaseComponent;
  let WrappedComponent;

  beforeEach(() => {
    BaseComponent = () => (<div />);
    WrappedComponent = withSelections(BaseComponent);
    wrapper = mount(<WrappedComponent />);
  });

  test('selectedCount is 0', () => {
    expect(wrapper.find(BaseComponent).props().selectedCount).toEqual(0);
  });

  test('areAnySelected is false', () => {
    expect(wrapper.find(BaseComponent).props().areAnySelected).toBe(false);
  });

  test('selections is an empty object', () => {
    expect(wrapper.find(BaseComponent).props().selections).toEqual({});
  });
});

describe('withSelections handleSelect', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  let wrapper;
  let BaseComponent;
  let WrappedComponent;

  beforeEach(() => {
    BaseComponent = () => <div />;
    WrappedComponent = withSelections(BaseComponent);
    wrapper = mount(<WrappedComponent />);
    wrapper.find(BaseComponent).props().handleSelect(1);
    wrapper.update();
  });

  test('selectedCount is 1', () => {
    expect(wrapper.find(BaseComponent).props().selectedCount).toEqual(1);
  });

  test('areAnySelected is true', () => {
    expect(wrapper.find(BaseComponent).props().areAnySelected).toBe(true);
  });

  test('areAllSelected is false', () => {
    expect(wrapper.find(BaseComponent).props().areAllSelected(items)).toBe(false);
  });

  test('areAllIndeterminate is true', () => {
    expect(wrapper.find(BaseComponent).props().areAllIndeterminate(items)).toBe(true);
  });

  test('isItemSelected returns true for the selected item', () => {
    expect(wrapper.find(BaseComponent).props().isItemSelected(1)).toBe(true);
  });

  test('isItemSelected returns false for other items', () => {
    expect(wrapper.find(BaseComponent).props().isItemSelected(2)).toBe(false);
  });

  test('deselects when called again', () => {
    wrapper.find(BaseComponent).props().handleSelect(1);
    wrapper.update();

    expect(wrapper.find(BaseComponent).props().isItemSelected(1)).toBe(false);
  });
});

describe('withSelections handleSelectAll', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  let wrapper;
  let BaseComponent;
  let WrappedComponent;

  beforeEach(() => {
    BaseComponent = () => <div />;
    WrappedComponent = withSelections(BaseComponent);
    wrapper = mount(<WrappedComponent />);
    wrapper.find(BaseComponent).props().handleSelectAll(items);
    wrapper.update();
  });

  test('selectedCount is 3', () => {
    expect(wrapper.find(BaseComponent).props().selectedCount).toEqual(3);
  });

  test('areAnySelected is true', () => {
    expect(wrapper.find(BaseComponent).props().areAnySelected).toBe(true);
  });

  test('areAllSelected is true', () => {
    expect(wrapper.find(BaseComponent).props().areAllSelected(items)).toBe(true);
  });

  test('areAllIndeterminate is false', () => {
    expect(wrapper.find(BaseComponent).props().areAllIndeterminate(items)).toBe(false);
  });

  test('isItemSelected returns true for all items', () => {
    items.forEach((item) => {
      expect(wrapper.find(BaseComponent).props().isItemSelected(item.id)).toBe(true);
    });
  });

  test('deselects all when called again', () => {
    wrapper.find(BaseComponent).props().handleSelectAll(items);
    wrapper.update();

    expect(wrapper.find(BaseComponent).props().areAllSelected(items)).toBe(false);
  });
});

describe('withSelections handleClearAll', () => {
  const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  let wrapper;
  let BaseComponent;
  let WrappedComponent;

  beforeEach(() => {
    BaseComponent = () => <div />;
    WrappedComponent = withSelections(BaseComponent);
    wrapper = mount(<WrappedComponent />);
    wrapper.find(BaseComponent).props().handleSelectAll(items);
    wrapper.find(BaseComponent).props().handleClearAll();
    wrapper.update();
  });

  test('selectedCount is 0', () => {
    expect(wrapper.find(BaseComponent).props().selectedCount).toEqual(0);
  });

  test('areAnySelected is false', () => {
    expect(wrapper.find(BaseComponent).props().areAnySelected).toBe(false);
  });

  test('areAllSelected is false', () => {
    expect(wrapper.find(BaseComponent).props().areAllSelected(items)).toBe(false);
  });

  test('areAllIndeterminate is false', () => {
    expect(wrapper.find(BaseComponent).props().areAllIndeterminate(items)).toBe(false);
  });

  test('isItemSelected returns false for all items', () => {
    items.forEach((item) => {
      expect(wrapper.find(BaseComponent).props().isItemSelected(item.id)).toBe(false);
    });
  });
});
