import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
  it('Test sprawdza czy komponent App jest renderowany poprawnie', () => {
    render(<App />);
  });

  it('Test sprawdz czy wartość domyślna długości hasła to 8', () => {
    const { getByTestId } = render(<App />);
    const lengthInput = getByTestId('length-input');
    expect(lengthInput.props.value).toBe('10');
  });

  it('Test sprawdzający, czy generowanie hasła działa poprawnie', () => {
    const { getByTestId } = render(<App />);
    const generateButton = getByTestId('generate-button');
    fireEvent.press(generateButton);
    const generatedPassword = getByTestId('generated-password');
    expect(generatedPassword.props.children).not.toBe('');
  });

  it('Testowanie wyłączenia wszystkich opcji generowania hasła i sprawdzenie, czy przycisk "Wygeneruj hasło" nie działa', () => {
    const component = render(<App />);
    const uppercaseButton = component.getByTestId('uppercase-button');
    const lowercaseButton = component.getByTestId('lowercase-button');
    const numbersButton = component.getByTestId('numbers-button');
    const symbolsButton = component.getByTestId('symbols-button');
    const generateButton = component.getByTestId('generate-button');
  
    fireEvent.press(uppercaseButton);
    fireEvent.press(lowercaseButton);
    fireEvent.press(numbersButton);
    fireEvent.press(symbolsButton);
    fireEvent.press(generateButton);
  
    expect(component.queryByTestId('generated-password')).toBeNull();
  });

  it('Testowanie, czy wygenerowane hasło ma właściwą długość', () => {
    const component = render(<App />);
    const generateButton = component.getByTestId('generate-button');
  
    fireEvent.press(generateButton);
  
    const passwordLength = component.getByTestId('generated-password').props.children.length;
  
    expect(passwordLength).toBe(10); 
  });
});












