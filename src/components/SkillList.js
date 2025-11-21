import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

export default function SkillList({ skills, onRemoveSkill }) {
  function renderItem({ item }) {
    return (
      <View style={styles.item}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDetail}>Categoria: {item.category}</Text>
          <Text style={styles.itemDetail}>Nível: {item.level}</Text>
        </View>
        <Button title="Remover" onPress={() => onRemoveSkill(item.id)} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas skills para o Futuro do Trabalho</Text>

      {skills.length === 0 ? (
        <Text style={styles.emptyText}>
          Nenhuma skill cadastrada ainda. Comece adicionando uma!
        </Text>
      ) : (
        <FlatList
          data={skills}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#666',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#e6f0ff',
  },
  itemTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: 13,
    color: '#333',
  },
});
