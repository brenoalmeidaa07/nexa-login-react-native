
## ✨ About the Project

**Nexa Login** is a modern authentication interface created to demonstrate mobile UI development using React Native.

The project focuses on creating a polished and professional login experience while maintaining a clean and scalable project architecture.

The interface uses a modern **blue and purple gradient**, dark translucent cards, custom components, smooth animations and responsive layouts.

Although authentication is simulated, the project demonstrates important concepts commonly used in real-world React Native applications.

---

## 🚀 Features

- 🎨 Modern blue and purple gradient interface
- 🌙 Dark and immersive UI
- 💎 Glass-style authentication card
- ✨ Entry animations
- 📧 Email input validation
- 🔒 Password validation
- 👁️ Show/hide password
- ☑️ Remember me option
- 🔑 Forgot password action
- ⏳ Loading state during authentication
- ❌ Invalid credentials feedback
- ✅ Successful login feedback
- 🔄 Navigation between screens
- 🔵 Google login UI
- 🍎 Apple login UI
- 📱 Responsive mobile layout
- 🧩 Reusable components
- 🏗️ Feature-based project architecture

---

## 🛠️ Technologies

This project was built using:

- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation**
- **Expo Linear Gradient**
- **React Native SVG**
- **React Native Safe Area Context**
- **Animated API**
- **Inter Font**

---

## 📂 Project Structure

```text
nexa-login/
│
├── src/
│   ├── assets/
│   │
│   ├── core/
│   │   └── constants/
│   │       ├── appColors.ts
│   │       └── appStrings.ts
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── CustomTextField.tsx
│   │   │   │   ├── LoginButton.tsx
│   │   │   │   ├── NexaLogo.tsx
│   │   │   │   └── SocialLoginButton.tsx
│   │   │   │
│   │   │   └── screens/
│   │   │       └── LoginScreen.tsx
│   │   │
│   │   └── home/
│   │
│   └── navigation/
│
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

The project uses a **feature-based architecture**, keeping authentication components and screens isolated from the rest of the application.

This approach makes the codebase easier to maintain and extend as new features are introduced.

---

## 🔐 Demo Authentication

The application includes a simulated authentication flow.

Use the following credentials:

```text
Email: demo@nexa.app
Password: 123456
```

After successful authentication, the user is redirected to the application home screen.

> Authentication is simulated locally and does not communicate with a real backend.

---

## ▶️ Getting Started

### Prerequisites

Before running the project, make sure you have installed:

- Node.js
- npm
- Expo
- Git

For iOS development on macOS:

- Xcode
- iOS Simulator

For Android development:

- Android Studio
- Android Emulator

---

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nexa-login-react-native.git
```

Navigate to the project:

```bash
cd nexa-login-react-native
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start Expo

```bash
npx expo start
```

---

### 4. Run on iOS

```bash
npx expo start --ios
```

Or start Expo and press:

```text
i
```

---

### 5. Run on Android

```bash
npx expo start --android
```

Or press:

```text
a
```

inside the Expo terminal.

---

## 🎨 Design

The interface was designed around a modern authentication experience using:

- Blue and purple gradients
- Dark navy backgrounds
- Soft shadows
- Rounded components
- Subtle glow effects
- High contrast typography
- Minimal visual hierarchy
- Smooth entrance animations

### Color Palette

```text
Primary Blue       #075FEF
Electric Blue      #3046E7
Purple             #6036DF
Dark Purple        #191B52
Background         #07122D
White              #FFFFFF
Secondary Text     #B8C3E0
```

---

## 🧩 Reusable Components

The interface was divided into reusable components to improve maintainability.

### `CustomTextField`

Responsible for the application's input fields.

Supports:

- Custom icons
- Password visibility
- Validation messages
- Email keyboard
- Secure text entry

### `LoginButton`

Main authentication button with:

- Loading state
- Gradient styling
- Press interaction
- Disabled state

### `SocialLoginButton`

Reusable button for social authentication providers.

Currently includes interfaces for:

- Google
- Apple

### `NexaLogo`

Custom visual component used to represent the Nexa identity.

---

## 🎬 Animations

The login screen uses React Native's `Animated` API.

The interface performs a sequential entrance animation:

```text
Logo
  ↓
Title
  ↓
Login Card
```

Animations combine:

- `Animated.spring`
- `Animated.timing`
- `Animated.stagger`
- Opacity
- TranslateY
- Scale

This creates a smoother and more professional first impression without requiring a heavy animation library.

---

## 🔮 Future Improvements

Some features that could be implemented in future versions:

- [ ] Real API authentication
- [ ] JWT authentication
- [ ] Secure token storage
- [ ] Google OAuth
- [ ] Sign in with Apple
- [ ] User registration
- [ ] Forgot password flow
- [ ] Email verification
- [ ] Persistent authentication
- [ ] Biometric authentication
- [ ] Dark/light theme
- [ ] Unit and integration tests

---

## 🎯 Project Purpose

This project was created as a portfolio project to demonstrate skills in:

- React Native development
- Expo
- TypeScript
- Mobile UI/UX
- Component architecture
- Form validation
- State management
- Navigation
- Animations
- Clean and reusable code

---

## 👨‍💻 Author

**Breno Almeida**

Computer Science graduate focused on software development, with interest in Full Stack, Web and Mobile development.

### Main Technologies

`React Native` • `React` • `TypeScript` • `JavaScript` • `Node.js` • `Java` • `PostgreSQL`

---

## ⭐ Support

If you liked this project, consider giving the repository a **star ⭐**.

It helps support the project and its continued development.

---

<div align="center">

### Made with 💙 using React Native + Expo

**Nexa Login**

</div>
