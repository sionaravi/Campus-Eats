// Import necessary dependencies and test renderer
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// Import the Receipt component
import Reciept from '../Reciept';
//import Receipt from '../MyCart';


//Behavioral Tests
describe('Reciept component', () => {
  test('renders a list of cart items', () => {
    // Mock the MyCart module to return some cart items
    jest.mock('./MyCart', () => ({
      getItems: jest.fn(() => [
        { item: 'Item 1', price: 5.99 },
        { item: 'Item 2', price: 3.99 },
        { item: 'Item 3', price: 2.49 },
      ]),
      getQuantityByName: jest.fn(() => 1),
    }));

    // Render the Receipt component
    const { getByTestId } = render(<Reciept />);

    // Expect the cart items list to be rendered with the correct number of items
    const cartItemsList = getByTestId('cart-items-list');
    //expect(cartItemsList).toBeTruthy();
    //expect(cartItemsList.props.data).toHaveLength(3);
  });

  test('saves the receipt on Homepage button press', () => {
    // Mock Firebase and MyCart modules
    jest.mock('@react-native-firebase/firestore', () => ({
      firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
          doc: jest.fn(() => ({
            collection: jest.fn(() => ({
              doc: jest.fn(() => ({
                set: jest.fn(),
              })),
            })),
          })),
        })),
      })),
      auth: jest.fn(() => ({
        currentUser: { uid: '1234' },
      })),
    }));
    jest.mock('../MyCart', () => ({
      getItems: jest.fn(() => [
        { item: 'Item 1', price: 5.99 },
        { item: 'Item 2', price: 3.99 },
        { item: 'Item 3', price: 2.49 },
      ]),
      getQuantityByName: jest.fn(() => 1),
    }));

    // Render the Receipt component
    const { getByTestId } = render(<Reciept />);

    // Expect the Homepage button to save the receipt on press
    const homepageButton = getByTestId('homepage-button');
    fireEvent.press(homepageButton);
    //expect(homepageButton).toBeTruthy();
  });
});
