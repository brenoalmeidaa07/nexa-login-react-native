import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppColors } from '../../../core/constants/appColors';
import type { RootStackParamList } from '../../../navigation/types';
import { NexaLogo } from '../../auth/components/NexaLogo';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ route, navigation }: Props) {
  return (
    <LinearGradient colors={['#0A1230', '#141029', AppColors.background]} style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.iconWrap}>
              <NexaLogo size={66} />
            </View>
            <Text style={styles.eyebrow}>AUTHENTICATION SUCCESSFUL</Text>
            <Text style={styles.title}>Welcome, {route.params.name}! 👋</Text>
            <Text style={styles.subtitle}>You successfully logged in.</Text>
            <View style={styles.successPill}>
              <View style={styles.dot} />
              <Text style={styles.successText}>Session active</Text>
            </View>
            <Pressable onPress={() => navigation.replace('Login')} style={({ pressed }) => [styles.button, pressed && { opacity: 0.75 }]}>
              <Text style={styles.buttonText}>Sign out</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  safeArea: { flex: 1 },
  content: { flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center' },
  card: {
    width: '100%',
    maxWidth: 430,
    padding: 28,
    borderRadius: 28,
    backgroundColor: 'rgba(21,25,35,0.94)',
    borderWidth: 1,
    borderColor: AppColors.cardBorder,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 26,
    shadowOffset: { width: 0, height: 16 },
    elevation: 12,
  },
  iconWrap: { marginBottom: 24 },
  eyebrow: { color: AppColors.success, fontFamily: 'Inter_600SemiBold', fontSize: 10, letterSpacing: 1.4, marginBottom: 12 },
  title: { color: AppColors.textPrimary, fontFamily: 'Inter_700Bold', fontSize: 27, letterSpacing: -0.8, textAlign: 'center' },
  subtitle: { color: AppColors.textSecondary, fontFamily: 'Inter_400Regular', fontSize: 14.5, marginTop: 10, textAlign: 'center' },
  successPill: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 24, backgroundColor: 'rgba(64,212,154,0.08)', borderRadius: 999, paddingHorizontal: 13, paddingVertical: 8 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: AppColors.success },
  successText: { color: AppColors.success, fontFamily: 'Inter_500Medium', fontSize: 12 },
  button: { marginTop: 28, height: 50, width: '100%', borderRadius: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.045)' },
  buttonText: { color: AppColors.textPrimary, fontFamily: 'Inter_600SemiBold', fontSize: 14 },
});
