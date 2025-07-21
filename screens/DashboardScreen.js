import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const clientiMock = [
  { id: '1', nome: 'Mario Rossi', scadenza: '05/07/2025' },
  { id: '2', nome: 'Anna Bianchi', scadenza: '10/07/2025' },
  { id: '3', nome: 'Luigi Verdi', scadenza: '15/07/2025' },
];

export default function DashboardScreen({ navigation }) {
  const [clienti, setClienti] = useState([]);

  useEffect(() => {
    // Simula caricamento clienti
    setClienti(clientiMock);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Cliente', { clienteId: item.id })}
    >
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.scadenza}>Scadenza: {item.scadenza}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>I tuoi clienti</Text>
      <FlatList
        data={clienti}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
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
