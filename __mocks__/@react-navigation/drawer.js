const createDrawerNavigator = jest.fn(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  }));
  
  export default createDrawerNavigator;
  