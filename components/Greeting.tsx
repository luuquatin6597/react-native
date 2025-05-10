import { Text, View } from "react-native";

interface GreetingProps {
    name: string;
    address?: string;
}

export default function Greeting(props: GreetingProps) {
    return (
        <View>
            <Text>Hello, {props.name}!</Text>
            {props.address && (
                <Text>
                    Address: {props.address}
                </Text>
            )}
        </View>
    );
}