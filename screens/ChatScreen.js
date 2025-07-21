import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Button } from 'react-native';

export default function ChatScreen({ route }) {
  const { clienteId } = route.params;
  const [messaggio, setMessaggio] = useState('');
  const [chat, setChat] = useState([
    { id: '1', testo: 'Ciao Mario, ti ricordo la scadenza di luglio.' },
    { id: '2', testo: 'Grazie Monica, lo segno subito!' },
  ]);

  const inviaMessaggio = () => {
    if (messaggio.trim() === '') return;
    const nuovoMessaggio = { id: Date.now().toString(), testo: messaggio };
    setChat([...chat, nuovoMessaggio]);
    setMessaggio('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bolla}>
            <Text>{item.testo}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Scrivi un messaggio..."
        value={messaggio}
        onChangeText={setMessaggio}
      />
      <Button title="Invia" onPress={inviaMessaggio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f2f2f2',
  },
  bolla: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
