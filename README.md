# SkillSpark

Aplicativo desenvolvido para a Global Solution 2025.2 -- Engenharia de Software 3ESA, na disciplina Mobile Development & IoT.

O SkillSpark é um aplicativo criado para ajudar estudantes e profissionais a mapear, organizar e acompanhar suas habilidades (skills), alinhadas às exigências do Futuro do Trabalho.
Ele incentiva o desenvolvimento contínuo e permite que o usuário registre tanto hard skills quanto soft skills, seus níveis, prioridades e até links úteis para estudo.
para estudo.

## 👥 Integrantes

Nome | RM
--- | ---
Aline Fernandes Zeppelini | 97966
Julia Leite Galvão | 550201

## 📘 Introdução

O SkillSpark foi desenvolvido com o objetivo de proporcionar uma
ferramenta simples e intuitiva para:

-   Acompanhar habilidades profissionais em desenvolvimento
-   Incentivar upskilling e reskilling
-   Entender como cada skill contribui para o futuro do trabalho
-   Registrar prioridades, níveis e materiais de estudo

O app também conta com uma aba **Explore**, trazendo conteúdos sobre
tendências do mercado e sugestões de skills importantes.

## 🛠️ Tecnologias Utilizadas

-   React Native (Expo)
-   JavaScript
-   Expo Router
-   AsyncStorage -- armazenamento local
-   @expo/vector-icons -- ícones modernos
-   react-native-picker/picker (removido posteriormente)
-   React Hooks (useState, useEffect)

## 📦 Dependências Principais

Estas dependências são instaladas automaticamente ao rodar
`npm install`, mas aqui está a lista completa:

    "dependencies": {
      "@react-native-async-storage/async-storage": "1.21.0",
      "@expo/vector-icons": "^14.0.0",
      "expo": "~51.0.0",
      "expo-status-bar": "~1.12.1",
      "react": "18.2.0",
      "react-native": "0.74.0",
      "react-native-safe-area-context": "^4.10.1",
      "react-native-screens": "^3.29.0"
    }

## ✨ Funcionalidades do SkillSpark

### ✔️ CRUD de skills completo

-   Adicionar novas skills
-   Visualizar todas as skills cadastradas
-   Remover skills
-   Dados salvos localmente com AsyncStorage

### ✔️ Campos de cadastro

Cada skill inclui:

-   Nome
-   Categoria (hard/soft skill)
-   Nível de habilidade (iniciante/intermediário/avançado)
-   Prioridade de aprendizado
-   Link útil ou material de estudo (opcional)

### ✔️ Explore

A aba Explore inclui:

-   Conteúdos sobre o Futuro do Trabalho
-   Sugestões de skills relevantes
-   Explicações sobre tendências (IA, automação, soft skills, etc.)
-   Como o SkillSpark ajuda no processo de aprendizado

### ✔️ Resumo de Skills

Quadro com:

-   Total de skills
-   Hard x Soft
-   Quantas avançadas
-   Insight motivacional

## 🚀 Como Rodar o Projeto

### 🔧 1. Pré-requisitos obrigatórios

Antes de tudo, instale:

#### ✔️ Node.js

Baixe em: https://nodejs.org\
Versão recomendada: LTS

Para conferir se instalou corretamente:

    node -v
    npm -v

#### ✔️ Expo (CLI opcional)

    npm install --global expo-cli

------------------------------------------------------------------------

### 📥 2. Baixar o projeto

    git clone https://github.com/julialgalvao/GS-SkillSpark.git
    cd SkillSpark

### 📦 3. Instalar as dependências

```
npm install
```

### ▶️ 4. Rodar o aplicativo

```
npm start
```

O Expo abrirá um painel no navegador.

Agora você tem 3 opções para visualizar o app:

### A) Rodar no celular físico (recomendado)
- Instale **Expo Go**
- Abra o aplicativo
- Scaneie o QR Code gerado pelo Expo

### B) Rodar no navegador (web)

Aperte:

```
w
```

### C) Rodar em um emulador Android
- Instale **Android Studio**
- Crie um dispositivo virtual (Pixel 5, API 34)
- No terminal aperte:

```
a
```
### 📁 Estrutura do Projeto

    SkillSpark/
    │── app/
    │   ├── (tabs)/
    │   │   ├── index.tsx
    │   │   ├── explore.tsx
    │── src/
    │   ├── components/
    │   │   ├── SkillForm.js
    │   │   ├── SkillList.js
    │   │   ├── SkillsSummary.js
    │   ├── storage/
    │   │   ├── SkillStorage.js
    │── App.js
    │── package.json
    │── README.md


## 🌟 O que fizemos no projeto

✔️ Aplicamos o tema Futuro do Trabalho, com conteúdos sobre IA, automação, soft skills, aprendizado contínuo e tendências modernas.

✔️ Criamos um app completo e funcional, com cadastro, listagem e remoção de skills.

✔️ Adicionamos recursos extras:

- Prioridade da skill  
- Link útil para o futuro  
- Resumo inteligente  
- Tela Explore personalizada  
- Interface moderna em tema escuro  

✔️ Estrutura limpa e organizada, separando componentes e lógica de armazenamento.

✔️ Persistência local real:  
Todas as skills continuam mesmo após fechar e abrir o aplicativo.

