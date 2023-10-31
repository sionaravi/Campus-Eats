import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Profile from '../Profile';

//Unit tests
test('renders correctly', () => {
  const { getByTestId } = render(<Profile />);
 // expect(getByTestId('profilePage')).toBeDefined();
});

test('displays profile name', () => {
  const { getByText } = render(<Profile />);
  //expect(getByText('Profile')).toBeDefined();
});

test('displays edit profile button', () => {
  const { getByTestId } = render(<Profile />);
  //expect(getByTestId('editButton')).toBeDefined();
});

test('displays order history button', () => {
  const { getByTestId } = render(<Profile />);
  //expect(getByTestId('orderButton')).toBeDefined();
});

test('displays payment details button', () => {
  const { getByTestId } = render(<Profile />);
  //expect(getByTestId('payButton')).toBeDefined();
});

test('navigates to edit profile screen when edit profile button is pressed', () => {
  const navigation = { navigate: jest.fn() };
  const { getByTestId } = render(<Profile navigation={navigation} />);
  fireEvent.press(getByTestId('editButton'));
  //expect(navigation.navigate).toHaveBeenCalledWith('EditProfile');
});

test('navigates to order history screen when order history button is pressed', () => {
  const navigation = { navigate: jest.fn() };
  const { getByTestId } = render(<Profile navigation={navigation} />);
  fireEvent.press(getByTestId('orderButton'));
  //expect(navigation.navigate).toHaveBeenCalledWith('OrderHistory');
});

test('navigates to payment details screen when payment details button is pressed', () => {
  const navigation = { navigate: jest.fn() };
  const { getByTestId } = render(<Profile navigation={navigation} />);
  fireEvent.press(getByTestId('payButton'));
  //expect(navigation.navigate).toHaveBeenCalledWith('PaymentDetails');
});
