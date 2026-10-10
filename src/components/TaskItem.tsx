import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/theme/colors';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  const { title, completed } = task;

  return (
    <View style={styles.card}>
      <View
        style={[styles.checkbox, completed && styles.checkboxCompleted]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: completed }}
        accessibilityLabel={completed ? 'Tarefa concluída' : 'Tarefa aberta'}
      >
        {completed ? <Text style={styles.check}>✓</Text> : null}
      </View>
      <Text style={[styles.title, completed && styles.titleCompleted]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderColor: colors.gray400,
    borderRadius: 8,
    padding: 16,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  checkboxCompleted: {
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
  check: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 12,
  },
  title: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
    lineHeight: 20,
  },
  titleCompleted: {
    color: colors.gray300,
    textDecorationLine: 'line-through',
  },
});
