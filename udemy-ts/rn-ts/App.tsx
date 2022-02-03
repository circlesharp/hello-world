import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import Goal from './models/Goal';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>(
    Array(20)
      .fill(null)
      .map((_, i) => new Goal(i.toString()))
  );
  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddGoal = (goal: Goal) => {
    setCourseGoals((courseGoals) => [...courseGoals, goal]);
    setIsAddModal(false);
  };

  const handleDelGoal = (goalId: string) => {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((goal) => goal.id !== goalId)
    );
  };

  const handleCancelAddGoal = () => {
    setIsAddModal(false);
  };

  return (
    <View style={styles.container}>
      <Button
        title='Add New Goal'
        onPress={() => {
          setIsAddModal(true);
        }}
      ></Button>
      <GoalInput
        isAddModal={isAddModal}
        onAddGoal={handleAddGoal}
        onCancel={handleCancelAddGoal}
      ></GoalInput>
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <GoalItem goal={item.item} onDelGoal={handleDelGoal}></GoalItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
