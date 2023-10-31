export const TouchableOpacity = jest.fn().mockImplementation(({ children }) => children);
export const TouchableWithoutFeedback = jest.fn().mockImplementation(({ children }) => children);

export default {
  TouchableOpacity,
  TouchableWithoutFeedback,
};
