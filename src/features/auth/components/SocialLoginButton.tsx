import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  icon: ReactNode;
  onPress?: () => void;
};

export function SocialLoginButton({ title, icon, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed ? styles.pressed : undefined]}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(148,167,224,0.23)',
    backgroundColor: 'rgba(255,255,255,0.045)',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.72, transform: [{ scale: 0.985 }] },
  icon: { alignItems: 'center', justifyContent: 'center' },
  title: { color: '#F7F9FF', fontFamily: 'Inter_600SemiBold', fontSize: 14 },
});
