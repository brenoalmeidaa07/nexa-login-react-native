import { StyleSheet } from 'react-native';
import { AppColors } from '../constants/appColors';

export const AppTheme = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 16 },
    elevation: 14,
  },
});
