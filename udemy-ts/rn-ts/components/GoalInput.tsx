import { FC, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Goal from '../models/Goal';

interface GoalItemProps {
  isAddModal: boolean;
  onAddGoal: (goal: Goal) => void;
  onCancel: () => void;
}

const GoalInput: FC<GoalItemProps> = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleTextChange = (text: string) => {
    setEnteredGoal(text);
  };

  const handleAddPress = () => {
    props.onAddGoal(new Goal(enteredGoal));
    setEnteredGoal('');
  };

  const handleCancelPress = () => {
    props.onCancel();
  };

  return (
    <Modal visible={props.isAddModal} animationType={'slide'}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Course Goals'
          value={enteredGoal}
          onChangeText={handleTextChange}
        ></TextInput>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              color='red'
              title='Cancel'
              onPress={handleCancelPress}
            ></Button>
          </View>
          <View style={styles.btn}>
            <Button title='ADD' onPress={handleAddPress}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  btn: {
    width: '40%',
  },
});

export default GoalInput;
