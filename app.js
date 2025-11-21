import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import SkillForm from './src/components/SkillForm';
import SkillList from './src/components/SkillList';
import { saveSkills, loadSkills } from './src/storage/SkillStorage';

export default function App() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar skills salvas ao abrir o app
  useEffect(() => {
    async function fetchData() {
      const storedSkills = await loadSkills();
      setSkills(storedSkills);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // Sempre que skills mudarem, salvar no AsyncStorage
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
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.appTitle}>SkillSpark</Text>
        <Text style={styles.subtitle}>
          Mapeie as habilidades que vão impulsionar o seu futuro no trabalho.
        </Text>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
            <Text>Carregando suas skills...</Text>
          </View>
        ) : (
          <>
            <SkillForm onAddSkill={handleAddSkill} />
            <SkillList skills={skills} onRemoveSkill={handleRemoveSkill} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  loadingContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});
