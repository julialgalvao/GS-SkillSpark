# SkillSpark

Aplicativo desenvolvido para a Global Solution 2025.2 - Engenharia de Software (3ESA/3ESR) na disciplina Mobile Development & IoT.

O SkillSpark é um app simples para mapear e acompanhar as habilidades (skills) que o usuário está desenvolvendo para o **Futuro do Trabalho**, com foco em reskilling e upskilling.

## Tecnologias

- React Native (Expo)
- AsyncStorage (@react-native-async-storage/async-storage)
- JavaScript

## Funcionalidades

- Cadastro de novas skills com:
  - Nome
  - Categoria (hard/soft skill)
  - Nível (iniciante, intermediário, avançado, etc.)
- Listagem das skills cadastradas
- Remoção de skills
- Persistência local dos dados usando AsyncStorage

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn
- Expo CLI (opcional, pode usar npx)

### Passos

```bash
git clone https://github.com/seu-usuario/SkillSpark.git
cd SkillSpark
npm install
npm start
