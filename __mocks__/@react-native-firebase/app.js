export default {
    auth: jest.fn(() => ({
      currentUser: {
        uid: 'test-user-uid',
      },
    })),
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve({ exists: true, data: () => ({ name: 'Test User' }) })),
        })),
      })),
    })),
  };
  