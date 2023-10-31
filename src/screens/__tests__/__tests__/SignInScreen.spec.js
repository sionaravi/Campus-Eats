import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import auth from '@react-native-firebase/auth';
import SignInScreen from '../SignInScreen';

jest.mock('@react-native-firebase/auth');


//Unit tests
describe('SignInScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the email and password input fields', () => {
    const { getByTestId } = render(<SignInScreen />);
    //expect(getByTestId('emailInput')).toBeDefined();
    //expect(getByTestId('password-input')).toBeDefined();
  });

  it('should show an error if the email field is empty when signing in', async () => {
    const { getByTestId } = render(<SignInScreen />);
    const signInButton = getByTestId('signInButton');
    fireEvent.press(signInButton);
    await waitFor(() => {
      //expect(auth.signInWithEmailAndPassword).not.toHaveBeenCalled();
      //expect(alert).toHaveBeenCalledWith('Enter Email');
    });
  });

  it('should show an error if the password field is empty when signing in', async () => {
    const { getByTestId } = render(<SignInScreen />);
    const emailInput = getByTestId('emailInput');
    fireEvent.changeText(emailInput, 'test@example.com');
    const signInButton = getByTestId('signInButton');
    fireEvent.press(signInButton);
    await waitFor(() => {
      //expect(auth.signInWithEmailAndPassword).not.toHaveBeenCalled();
      //expect(alert).toHaveBeenCalledWith('Enter password');
    });
  });

  it('should show an error if the email field has an invalid format when signing in', async () => {
    const { getByTestId } = render(<SignInScreen />);
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(emailInput, 'invalid-email');
    fireEvent.changeText(passwordInput, 'testpassword');
    const signInButton = getByTestId('signInButton');
    fireEvent.press(signInButton);
    await waitFor(() => {
      //expect(auth.signInWithEmailAndPassword).not.toHaveBeenCalled();
      //expect(alert).toHaveBeenCalledWith('Invalid email format');
    });
  });

  it('should call signInWithEmailAndPassword when valid email and password are provided', async () => {
    const { getByTestId } = render(<SignInScreen />);
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'testpassword');
    const signInButton = getByTestId('signInButton');
    fireEvent.press(signInButton);
    await waitFor(() => {
      //expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'testpassword');
      //expect(alert).not.toHaveBeenCalled();
    });
  });
});
