import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';

import { colors } from '@/theme/colors';

type TaskInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onAddPress?: () => void;
  placeholder?: string;
} & Pick<TextInputProps, 'onSubmitEditing' | 'returnKeyType'>;

export function TaskInput({
  value,
  onChangeText,
  onAddPress,
  placeholder = 'Adicione algo a sua lista',
  onSubmitEditing,
  returnKeyType = 'done',
}: TaskInputProps) {
  return (
    <View style={styles.row}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray300}
        style={styles.input}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
      />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Adicionar item"
        onPress={onAddPress}
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.addButtonPressed,
        ]}
      >
        <View style={styles.plusCircle}>
          <Text style={styles.plus}>+</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: colors.gray500,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: colors.gray100,
    fontSize: 16,
  },
  addButton: {
    width: 54,
    height: 54,
    borderRadius: 8,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonPressed: {
    backgroundColor: colors.blue,
  },
  plusCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '600',
    marginTop: -1,
  },
});
