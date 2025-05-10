import { useState } from "react";
import { Text, Button, View } from "react-native";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const Increment = () => {
        setCounter(counter + 1);
    };
    const Decrement = () => {
        setCounter(counter - 1);
    };
    return (
        <View>
            <Text>Counter</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
                <Button title="Decrement" onPress={Decrement} />
                <Text>{counter}</Text>
                <Button title="Increment" onPress={Increment} />
            </View>
            <Button title="Reset" onPress={() => setCounter(0)} />
        </View>
    );
}