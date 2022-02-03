import { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Goal from '../models/Goal';

interface GoalItemProps {
  goal: Goal;
  onDelGoal: (id: string) => void;
}

const GoalItem: FC<GoalItemProps> = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelGoal.bind(null, props.goal.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.goal.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
