import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppColors } from './src/core/constants/appColors';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: AppColors.background }}>
        <ActivityIndicator size="large" color={AppColors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer
      theme={{
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: AppColors.background,
          card: AppColors.background,
          text: AppColors.textPrimary,
          primary: AppColors.primary,
          border: 'transparent',
          notification: AppColors.secondary,
        },
      }}
    >
      <StatusBar style="light" />
      <AppNavigator />
    </NavigationContainer>
  );
}
