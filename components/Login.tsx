import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Image } from "react-native";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const styles = {
        container: {
            width: "100%" as `${number}%`,
            height: Dimensions.get('window').height,
            display: "flex" as "flex",
            flex: 1,
            justifyContent: "center" as "center",
            alignItems: "center" as "center",
            backgroundColor: "#f5f5f5",
        },
        title: {
            fontSize: 24,
            marginBottom: 20,
        },
        input: {
            width: "80%" as `${number}%`,
            padding: 10,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
        },
        button: {
            submit: {
                backgroundColor: "#007BFF",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
            },
            cancel: {
                backgroundColor: "#FF5733",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
            },
        },
        buttonText: {
            color: "#fff",
            fontSize: 16,
        },
    };

    const handleSubmit = () => {
        alert("Login successful!");
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
    };
    return (
        <View style={styles.container}>
            <Image source={require('../assets/favicon.png')} style={{ width: 50, height: 50, marginBottom: 20 }} />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#888"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
                <TouchableOpacity style={styles.button.submit} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button.cancel} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}