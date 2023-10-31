const firebase = jest.genMockFromModule('@react-native-firebase/app');

firebase.auth = jest.fn(() => ({
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
}));

firebase.firestore = jest.fn(() => ({
  collection: jest.fn(() => ({
    doc: jest.fn(() => ({
      set: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  })),
}));

firebase.storage = jest.fn(() => ({
  ref: jest.fn(() => ({
    putFile: jest.fn(() => ({
      on: jest.fn(),
    })),
  })),
}));

export default firebase;
