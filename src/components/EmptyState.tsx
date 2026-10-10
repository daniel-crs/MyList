import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

const emptyListIcon = require('@/assets/images/empty-list.png');

export function EmptyState() {
  return (
    <View style={styles.container}>
      <Image
        source={emptyListIcon}
        style={styles.icon}
        contentFit="contain"
        accessibilityLabel="Lista vazia"
      />
      <Text style={styles.title}>Sua lista ainda está vazia</Text>
      <Text style={styles.subtitle}>Adicione algo para se organizar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingHorizontal: 24,
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 12,
  },
  title: {
    color: colors.gray300,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.gray300,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
});
