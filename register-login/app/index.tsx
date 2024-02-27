import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../styles/constants';

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: colors.cardBackground,
    fontSize: 24,
  },
  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default function Index() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function callApi() {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });
    const data = await response.json();
    console.log('response', data);
  }

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Name"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Password"
        value={password}
      />
      <Text style={styles.button} onPress={callApi}>
        Submit
      </Text>
      <Link style={styles.button} href="/register">
        Register
      </Link>
    </>
  );
}
