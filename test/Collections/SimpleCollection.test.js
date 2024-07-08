import SimpleCollection from "../../src/Collections/Collection";

describe('Test to class SimpleCollection', () => {
  const simple_collection = new SimpleCollection();
  const item1 = { item: 1 };
  const _undefined = void 0;

  it('should be defined', () => {
    expect(simple_collection).toBeDefined();
  });
  it('add new item in collection', () => {
    const response = simple_collection.set('item1', item1);
    expect(response).toBe(true);
  });
  it('size in collection is equal 1', () => {
    expect(simple_collection.size).toBe(1);
  });
  it(`get item key item1 = ${JSON.stringify(item1)}`, () => {
    const get_item = simple_collection.get('item1');
    expect(get_item).toEqual(item1);
  });
  it('add the same item again in key item1 so return is need it false', () => {
    const response = simple_collection.set('item1', item1);
    expect(response).toBe(false);
  });
  it('delete item in collection', () => {
    const response = simple_collection.delete('item1');
    expect(response).toBe(true);
  });
  it('size in collection is equal 0', () => {
    expect(simple_collection.size).toBe(0);
  });
});