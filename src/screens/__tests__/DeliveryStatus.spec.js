import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DeliveryStatus from '../DeliveryStatus';
import Reciept from '../Reciept';
import ContactDriver from '../ContactDriver';
import Cancel from '../Cancel';


//Unit Test
describe('DeliveryStatus', () => {
  test('renders the "Your order should arrive in 30 minutes!" text', () => {
    const { getByText } = render(<DeliveryStatus />);
    const textElement = getByText('Your order should arrive in 30 minutes!');
    expect(textElement).toBeTruthy();
  });

  //Behavioral Test
  test('navigates to Reciept component when "Food was delivered" button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<DeliveryStatus navigation={navigation} />);
    const deliveredButton = getByTestId('deliveredButton');
    fireEvent.press(deliveredButton);
    expect(navigation.navigate).toHaveBeenCalledWith(Reciept);
  });

  //Behavioral Test
  test('navigates to ContactDriver component when "Contact Driver" button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<DeliveryStatus navigation={navigation} />);
    const contactButton = getByTestId('contactButton');
    fireEvent.press(contactButton);
    expect(navigation.navigate).toHaveBeenCalledWith(ContactDriver);
  });
  
  //Behavioral Test
  test('navigates to Cancel component when "Cancel" button is pressed', () => {
    const navigation = { navigate: jest.fn() };
    const { getByTestId } = render(<DeliveryStatus navigation={navigation} />);
    const cancelButton = getByTestId('cancelButton');
    fireEvent.press(cancelButton);
    expect(navigation.navigate).toHaveBeenCalledWith(Cancel);
  });
});
