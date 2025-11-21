import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SkillList({ skills, onRemoveSkill }) {
  function handleOpenLink(resource) {
    if (!resource) return;

    let url = resource.trim();

    // se a pessoa não colocou http, adiciona
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    Linking.openURL(url).catch(() => {
      // se der erro, só ignora (pra não quebrar o app)
    });
  }

  function renderItem({ item }) {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {item.name?.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemMeta}>
              {item.category} · {item.level}
            </Text>

            {item.priority && (
              <Text style={styles.itemMetaSecondary}>
                Prioridade: {item.priority}
              </Text>
            )}

            {item.resource && (
              <TouchableOpacity
                onPress={() => handleOpenLink(item.resource)}
              >
                <Text
                  style={styles.linkText}
                  numberOfLines={1}
                >
                  <Ionicons name="link-outline" size={12} /> {item.resource}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onRemoveSkill(item.id)}
        >
          <Ionicons name="trash-outline" size={18} color="#FCA5A5" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas skills para o futuro</Text>

      {skills.length === 0 ? (
        <Text style={styles.emptyText}>
          Nenhuma skill cadastrada ainda. Comece adicionando algo que você quer
          desenvolver para o futuro do trabalho 🚀
        </Text>
      ) : (
        <FlatList
          data={skills}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#020617',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#1F2937',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 999,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#F9FAFB',
    fontWeight: '700',
  },
  textBlock: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  itemMeta: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  itemMetaSecondary: {
    fontSize: 11,
    color: '#E5E7EB',
    marginTop: 2,
  },
  linkText: {
    fontSize: 11,
    color: '#60A5FA',
    marginTop: 4,
  },
  deleteButton: {
    padding: 6,
  },
});
