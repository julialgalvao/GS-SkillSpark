import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <View style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerIconWrapper}>
            <Ionicons name="compass-outline" size={26} color="#FACC15" />
          </View>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.title}>Explorar o futuro do trabalho</Text>
            <Text style={styles.subtitle}>
              Entenda como o SkillSpark te ajuda a se preparar para as próximas oportunidades.
            </Text>
          </View>
        </View>

        {/* COMO O SKILLSPARK AJUDA */}
        <View style={[styles.card, styles.highlightCard]}>
          <Text style={styles.sectionLabel}>Como o SkillSpark pode te ajudar</Text>
          <Text style={styles.cardTitle}>Seu painel de habilidades 🚀</Text>
          <Text style={styles.cardText}>
            O SkillSpark funciona como um mapa da sua evolução profissional. Você registra
            as skills que está desenvolvendo, define prioridades e guarda links para continuar
            estudando no futuro.
          </Text>
          <Text style={styles.cardListItem}>• Visualizar suas habilidades em um só lugar</Text>
          <Text style={styles.cardListItem}>• Equilibrar hard e soft skills</Text>
          <Text style={styles.cardListItem}>• Organizar o que é prioridade agora</Text>
          <Text style={styles.cardListItem}>• Ter uma lista de conteúdos para revisar depois</Text>
          <Text style={styles.cardText}>
            Assim, cada skill cadastrada é um passo consciente em direção ao futuro do trabalho
            que você quer construir.
          </Text>
        </View>

        {/* TENDÊNCIAS */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Tendências</Text>
          <Text style={styles.cardTitle}>1. Automação & IA como parceiras 🤖</Text>
          <Text style={styles.cardText}>
            A automação e a inteligência artificial vão assumir tarefas repetitivas,
            mas abrem espaço para trabalhos mais criativos, analíticos e humanos.
          </Text>
          <Text style={styles.cardTagTitle}>Sugestões de skills técnicas:</Text>
          <Text style={styles.cardTag}>
            • Lógica de programação{'\n'}
            • Fundamentos de IA e machine learning{'\n'}
            • Análise de dados (Excel, SQL, Power BI){'\n'}
            • Automatização de processos (RPA, scripts)
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>2. Pessoas continuam no centro ✨</Text>
          <Text style={styles.cardText}>
            Em ambientes cheios de tecnologia, quem sabe lidar com gente se destaca.
            Colaboração, comunicação e empatia viram diferenciais reais.
          </Text>
          <Text style={styles.cardTagTitle}>Sugestões de soft skills:</Text>
          <Text style={styles.cardTag}>
            • Comunicação clara e objetiva{'\n'}
            • Trabalho em equipe{'\n'}
            • Liderança e influência{'\n'}
            • Inteligência emocional{'\n'}
            • Gestão de conflitos
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>3. Aprendizado contínuo 📚</Text>
          <Text style={styles.cardText}>
            Carreiras lineares estão dando lugar a trajetórias cheias de
            recomeços, mudanças de área e novos aprendizados.
          </Text>
          <Text style={styles.cardTagTitle}>Skills ligadas a lifelong learning:</Text>
          <Text style={styles.cardTag}>
            • Autodisciplina para estudar{'\n'}
            • Organização e gestão do tempo{'\n'}
            • Curiosidade e mentalidade de crescimento{'\n'}
            • Capacidade de aprender coisas novas rapidamente
          </Text>
        </View>

        {/* TRILHAS */}
        <View style={styles.card}>
          <Text style={styles.sectionLabel}>Sugestões de trilhas</Text>
          <Text style={styles.cardTitle}>Tecnologia & Dados 💻</Text>
          <Text style={styles.cardText}>
            Para quem quer se aproximar de tecnologia, mesmo não sendo dev full-time,
            ter noção de dados e ferramentas digitais é um baita diferencial.
          </Text>
          <Text style={styles.cardTagTitle}>Skills para adicionar no SkillSpark:</Text>
          <Text style={styles.cardTag}>
            • Fundamentos de programação (Python, JavaScript){'\n'}
            • Banco de dados básico (SQL){'\n'}
            • Visualização de dados (Power BI, Tableau){'\n'}
            • Noções de segurança da informação
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Pessoas & Liderança 👥</Text>
          <Text style={styles.cardText}>
            Mesmo em cargos mais técnicos, quem sabe comunicar, negociar e liderar
            projetos ganha espaço mais rápido.
          </Text>
          <Text style={styles.cardTagTitle}>Skills para adicionar:</Text>
          <Text style={styles.cardTag}>
            • Comunicação não violenta{'\n'}
            • Facilitação de reuniões{'\n'}
            • Gestão de projetos (ágil, Scrum, Kanban){'\n'}
            • Feedback construtivo
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Inovação & Criatividade 💡</Text>
          <Text style={styles.cardText}>
            Empresas buscam pessoas que proponham melhorias, questionem o “sempre
            foi assim” e tragam soluções novas.
          </Text>
          <Text style={styles.cardTagTitle}>Sugestões de skills:</Text>
          <Text style={styles.cardTag}>
            • Resolução criativa de problemas{'\n'}
            • Pensamento crítico{'\n'}
            • Design thinking{'\n'}
            • Prototipagem rápida (Figma, Miro)
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Autogestão & Bem-estar 🧠</Text>
          <Text style={styles.cardText}>
            Não adianta ter muitas skills se você não consegue se cuidar e se
            organizar. Futuro do trabalho também fala de equilíbrio.
          </Text>
          <Text style={styles.cardTagTitle}>Skills para colocar no SkillSpark:</Text>
          <Text style={styles.cardTag}>
            • Gestão do tempo{'\n'}
            • Organização pessoal (Notion, Trello, agenda){'\n'}
            • Foco e atenção plena{'\n'}
            • Limites saudáveis entre trabalho e vida pessoal
          </Text>
        </View>

        {/* COMO USAR O APP */}
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Como usar o SkillSpark na prática ✍️</Text>
          <Text style={styles.footerText}>
            1. Na aba Home, cadastre skills que façam sentido para o seu momento.{'\n'}
            2. Defina categoria, nível, prioridade e guarde links de estudo.{'\n'}
            3. Revise suas skills sempre que sentir que evoluiu em algo.{'\n'}
            4. Volte na aba Explore quando quiser ideias de novas habilidades
            alinhadas ao futuro do trabalho.
          </Text>
          <Text style={styles.footerTextBottom}>
            Quanto mais intencional você for com as suas skills hoje, mais preparado(a)
            estará para as oportunidades de amanhã. ✨
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#020617',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIconWrapper: {
    marginRight: 12,
  },
  headerTextWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F9FAFB',
  },
  subtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  sectionLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    color: '#FACC15',
    marginBottom: 4,
    letterSpacing: 0.8,
  },
  card: {
    backgroundColor: '#0B1120',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  highlightCard: {
    borderColor: '#FACC15',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 13,
    color: '#D1D5DB',
    marginBottom: 10,
  },
  cardListItem: {
    fontSize: 13,
    color: '#E5E7EB',
    marginBottom: 4,
  },
  cardTagTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FACC15',
    marginBottom: 4,
  },
  cardTag: {
    fontSize: 12,
    color: '#E5E7EB',
    lineHeight: 18,
  },
  footerCard: {
    marginTop: 10,
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FACC15',
    marginBottom: 6,
  },
  footerText: {
    fontSize: 12,
    color: '#D1D5DB',
    marginBottom: 6,
  },
  footerTextBottom: {
    fontSize: 12,
    color: '#E5E7EB',
  },
});
