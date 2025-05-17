import { useState } from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const Increment = () => {
        setCounter(counter + 1);
    };
    const Decrement = () => {
        setCounter(counter - 1);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={Decrement}>
                    <Text style={{ color: '#fff' }}>Decrement</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{counter}</Text>
                <TouchableOpacity style={styles.button} onPress={Increment}>
                    <Text style={{ color: '#fff' }}>Increment</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={() => setCounter(0)}>
                <Text style={{ color: '#fff' }}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: "#007AFF",
        borderRadius: 5,
        color: "#fff",
        textAlign: "center",
        width: "40%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 20,
    },
    counterText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
    },
    resetButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#FF3B30",
        borderRadius: 5,
        color: "#fff",
        textAlign: "center",
        width: "80%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    }
})