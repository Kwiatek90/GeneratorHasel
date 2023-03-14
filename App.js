import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatePassword = () => {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(generatedPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generator haseł</Text>
      <Text style={styles.inputLabel}>Długość hasła</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        testID ="length-input"
        value={length.toString()}
        onChangeText={value => setLength(parseInt(value))}
      />
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Wielkie litery</Text>
        <TouchableOpacity
          style={[styles.toggleButton, uppercase ? styles.activeButton : null]}
          testID ="uppercase-button"
          onPress={() => setUppercase(!uppercase)}
        >
          <Text style={styles.buttonText}>TAK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Małe litery</Text>
        <TouchableOpacity
          style={[styles.toggleButton, lowercase ? styles.activeButton : null]}
          testID ="lowercase-button"
          onPress={() => setLowercase(!lowercase)}
        >
          <Text style={styles.buttonText} >TAK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Cyfry</Text>
        <TouchableOpacity
          style={[styles.toggleButton, numbers ? styles.activeButton : null]}
          testID ="numbers-button"
          onPress={() => setNumbers(!numbers)}
        >
          <Text style={styles.buttonText}>TAK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Symbole</Text>
        <TouchableOpacity
          style={[styles.toggleButton, symbols ? styles.activeButton : null]}
          testID ="symbols-button"
          onPress={() => setSymbols(!symbols)}
        >
          <Text style={styles.buttonText}>TAK</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.generateButton} onPress={generatePassword} testID="generate-button">
        <Text style={styles.buttonText}>Wygeneruj hasło</Text>
      </TouchableOpacity>
      {password ? <Text style={styles.generatedPassword} testID="generated-password">{password}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputLabel:{
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    height: 40,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  toggleLabel: {
    fontSize: 16,
  },
  toggleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  generatedPassword: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
    padding: 20,
  },
});