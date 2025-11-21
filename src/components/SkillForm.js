import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SkillForm({ onAddSkill }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  function handleAdd() {
    if (!name.trim()) {
      return;
    }

    const newSkill = {
      id: Date.now().toString(),
      name: name.trim(),
      category: category.trim() || 'Não informado',
      level: level.trim() || 'Não informado',
      createdAt: new Date().toISOString(),
    };

    onAddSkill(newSkill);
    setName('');
    setCategory('');
    setLevel('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar nova skill</Text>

      <Text style={styles.label}>Nome da skill</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Python, Comunicação, IA Generativa..."
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Categoria (hard/soft skill)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Hard skill, Soft skill"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>Nível</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Iniciante, Intermediário, Avançado"
        value={level}
        onChangeText={setLevel}
      />

      <Button title="Adicionar Skill" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
