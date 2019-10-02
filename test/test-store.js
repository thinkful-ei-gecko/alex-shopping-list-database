const testStore = {
  testList: [
    {
      id: 1,
      name: 'Test Item 1',
      price: '5.00',
      date_added: new Date('2019-09-02T05:00:00.000Z'),
      checked: false,
      category: 'Main'
    },
    {
      id: 2,
      name: 'Test Item 2',
      price: '10.55',
      date_added: new Date('2019-10-02T05:00:00.000Z'),
      checked: true,
      category: 'Lunch'
    },
    {
      id: 3,
      name: 'Test Item 3',
      price: '2.00',
      date_added: new Date('2019-10-02T05:00:00.000Z'),
      checked: false,
      category: 'Breakfast'
    }
  ]
};

module.exports = testStore;