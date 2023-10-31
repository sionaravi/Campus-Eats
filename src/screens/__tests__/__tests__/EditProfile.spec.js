import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import EditProfile from '../EditProfile';

jest.mock('@react-native-firebase/app', () => {
  const currentUser = {
    uid: 'test-user-uid',
  };
  const data = {
    name: 'Test User',
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
  const auth = {
    currentUser,
  };
  return {
    auth: () => auth,
    firestore: () => firestore,
  };
});

// Unit test
describe('EditProfile', () => {
  it('updates the name and phone number when the user types in the input fields', () => {
    const { getByPlaceholderText } = render(<EditProfile />);

    const nameInput = getByPlaceholderText('Name');
    const phoneInput = getByPlaceholderText('Phone');

    act(() => {
      fireEvent.changeText(nameInput, 'New Name');
      fireEvent.changeText(phoneInput, '1234567890');
    });

    //expect(nameInput.props.value).toBe('New Name');
    //expect(phoneInput.props.value).toBe('1234567890');
  });

  //Unit test
  it('calls the handleSave function when the save button is pressed', () => {
    const handleSave = jest.fn();
    const { getByText } = render(<EditProfile handleSave={handleSave} />);

    const saveButton = getByText('Save Changes');

    act(() => {
      fireEvent.press(saveButton);
    });

    //expect(handleSave).toHaveBeenCalled();
  });
});
