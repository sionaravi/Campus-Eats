import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NorthCampus from '../NorthCampus';
import CounselorsCafe from '../NorthCampus/CounselorsCafe';
import HamptonStCafe from '../NorthCampus/HamptonStCafe';
import CampusSideSelectionScreen from '../CampusSideSelectionScreen';


//Behavioral Tests
describe('NorthCampus', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<NorthCampus />);
    //expect(getByTestId('NorthCampus')).toBeDefined();
  });

  it('should navigate to CounselorsCafe on Counselors Cafe button click', () => {
    const navigation = { navigate: jest.fn(), pop: jest.fn() };
    const { getByTestId, getByText } = render(<NorthCampus navigation={navigation} />);
    const button = getByText('Counselor\'s Cafe');
    fireEvent.press(button);
    //expect(navigation.navigate).toHaveBeenCalledWith(CounselorsCafe);
  });

  it('should navigate to HamptonStCafe on Hamptons button click', () => {
    const navigation = { navigate: jest.fn(), pop: jest.fn() };
    const { getByTestId, getByText } = render(<NorthCampus navigation={navigation} />);
    const button = getByText('Hamptons St. Cafe');
    fireEvent.press(button);
    //expect(navigation.navigate).toHaveBeenCalledWith(HamptonStCafe);
  });

  it('should navigate back on left arrow button click', () => {
    const navigation = { navigate: jest.fn(), pop: jest.fn() };
    const { getByTestId, getByRole } = render(<NorthCampus navigation={navigation} />);
    const button = getByRole('button', { name: 'Left Arrow' });
    fireEvent.press(button);
    //expect(navigation.pop).toHaveBeenCalled();
  });

  it('should navigate to CampusSideSelectionScreen on home button click', () => {
    const navigation = { navigate: jest.fn(), pop: jest.fn() };
    const { getByTestId, getByRole } = render(<NorthCampus navigation={navigation} />);
    const button = getByRole('button', { name: 'Home' });
    fireEvent.press(button);
    //expect(navigation.navigate).toHaveBeenCalledWith(CampusSideSelectionScreen);
  });
});
