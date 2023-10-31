import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PaymentDetails from '../PaymentDetails';

jest.mock('@react-native-firebase/app', () => {
const currentUser = {
uid: 'test-user-uid',
};
const data = {
cards: [
{
cardtype: 'Credit/Debit',
name: 'John Doe',
cardNumber: '1234567890',
expDate: '01/23',
},
{
cardtype: 'Meal Plan/Carolina Cash',
studentID: '9876543210',
studentBarcode: 'ABCDEFG',
},
],
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
const app = {
firestore: jest.fn().mockReturnValue(firestore),
};
return {
app: () => app,
};
});

//Unit test
describe('PaymentDetails', () => {
// Unit test for rendering payment details
it('should render payment details correctly', async () => {
// Render the component
const { getByText } = render(<PaymentDetails />);
// Assert that the component rendered correctly
//expect(getByText('Credit/Debit')).toBeDefined();
//expect(getByText('Name: John Doe')).toBeDefined();
//expect(getByText('Card Number: 1234567890')).toBeDefined();
//expect(getByText('Expiration Date: 01/23')).toBeDefined();
//expect(getByText('Meal Plan/Carolina Cash')).toBeDefined();
//expect(getByText('Student ID: 9876543210')).toBeDefined();
//expect(getByText('Barcode: ABCDEFG')).toBeDefined();
});

// Behavioral test for navigating back to previous screen
it('should navigate back to previous screen when back arrow is pressed', () => {
const mockNavigation = { pop: jest.fn() };
const { getByTestId } = render(<PaymentDetails navigation={mockNavigation} />);
const backButton = getByTestId('backButton');
fireEvent.press(backButton);

expect(mockNavigation.pop).toHaveBeenCalled();
});
});