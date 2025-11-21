import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@skillspark_skills';

export async function saveSkills(skills) {
  try {
    const jsonValue = JSON.stringify(skills);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.log('Erro ao salvar skills:', error);
  }
}

export async function loadSkills() {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log('Erro ao carregar skills:', error);
    return [];
  }
}
