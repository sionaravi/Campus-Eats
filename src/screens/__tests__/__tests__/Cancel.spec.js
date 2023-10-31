import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Cancel from '../Cancel';

//behavioral test
describe('<Cancel />', () => {
  it('renders the cancel page with the correct text', () => {
    const { getByText } = render(<Cancel />);
    const title = getByText('Order Cancelled');
  });

  it('navigates to the CampusSideSelectionScreen on button press', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = render(<Cancel navigation={navigation} />);
    const button = getByText('Homepage');
    fireEvent.press(button);
  });
});
