import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EmptyState } from '@/components/EmptyState';
import { Logo } from '@/components/Logo';
import { TaskCounters } from '@/components/TaskCounters';
import { TaskInput } from '@/components/TaskInput';
import { TaskItem } from '@/components/TaskItem';
import { colors } from '@/theme/colors';

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    completed: false,
  },
  {
    id: '2',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    completed: false,
  },
  {
    id: '3',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    completed: false,
  },
  {
    id: '4',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    completed: true,
  },
  {
    id: '5',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
    completed: true,
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [text, setText] = useState('');
  const [tasks] = useState<Task[]>(MOCK_TASKS);

  const hasTasks = tasks.length > 0;
  const createdCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <View style={styles.screen}>
      <View style={[styles.header, { paddingTop: insets.top + 24 }]}>
        <Logo />
        <View style={styles.inputRow}>
          <TaskInput value={text} onChangeText={setText} />
        </View>
      </View>

      <View style={styles.body}>
        <TaskCounters created={createdCount} completed={completedCount} />
        {hasTasks ? (
          <FlatList
            style={styles.list}
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TaskItem task={item} />}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.empty}>
            <EmptyState />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.gray700,
  },
  header: {
    backgroundColor: colors.gray600,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 0,
    zIndex: 1,
  },
  inputRow: {
    width: '100%',
    marginTop: 40,
    marginBottom: -27,
  },
  body: {
    flex: 1,
    backgroundColor: colors.gray700,
    paddingHorizontal: 24,
    paddingTop: 51,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: 8,
    paddingBottom: 24,
  },
});
