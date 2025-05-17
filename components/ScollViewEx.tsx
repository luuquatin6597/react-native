import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function ScrollViewEx() {
    return (
        <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.item}>
                <Text style={styles.text}>ScrollView Example</Text>
                <Text>Tap here to dismiss the keyboard</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>ScrollView Example</Text>
                <Text>Tap here to dismiss the keyboard</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>ScrollView Example</Text>
                <Text>Tap here to dismiss the keyboard</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ADD8E6', // Light Blue

        marginVertical: 10,
        marginHorizontal: 20,
        width: 300, // Increased width
        height: 200, // Increased height
        borderRadius: 15,
    },
    text: {
        fontSize: 24, // Increased font size
        color: '#333', // Darker color
        fontWeight: 'bold',
    }
})