import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import SignUpScreen from '../SignUpScreen';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Mock the createUserWithEmailAndPassword function

jest.mock('@react-native-firebase/auth');
jest.mock('@react-native-firebase/firestore');

//Unit tests
describe('SignUpScreen', () => {
  it('should call createUserWithEmailAndPassword when the user submits the form', async () => {
    const { getByTestId } = render(<SignUpScreen />);
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const confirmInput = getByTestId('confirmInput');

    const submitButton = getByTestId('submitButton');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.changeText(confirmInput, 'password');
    fireEvent.press(submitButton);

    //expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
     // 'test@example.com',
     // 'password'
    //);
  });
});
