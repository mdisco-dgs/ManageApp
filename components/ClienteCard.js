import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ClienteCard({ cliente, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.nome}>{cliente.nome}</Text>
      <Text style={styles.scadenza}>Scadenza: {cliente.scadenza}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    elevation: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scadenza: {
    fontSize: 14,
    color: '#666',
  },
});
