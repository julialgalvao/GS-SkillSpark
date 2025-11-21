import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SkillForm({ onAddSkill }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');      // Hard / Soft
  const [level, setLevel] = useState('');           // Nível
  const [priority, setPriority] = useState('');     // Prioridade
  const [resourceLink, setResourceLink] = useState(''); // Link opcional
  const [error, setError] = useState('');

  function handleAdd() {
    if (!name.trim()) {
      setError('Digite pelo menos o nome da skill 😉');
      return;
    }

    const newSkill = {
      id: Date.now().toString(),
      name: name.trim(),
      category: category.trim() || 'Não informado',
      level: level.trim() || 'Não informado',
      priority: priority.trim() || 'Não definida',
      resource: resourceLink.trim() || null,
      createdAt: new Date().toISOString(),
    };

    onAddSkill(newSkill);

    // limpa campos
    setName('');
    setCategory('');
    setLevel('');
    setPriority('');
    setResourceLink('');
    setError('');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.wrapper}
    >
      <View style={styles.card}>
        {/* TÍTULO DO CARD */}
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleRow}>
            <Ionicons name="flame" size={22} color="#F97316" />
            <Text style={styles.cardTitle}>Adicionar nova skill</Text>
          </View>
          <Text style={styles.cardSubtitle}>
            Foque em skills que vão te ajudar no futuro do trabalho.
          </Text>
        </View>

        {/* NOME DA SKILL */}
        <View style={styles.field}>
          <Text style={styles.label}>Nome da skill</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: Python, Comunicação, IA Generativa..."
            placeholderTextColor="#9CA3AF"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* CATEGORIA + NÍVEL */}
        <View style={styles.fieldRow}>
          <View style={[styles.field, styles.fieldHalf]}>
            <Text style={styles.label}>Categoria</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.: Hard skill / Soft skill"
              placeholderTextColor="#9CA3AF"
              value={category}
              onChangeText={setCategory}
            />
          </View>

          <View style={[styles.field, styles.fieldHalfLast]}>
            <Text style={styles.label}>Nível</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.: Iniciante, Intermediário, Avançado"
              placeholderTextColor="#9CA3AF"
              value={level}
              onChangeText={setLevel}
            />
          </View>
        </View>

        {/* PRIORIDADE */}
        <View style={styles.field}>
          <Text style={styles.label}>Prioridade de aprendizado (opcional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: Alta, Média, Baixa"
            placeholderTextColor="#9CA3AF"
            value={priority}
            onChangeText={setPriority}
          />
        </View>

        {/* LINK OPCIONAL */}
        <View style={styles.field}>
          <Text style={styles.label}>Link de estudo (opcional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: https://youtu.be/..., curso, artigo..."
            placeholderTextColor="#9CA3AF"
            value={resourceLink}
            onChangeText={setResourceLink}
            autoCapitalize="none"
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Ionicons name="add-circle-outline" size={20} color="#0F172A" />
          <Text style={styles.buttonText}>Adicionar skill</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#0B1120',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  cardHeader: {
    marginBottom: 12,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E5E7EB',
    marginLeft: 8,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  field: {
    marginBottom: 10,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldHalf: {
    flex: 1,
    marginRight: 6,
  },
  fieldHalfLast: {
    flex: 1,
    marginLeft: 6,
  },
  label: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#020617',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#1F2937',
    color: '#F9FAFB',
    fontSize: 13,
  },
  errorText: {
    color: '#F97373',
    fontSize: 12,
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#FACC15',
    borderRadius: 999,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  buttonText: {
    fontWeight: '600',
    color: '#0F172A',
    fontSize: 14,
  },
});
