import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { AppColors } from '../../../core/constants/appColors';
import { AppStrings } from '../../../core/constants/appStrings';
import type { RootStackParamList } from '../../../navigation/types';
import { CustomTextField } from '../components/CustomTextField';
import { LoginButton } from '../components/LoginButton';
import { NexaLogo } from '../components/NexaLogo';
import { SocialLoginButton } from '../components/SocialLoginButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
type FieldErrors = { email?: string; password?: string; auth?: string };

function MailIcon() {
  return (
    <Svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 6.5h16v11H4v-11Z"
        stroke="#AEB9D9"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Path
        d="m5 8 7 5 7-5"
        stroke="#AEB9D9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function LockIcon() {
  return (
    <Svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 10V8a5 5 0 0 1 10 0v2"
        stroke="#AEB9D9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M5 10h14v10H5V10Z"
        stroke="#AEB9D9"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return (
    <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <Path
        d={
          open
            ? 'M2.5 12s3.3-5 9.5-5 9.5 5 9.5 5-3.3 5-9.5 5-9.5-5-9.5-5Z'
            : 'M3 4l18 16M10.4 7.2c.5-.1 1-.2 1.6-.2 6.2 0 9.5 5 9.5 5a17 17 0 0 1-3.1 3.4M6.2 8.2C3.7 9.8 2.5 12 2.5 12s3.3 5 9.5 5c1.3 0 2.5-.2 3.5-.6'
        }
        stroke="#AEB9D9"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {open ? (
        <Path
          d="M14.4 12a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"
          stroke="#AEB9D9"
          strokeWidth="1.7"
        />
      ) : null}
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <View style={styles.googleIcon}>
      <Text style={styles.googleLetter}>G</Text>
    </View>
  );
}

function AppleIcon() {
  return <Text style={styles.appleIcon}>●</Text>;
}

function DecorativeDots() {
  return (
    <View pointerEvents="none" style={styles.dotsWrap}>
      {Array.from({ length: 42 }).map((_, index) => {
        const column = index % 14;
        const row = Math.floor(index / 14);

        const offset = Math.sin(column * 0.7) * 8 + row * 9;

        return (
          <View
            key={index}
            style={[
              styles.dot,
              {
                left: `${column * 7.2}%`,
                top: 12 + offset,
                opacity: 0.15 + (column % 4) * 0.08,
                transform: [{ scale: 0.7 + row * 0.18 }],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

export function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const logoAnim = useRef(new Animated.Value(0)).current;
  const titleAnim = useRef(new Animated.Value(0)).current;
  const cardAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(120, [
      Animated.spring(logoAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 7,
        tension: 55,
      }),

      Animated.timing(titleAnim, {
        toValue: 1,
        duration: 480,
        useNativeDriver: true,
      }),

      Animated.timing(cardAnim, {
        toValue: 1,
        duration: 560,
        useNativeDriver: true,
      }),
    ]).start();
  }, [cardAnim, logoAnim, titleAnim]);

  const animatedStyle = (value: Animated.Value, distance = 18) => ({
    opacity: value,

    transform: [
      {
        translateY: value.interpolate({
          inputRange: [0, 1],
          outputRange: [distance, 0],
        }),
      },
      {
        scale: value.interpolate({
          inputRange: [0, 1],
          outputRange: [0.96, 1],
        }),
      },
    ],
  });

  const emailIsValid = useMemo(
    () => /^\S+@\S+\.\S+$/.test(email.trim()),
    [email]
  );

  function validate() {
    const nextErrors: FieldErrors = {};

    if (!email.trim()) {
      nextErrors.email = 'Enter your email address.';
    } else if (!emailIsValid) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!password) {
      nextErrors.password = 'Enter your password.';
    } else if (password.length < 6) {
      nextErrors.password = 'Password must have at least 6 characters.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleLogin() {
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    await new Promise(resolve => setTimeout(resolve, 1100));

    if (
      email.trim().toLowerCase() === 'demo@nexa.app' &&
      password === '123456'
    ) {
      setLoading(false);

      navigation.replace('Home', {
        name: 'Breno',
      });

      return;
    }

    setLoading(false);

    setErrors({
      auth: 'Invalid email or password. Use the demo credentials.',
    });
  }

  return (
    <LinearGradient
      colors={[
        '#075FEF',
        '#3046E7',
        '#6036DF',
        '#191B52',
        '#07122D',
      ]}
      locations={[0, 0.2, 0.42, 0.68, 1]}
      start={{ x: 0.08, y: 0 }}
      end={{ x: 0.92, y: 1 }}
      style={styles.screen}
    >
      <View pointerEvents="none" style={styles.glowLeft} />
      <View pointerEvents="none" style={styles.glowRight} />
      <View pointerEvents="none" style={styles.orbTop} />

      <DecorativeDots />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Animated.View
              style={[styles.hero, animatedStyle(logoAnim, 12)]}
            >
              <View style={styles.logoGlow} />

              <NexaLogo size={82} />
            </Animated.View>

            <Animated.View
              style={[styles.heading, animatedStyle(titleAnim)]}
            >
              <Text style={styles.title}>
                Welcome Back!
              </Text>

              <Text style={styles.subtitle}>
                Please sign in to continue to{' '}
                <Text style={styles.subtitleBrand}>
                  Nexa.
                </Text>
              </Text>
            </Animated.View>

            <Animated.View
              style={[
                styles.cardShadow,
                animatedStyle(cardAnim, 26),
              ]}
            >
              <View style={styles.cardBorder}>
                <LinearGradient
                  colors={[
                    'rgba(13,37,92,0.93)',
                    'rgba(16,29,73,0.96)',
                    'rgba(12,24,62,0.98)',
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.card}
                >
                  <CustomTextField
                    label={AppStrings.email}
                    value={email}
                    onChangeText={value => {
                      setEmail(value);

                      if (errors.email || errors.auth) {
                        setErrors(current => ({
                          ...current,
                          email: undefined,
                          auth: undefined,
                        }));
                      }
                    }}
                    placeholder="demo@nexa.app"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    leftIcon={<MailIcon />}
                    error={errors.email}
                  />

                  <CustomTextField
                    label={AppStrings.password}
                    value={password}
                    onChangeText={value => {
                      setPassword(value);

                      if (errors.password || errors.auth) {
                        setErrors(current => ({
                          ...current,
                          password: undefined,
                          auth: undefined,
                        }));
                      }
                    }}
                    placeholder="••••••"
                    secureTextEntry={!showPassword}
                    leftIcon={<LockIcon />}
                    rightIcon={
                      <Pressable
                        onPress={() =>
                          setShowPassword(value => !value)
                        }
                        hitSlop={12}
                      >
                        <EyeIcon open={showPassword} />
                      </Pressable>
                    }
                    error={errors.password}
                  />

                  <View style={styles.rowBetween}>
                    <Pressable
                      style={styles.rememberRow}
                      onPress={() =>
                        setRememberMe(value => !value)
                      }
                      hitSlop={8}
                    >
                      <LinearGradient
                        colors={
                          rememberMe
                            ? ['#4B5BFF', '#6D36F6']
                            : ['transparent', 'transparent']
                        }
                        style={[
                          styles.checkbox,
                          !rememberMe && styles.checkboxOff,
                        ]}
                      >
                        {rememberMe ? (
                          <Text style={styles.check}>
                            ✓
                          </Text>
                        ) : null}
                      </LinearGradient>

                      <Text style={styles.smallText}>
                        {AppStrings.rememberMe}
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={() =>
                        Alert.alert(
                          'Password recovery',
                          'Connect this button to your recovery flow or API.'
                        )
                      }
                    >
                      <Text style={styles.linkText}>
                        {AppStrings.forgotPassword}
                      </Text>
                    </Pressable>
                  </View>

                  {errors.auth ? (
                    <Text style={styles.authError}>
                      {errors.auth}
                    </Text>
                  ) : null}

                  <LoginButton
                    title={AppStrings.signIn}
                    loading={loading}
                    onPress={handleLogin}
                  />

                  <View style={styles.dividerRow}>
                    <View style={styles.divider} />

                    <Text style={styles.dividerText}>
                      Or continue with
                    </Text>

                    <View style={styles.divider} />
                  </View>

                  <View style={styles.socialRow}>
                    <SocialLoginButton
                      title={AppStrings.google}
                      icon={<GoogleIcon />}
                      onPress={() =>
                        Alert.alert(
                          'Google',
                          'Social login is UI-only in this portfolio demo.'
                        )
                      }
                    />

                    <SocialLoginButton
                      title={AppStrings.apple}
                      icon={<AppleIcon />}
                      onPress={() =>
                        Alert.alert(
                          'Apple',
                          'Social login is UI-only in this portfolio demo.'
                        )
                      }
                    />
                  </View>

                  <View style={styles.createAccountRow}>
                    <Text style={styles.createAccountText}>
                      {AppStrings.noAccount}{' '}
                    </Text>

                    <Pressable
                      onPress={() =>
                        Alert.alert(
                          'Create account',
                          'Registration can be added as a second auth screen.'
                        )
                      }
                    >
                      <Text style={styles.createAccountLink}>
                        {AppStrings.createAccount}
                      </Text>
                    </Pressable>
                  </View>
                </LinearGradient>
              </View>
            </Animated.View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#07122D',
  },

  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 34,
    justifyContent: 'center',
  },

  glowLeft: {
    position: 'absolute',
    top: -80,
    left: -130,
    width: 310,
    height: 310,
    borderRadius: 155,
    backgroundColor: 'rgba(0,183,255,0.17)',
  },

  glowRight: {
    position: 'absolute',
    top: 150,
    right: -160,
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: 'rgba(164,64,255,0.24)',
  },

  orbTop: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.025)',
  },

  dotsWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -14,
    height: 105,
  },

  dot: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#55A9FF',
  },

  hero: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },

  logoGlow: {
    position: 'absolute',
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: 'rgba(111,73,255,0.23)',
    shadowColor: '#A864FF',
    shadowOpacity: 0.65,
    shadowRadius: 35,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },

  heading: {
    alignItems: 'center',
    marginBottom: 26,
  },

  title: {
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 34,
    letterSpacing: -1.1,
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.18)',
    textShadowRadius: 10,
  },

  subtitle: {
    color: '#B8C3E0',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    textAlign: 'center',
  },

  subtitleBrand: {
    color: '#9E8BFF',
    fontFamily: 'Inter_700Bold',
  },

  cardShadow: {
    shadowColor: '#020712',
    shadowOpacity: 0.48,
    shadowRadius: 34,
    shadowOffset: {
      width: 0,
      height: 22,
    },
    elevation: 18,
  },

  cardBorder: {
    borderRadius: 31,
    padding: 1,
    backgroundColor: 'rgba(102,124,255,0.55)',
  },

  card: {
    borderRadius: 30,
    padding: 21,
    gap: 17,
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },

  checkbox: {
    width: 21,
    height: 21,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxOff: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },

  check: {
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    marginTop: -1,
  },

  smallText: {
    color: '#B8C3E0',
    fontFamily: 'Inter_400Regular',
    fontSize: 12.5,
  },

  linkText: {
    color: '#9882FF',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12.5,
  },

  authError: {
    color: AppColors.error,
    fontFamily: 'Inter_500Medium',
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: -4,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 1,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },

  dividerText: {
    color: '#7F8EB4',
    fontFamily: 'Inter_400Regular',
    fontSize: 11.5,
  },

  socialRow: {
    flexDirection: 'row',
    gap: 12,
  },

  googleIcon: {
    width: 21,
    height: 21,
    borderRadius: 10.5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleLetter: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#4285F4',
  },

  appleIcon: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 20,
  },

  createAccountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },

  createAccountText: {
    color: '#A7B3D0',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
  },

  createAccountLink: {
    color: '#6FA8FF',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
  },
});