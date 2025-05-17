import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TodoItem {
    id: string;
    text: string;
}

const TodoList = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [textInput, setTextInput] = useState('');
    const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
    const [editText, setEditText] = useState('');

    const addTodo = () => {
        if (textInput.trim() !== '') {
            setTodos([...todos, { id: Date.now().toString(), text: textInput }]);
            setTextInput('');
        }
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEditTodo = (id: string, text: string) => {
        setEditingTodoId(id);
        setEditText(text);
    };

    const updateTodo = (id: string) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, text: editText } : todo
            )
        );
        setEditingTodoId(null);
        setEditText('');
    };

    const renderItem = ({ item }: { item: TodoItem }) => (
        <View style={styles.todoItem}>
            {editingTodoId === item.id ? (
                <TextInput
                    style={styles.editInput}
                    value={editText}
                    onChangeText={setEditText}
                    onSubmitEditing={() => updateTodo(item.id)}
                />
            ) : (
                <Text>{item.text}</Text>
            )}
            {editingTodoId === item.id ? (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => updateTodo(item.id)} style={styles.iconButton}>
                        <Icon name="save" size={20} color="gray" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setEditingTodoId(null)} style={styles.iconButton}>
                        <Icon name="close" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => startEditTodo(item.id, item.text)} style={styles.iconButton}>
                        <Icon name="pencil" size={20} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.iconButton}>
                        <Icon name="trash" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter todo"
                    value={textInput}
                    onChangeText={setTextInput}
                />
                <View style={styles.buttonAdd}>
                    <Button color={'#fff'} title="Add" onPress={addTodo} />
                </View>
            </View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '80%',
        height: 40,
        borderRadius: 5,
    },
    buttonAdd: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        textAlign: 'center',
        width: '17%',
        color: '#fff',
        height: 40,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    editInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginRight: 10,
        height: 40,
        borderRadius: 5,
    },
    iconButton: {
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
    }
});

export default TodoList;