import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function Calculator() {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [result, setResult] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Number A"
                keyboardType="numeric"
                onChangeText={(text) => setNumberA(parseInt(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="Number B"
                keyboardType="numeric"
                onChangeText={(text) => setNumberB(parseInt(text))}
            />
            <View style={styles.groupButton}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Button color="#fff" title="+" onPress={() => setResult(numberA + numberB)} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <Button color="#fff" title="-" onPress={() => setResult(numberA - numberB)} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <Button color="#fff" title="*" onPress={() => setResult(numberA * numberB)} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <Button color="#fff" title="/" onPress={() => setResult(numberA / numberB)} />
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.resultText}>Result: {result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        paddingLeft: 12,
        paddingRight: 12,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 100,
        width: '100%',
        marginBottom: 10,
    },
    groupButton: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#305cde',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 30,
        marginTop: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});