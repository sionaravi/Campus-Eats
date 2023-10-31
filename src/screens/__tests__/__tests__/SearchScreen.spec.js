import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchScreen from '../SearchScreen';

describe('SearchScreen', () => {
  it('renders the search bar', () => {
    const { getByPlaceholderText } = render(<SearchScreen />);
    const searchInput = getByPlaceholderText('What are you looking for?');
    expect(searchInput).toBeTruthy();
  });

  it('updates the search query when typing', () => {
    const { getByPlaceholderText } = render(<SearchScreen />);
    const searchInput = getByPlaceholderText('What are you looking for?');
    fireEvent.changeText(searchInput, 'Chick-Fil-A');
    expect(searchInput.props.value).toBe('Chick-Fil-A');
  });

  it('displays the filtered restaurant list based on the search query', () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<SearchScreen />);
    const searchInput = getByPlaceholderText('What are you looking for?');
    fireEvent.changeText(searchInput, 'Chick-Fil-A');
    expect(getByText('Chick-Fil-A')).toBeTruthy();
    expect(queryByText('Einstein Bros. Bagels')).toBeFalsy();
  });
});
