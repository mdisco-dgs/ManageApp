import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ClienteDetailScreen({ route, navigation }) {
  const { clienteId } = route.params;

  // Simulazione cliente selezionato
  const cliente = {
    id: clienteId,
    nome: 'Mario Rossi',
    email: 'mario.rossi@email.com',
    scadenza: '05/07/2025',
    note: 'Ha chiesto un promemoria personalizzato',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{cliente.nome}</Text>
      <Text>Email: {cliente.email}</Text>
      <Text>Scadenza: {cliente.scadenza}</Text>
      <Text>Note: {cliente.note}</Text>

      <Button
        title="Apri chat"
        onPress={() => navigation.navigate('Messaggi', { clienteId: cliente.id })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
