// src/screens/__tests__/AddressScreen.spec.js

import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import AddressScreen from "../AddressScreen";

describe("AddressScreen", () => {
  it("should save address when save button is pressed", () => {
    // Arrange
    const saveAddressMock = jest.fn();
    const { getByTestId } = render(
      <AddressScreen saveAddress={saveAddressMock} />
    );

    const cardInput = getByTestId("card-input");
    const numberInput = getByTestId("number-input");
    const dateInput = getByTestId("date-input");
    const codeInput = getByTestId("code-input");

    // Act
    fireEvent.changeText(cardInput, "John Doe");
    console.log(`Street value: ${cardInput.props.value}`);
    fireEvent.changeText(numberInput, "1234 5678 9012 3456");
    console.log(`Town value: ${numberInput.props.value}`);
    fireEvent.changeText(dateInput, "01/2022");
    console.log(`State value: ${dateInput.props.value}`);
    fireEvent.changeText(codeInput, "123");
    console.log(`Zip code value: ${codeInput.props.value}`);
    fireEvent.press(getByTestId("save-button"));

    // Assert
    console.log(`saveAddressMock.mock.calls: ${JSON.stringify(saveAddressMock.mock.calls, null, 2)}`);
    
  });
});

