import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SkillsSummary({ skills }) {
  if (skills.length === 0) {
    return null;
  }

  const total = skills.length;
  const hard = skills.filter((s) =>
    s.category.toLowerCase().includes('hard')
  ).length;
  const soft = skills.filter((s) =>
    s.category.toLowerCase().includes('soft')
  ).length;

  const avancado = skills.filter((s) =>
    s.level.toLowerCase().includes('avanç') ||
    s.level.toLowerCase().includes('advanced')
  ).length;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Resumo das suas skills</Text>
      <View style={styles.row}>
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{total}</Text>
          <Text style={styles.badgeLabel}>total</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{hard}</Text>
          <Text style={styles.badgeLabel}>hard</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{soft}</Text>
          <Text style={styles.badgeLabel}>soft</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{avancado}</Text>
          <Text style={styles.badgeLabel}>avançadas</Text>
        </View>
      </View>
      <Text style={styles.footerText}>
        Continue adicionando skills que conectam seus interesses com as
        demandas do futuro do trabalho. 🎯
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#020617',
    borderRadius: 18,
    padding: 14,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  badge: {
    alignItems: 'center',
    flex: 1,
  },
  badgeNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FACC15',
  },
  badgeLabel: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
});
