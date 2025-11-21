import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import SkillForm from './src/components/SkillForm';
import SkillList from './src/components/SkillList';
import SkillsSummary from './src/components/SkillsSummary';
import { saveSkills, loadSkills } from './src/storage/SkillStorage';

export default function App() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carrega skills salvas no AsyncStorage ao abrir o app
  useEffect(() => {
    async function fetchData() {
      const storedSkills = await loadSkills();
      setSkills(storedSkills);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // Salva sempre que a lista de skills mudar
  useEffect(() => {
    if (!isLoading) {
      saveSkills(skills);
    }
  }, [skills, isLoading]);

  function handleAddSkill(newSkill) {
    setSkills((prev) => [newSkill, ...prev]);
  }

  function handleRemoveSkill(id) {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="sparkles" size={28} color="#FFD369" />
          <View>
            <Text style={styles.appTitle}>SkillSpark</Text>
            <Text style={styles.appSubtitle}>Futurize suas habilidades ✨</Text>
          </View>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{skills.length}</Text>
          <Text style={styles.badgeLabel}>skills</Text>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text style={styles.loadingText}>Carregando suas skills...</Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <SkillForm onAddSkill={handleAddSkill} />
            <SkillList skills={skills} onRemoveSkill={handleRemoveSkill} />
            <SkillsSummary skills={skills} />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111827', // fundo da área de status + header
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: '#111827',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  appSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  badgeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBBF24',
    lineHeight: 18,
  },
  badgeLabel: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  container: {
    flex: 1,
    backgroundColor: '#020617',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  loadingContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loadingText: {
    color: '#E5E7EB',
    marginTop: 12,
  },
});
