import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import Cart from '../Cart';

// Mock firebase.auth and firebase.firestore
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
    currentUser,
  };
  return {
    auth: () => auth,
    firestore: () => firestore,
  };
});

jest.mock('@react-native-firebase/auth', () => {
  const currentUser = {
    uid: 'test-user-uid',
  };
  return {
    currentUser,
  };
});

describe('Cart', () => {


//Unit Test  
test('renders checkout button', () => {
  const { getByText } = render(<Cart />);
  const checkoutButton = getByText(/checkout/i);
  //expect(checkoutButton).toBeTruthy();
});

//Behavioral test
test('pressing checkout button with empty cart shows alert', () => {
  const { getByText } = render(<Cart />);
  const checkoutButton = getByText(/checkout/i);
  act(() => {
    fireEvent.press(checkoutButton);
  });
  const alert = getByText(/your cart is empty/i);
  //expect(alert).toBeTruthy();
});
});