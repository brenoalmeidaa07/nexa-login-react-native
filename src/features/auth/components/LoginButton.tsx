import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from '../../../core/constants/appColors';

type Props = {
  title: string;
  loading?: boolean;
  onPress: () => void;
};

export function LoginButton({ title, loading = false, onPress }: Props) {
  return (
    <Pressable disabled={loading} onPress={onPress} style={({ pressed }) => [styles.outer, pressed && !loading ? styles.pressed : undefined]}>
      <LinearGradient
        colors={['#3F78FF', '#6354FF', '#8B38F6']}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 1, y: 0.7 }}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator color={AppColors.white} />
        ) : (
          <View style={styles.content}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.arrow}>→</Text>
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outer: {
    borderRadius: 17,
    shadowColor: '#714BFF',
    shadowOpacity: 0.52,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 9 },
    elevation: 10,
  },
  pressed: { transform: [{ scale: 0.985 }], opacity: 0.94 },
  button: {
    height: 58,
    borderRadius: 17,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  content: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    letterSpacing: 0.15,
  },
  arrow: {
    position: 'absolute',
    right: 2,
    color: '#FFFFFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 27,
    lineHeight: 28,
  },
});
