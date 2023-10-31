const firestore = jest.fn(() => ({
    collection: jest.fn(() => ({
      add: jest.fn(),
      doc: jest.fn(() => ({
        set: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      })),
      get: jest.fn(() => ({
        docs: [],
      })),
    })),
  }));
  
  export default firestore;
  