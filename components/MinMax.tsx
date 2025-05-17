import { useState } from "react";
import { Button, Text, TextInput, View, Keyboard, StyleSheet } from "react-native";

export default function MinMax() {
    const [numberA, setNumberA] = useState(0)
    const [numberB, setNumberB] = useState(0)
    const [numberC, setNumberC] = useState(0)
    const [result, setResult] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Min/Max</Text>

            <View style={styles.groupInput}>
                <Text>Number A:</Text>
                <TextInput style={styles.input} keyboardType="numeric" placeholder="Number A" onChangeText={(text) => setNumberA(parseInt(text))} />
            </View>
            <View style={styles.groupInput}>
                <Text>Number B:</Text>
                <TextInput style={styles.input} keyboardType="numeric" placeholder="Number B" onChangeText={(text) => setNumberB(parseInt(text))} />
            </View>
            <View style={styles.groupInput}>
                <Text>Number C:</Text>
                <TextInput style={styles.input} keyboardType="numeric" placeholder="Number C" onChangeText={(text) => setNumberC(parseInt(text))} />
            </View>

            <View style={styles.groupButton}>
                <View style={styles.button}>
                    <Button color="#fff" title="Min" onPress={() => { setResult(Math.min(numberA, numberB, numberC)); Keyboard.dismiss() }} />
                </View>
                <View style={styles.button}>
                    <Button color="#fff" title="Max" onPress={() => { setResult(Math.max(numberA, numberB, numberC)); Keyboard.dismiss() }} />
                </View>
            </View>

            <Text style={styles.resultText}>Result: {result === numberA ? `Number A - ${numberA}` : result === numberB ? `Number B - ${numberB}` : `Number C - ${numberC}`}</Text>
        </View>
    )
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
    groupInput: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 12,
        paddingRight: 12,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 100,
        width: '80%',
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
        width: 100,
        height: 100,
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