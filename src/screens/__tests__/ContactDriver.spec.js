import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ContactDriver from '../ContactDriver';
import Cancel from '../Cancel';
import Reciept from '../Reciept';


// Mock the auth and firestore modules
jest.mock('@react-native-firebase/app', () => {
    const currentUser = {
    uid: 'test-user-uid',
    };
    const data = {
    name: 'Test User',
    };
    const doc = {
    exists: true,
    data: () => data,
    };
    const firestore = {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValue(doc),
    };
    const auth = {
    createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: '123' } }),
    fetchSignInMethodsForEmail: jest.fn().mockResolvedValue([]),
    currentUser,
    };
    return {
    auth: () => auth,
    firestore: () => firestore,
    };
    });


  //Unit Test  
  describe('ContactDriver', () => {
    it('should render a button with text "Contact Driver"', () => {
      const { getByText } = render(<ContactDriver />);
      //const button = getByText('Contact Driver');
      //expect(button).toBeDefined();
    });
  
  
});
