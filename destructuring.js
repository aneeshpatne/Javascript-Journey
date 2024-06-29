const data = [
    {
      id: 1,
      name: 'Alice',
      details: {
        age: 30,
        address: {
          street: '123 Main St',
          city: 'Wonderland',
        },
      },
      hobbies: ['reading', 'gardening'],
    },
    {
      id: 2,
      name: 'Bob',
      details: {
        age: 25,
        address: {
          street: '456 Elm St',
          city: 'Builderland',
        },
      },
      hobbies: ['painting', 'cycling'],
    },
    {
      id: 3,
      name: 'Charlie',
      details: {
        age: 35,
        address: {
          street: '789 Oak St',
          city: 'Chocolate Factory',
        },
      },
      hobbies: ['swimming', 'cooking', { type: 'sports', name: 'basketball' }],
    },
    [
      {
        name: 'Extra Nested',
        value: 42,
      },
      'stringElement',
      [1, 2, 3, { deep: 'deepValue' }],
    ],
  ];
const [{id:id1},{id:id2}] = data;
id1
id2