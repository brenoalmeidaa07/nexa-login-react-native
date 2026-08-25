import { ReactNode } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { AppColors } from '../../../core/constants/appColors';

type Props = TextInputProps & {
  label: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function CustomTextField({ label, error, leftIcon, rightIcon, style, ...props }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error ? styles.inputError : undefined]}>
        {leftIcon ? <View style={styles.icon}>{leftIcon}</View> : null}
        <TextInput
          placeholderTextColor="#7280A5"
          selectionColor="#8C72FF"
          style={[styles.input, style]}
          {...props}
        />
        {rightIcon ? <View style={styles.icon}>{rightIcon}</View> : null}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 8 },
  label: {
    color: '#D5DDF2',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
  },
  inputContainer: {
    height: 58,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgba(150,170,235,0.33)',
    backgroundColor: 'rgba(255,255,255,0.055)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 12,
  },
  inputError: { borderColor: 'rgba(255,107,129,0.85)' },
  input: {
    flex: 1,
    color: '#F8FAFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    paddingVertical: 0,
  },
  icon: { alignItems: 'center', justifyContent: 'center' },
  error: {
    color: AppColors.error,
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
});
