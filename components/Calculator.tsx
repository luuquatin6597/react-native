import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Calculator() {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [result, setResult] = useState(0);
    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 15, fontWeight: 'bold', textAlign: 'center' }}>Calculator</Text>
            <TextInput
                style={{ paddingLeft: 12, paddingRight: 12, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 100, width: 200, marginBottom: 10 }}
                placeholder="Number A"
                keyboardType="numeric"
                onChangeText={(text) => setNumberA(parseInt(text))}
            />
            <TextInput
                style={{ paddingLeft: 12, paddingRight: 12, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 100, width: 200, marginBottom: 10 }}
                placeholder="Number B"
                keyboardType="numeric"
                onChangeText={(text) => setNumberB(parseInt(text))}
            />
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#305cde', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#fff" title="+" onPress={() => setResult(numberA + numberB)} />
                </View>
                <View style={{ backgroundColor: '#305cde', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#fff" title="-" onPress={() => setResult(numberA - numberB)} />
                </View>
                <View style={{ backgroundColor: '#305cde', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#fff" title="*" onPress={() => setResult(numberA * numberB)} />
                </View>
                <View style={{ backgroundColor: '#305cde', width: 50, height: 50, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#fff" title="/" onPress={() => setResult(numberA / numberB)} />
                </View>
            </View>
            <Text style={{ fontSize: 30, marginTop: 15, fontWeight: 'bold', textAlign: 'center' }}>Result: {result}</Text>
        </View>
    );
}