import React from "react";
import { interpolate } from "react-native-reanimated";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

import SignInScreen from "../SignInScreen";

it("renders default elements", () =>  {
    const {getAllByText , getPlaceholderText} = render (<SignInScreen />);

});

it("shows invalid user name error message", () => {
    const { getByTestId, getByText, queryAllByText } = render(<SignInScreen />);
    fireEvent.changeText(getByTestId("SignInScreen.password"), "asdf");
    fireEvent.press(getByTestId("SignInScreen.button"));
    getByText("Invalid username.");
    expect(queryAllByText("Invalid password.").length).toBe(0);
    
});