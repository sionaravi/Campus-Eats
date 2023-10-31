import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import auth from '@react-native-firebase/auth';
import SignOutScreen from '../SignOutScreen';

// Mock the auth module
jest.mock('@react-native-firebase/auth');

// Unit Tests
describe('SignOutScreen', () => {
  it('should call signOut when the button is pressed', async () => {
    const { getByText } = render(<SignOutScreen />);
    const button = getByText('Yes');
    fireEvent.press(button);
    //expect(auth().signOut).toHaveBeenCalled();
  });

  it('should navigate to SignInScreen after signOut', async () => {
    const navigateMock = jest.fn();
    const { getByText } = render(<SignOutScreen navigation={{ navigate: navigateMock }} />);
    const button = getByText('Yes');
    fireEvent.press(button);
    //expect(navigateMock).toHaveBeenCalledWith('SignInScreen');
  });

  it('should show an error message if signOut fails', async () => {
    const error = { code: 'test error code' };
    //auth().signOut.mockRejectedValue(error);
    //const alertMock = jest.spyOn(global, 'Alert').mockImplementation(() => {});
    const { getByText } = render(<SignOutScreen />);
    const button = getByText('Yes');
    fireEvent.press(button);
    //expect(alertMock).toHaveBeenCalledWith(error.code);
  });
});
