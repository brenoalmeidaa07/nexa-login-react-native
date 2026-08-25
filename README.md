# Nexa Login — React Native + Expo

Mini projeto de autenticação com foco em UI moderna, organização de código e qualidade para portfólio.

## Destaques

- React Native + Expo + TypeScript
- Degradê azul/roxo
- Card central com profundidade e transparência
- Logo em SVG com `react-native-svg`
- Validação de e-mail e senha
- Mostrar/ocultar senha
- Remember me
- Loading no login
- Feedback visual de erro
- Navegação com React Navigation
- Login social demonstrativo (Google / Apple)
- Animações de entrada usando `Animated`
- Tela de sucesso após autenticação
- Fonte Inter via Expo Google Fonts

## Login de demonstração

```text
Email: demo@nexa.app
Senha: 123456
```

## Como executar

```bash
npm install
npx expo start
```

Depois:

- pressione `i` para abrir no iOS Simulator;
- pressione `a` para Android;
- ou leia o QR Code pelo Expo Go, quando compatível com o SDK usado.

## Estrutura

```text
src/
├── assets/
│   ├── icons/
│   └── images/
├── core/
│   ├── constants/
│   │   ├── appAssets.ts
│   │   ├── appColors.ts
│   │   └── appStrings.ts
│   └── theme/
│       └── appTheme.ts
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── CustomTextField.tsx
│   │   │   ├── LoginButton.tsx
│   │   │   ├── NexaLogo.tsx
│   │   │   └── SocialLoginButton.tsx
│   │   └── screens/
│   │       └── LoginScreen.tsx
│   └── home/
│       └── screens/
│           └── HomeScreen.tsx
└── navigation/
    ├── AppNavigator.tsx
    └── types.ts
```

## Próximos passos possíveis

Autenticação real com Supabase/Firebase, cadastro, recuperação de senha, persistência do Remember Me e testes automatizados.
