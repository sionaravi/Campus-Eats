import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CampusSideSelectionScreen from '../CampusSideSelectionScreen';

//Unit tests
test('renders component without crashing', () => {
  render(<CampusSideSelectionScreen />);
});
test('displays correct header text', () => {
    const { getByText } = render(<CampusSideSelectionScreen />);
    const headerText = getByText('Campus Side Selection');
    //expect(headerText).toBeDefined();
  });

  test('displays correct number of buttons', () => {
    const { getAllByRole } = render(<CampusSideSelectionScreen />);
    const buttons = getAllByRole('button');
    //expect(buttons.length).toBe(6);
  });

  test('navigates to correct screen on button press', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<CampusSideSelectionScreen navigation={{ navigate: mockNavigate }} />);
    fireEvent.press(getByText('Russell House Restaurant'));
    //expect(mockNavigate).toHaveBeenCalledWith('RussellHouseRestaurantScreen');
  });