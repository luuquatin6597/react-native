import { useState } from "react";
import { Button, Text, TextInput, View, Keyboard } from "react-native";

export default function MinMax() {
    const [numberA, setNumberA] = useState(0)
    const [numberB, setNumberB] = useState(0)
    const [numberC, setNumberC] = useState(0)
    const [result, setResult] = useState(0)

    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 15, fontWeight: 'bold', textAlign: 'center' }}>Min/Max</Text>

            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Number A:</Text>
                <TextInput style={{ paddingLeft: 12, paddingRight: 12, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 100, width: 200, marginBottom: 10 }} keyboardType="numeric" placeholder="Number A" onChangeText={(text) => setNumberA(parseInt(text))} />
            </View>
            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Number B:</Text>
                <TextInput style={{ paddingLeft: 12, paddingRight: 12, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 100, width: 200, marginBottom: 10 }} keyboardType="numeric" placeholder="Number B" onChangeText={(text) => setNumberB(parseInt(text))} />
            </View>

            <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Number C:</Text>
                <TextInput style={{ paddingLeft: 12, paddingRight: 12, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 100, width: 200, marginBottom: 10 }} keyboardType="numeric" placeholder="Number C" onChangeText={(text) => setNumberC(parseInt(text))} />
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#305cde', width: 80, height: 80, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#fff" title="Min" onPress={() => { setResult(Math.min(numberA, numberB, numberC)); Keyboard.dismiss() }} />
                </View>
                <View style={{ backgroundColor: '#305cde', width: 80, height: 80, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="#fff" title="Max" onPress={() => { setResult(Math.max(numberA, numberB, numberC)); Keyboard.dismiss() }} />
                </View>
            </View>

            <Text style={{ fontSize: 30, marginTop: 15, fontWeight: 'bold', textAlign: 'center' }}>Result: {result === numberA ? `Number A - ${numberA}` : result === numberB ? `Number B - ${numberB}` : `Number C - ${numberC}`}</Text>
        </View>
    )
}