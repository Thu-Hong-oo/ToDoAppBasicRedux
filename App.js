import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import { addTodo, deleteTodo } from './redux/actions';
import { Icon } from 'react-native-elements';

const ToDoApp = () => {
  const [taskInput, setTaskInput] = useState('');
  const todos = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskInput) {
      dispatch(addTodo(taskInput)); // Thêm task vào store
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTodo(id)); // Xóa task khỏi store
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.task}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Icon name="close" color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TO DO APP</Text>
      <TextInput
        placeholder="Enter new task"
        style={styles.input}
        value={taskInput}
        onChangeText={setTaskInput}
      />
      <Button title="ADD" onPress={handleAddTask} />

      <View style={{ marginTop: 20, flex: 1 }}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const MainApp = () => (
  <Provider store={store}>
    <ToDoApp />
  </Provider>
);

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
