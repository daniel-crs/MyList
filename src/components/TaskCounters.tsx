import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type TaskCountersProps = {
  created?: number;
  completed?: number;
};

export function TaskCounters({ created = 0, completed = 0 }: TaskCountersProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Counter label="Criadas" count={created} labelColor={colors.blue} />
        <Counter label="Concluídas" count={completed} labelColor={colors.blue} />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

type CounterProps = {
  label: string;
  count: number;
  labelColor: string;
};

function Counter({ label, count, labelColor }: CounterProps) {
  return (
    <View style={styles.counter}>
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
  },
  badge: {
    backgroundColor: colors.gray400,
    borderRadius: 999,
    minWidth: 24,
    height: 20,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.gray200,
    fontSize: 12,
    fontWeight: '700',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.gray400,
  },
});
