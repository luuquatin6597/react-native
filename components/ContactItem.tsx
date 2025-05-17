import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { ContactType } from "./FlatListContacts";

export default function ContactItem({ contact }: { contact: ContactType }) {
    return (
        <View style={styles.item}>
            <Image source={{ uri: contact.photo }} style={styles.image} />
            <View style={{ marginTop: 5 }}>
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.position}>{contact.position}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log(`Email: ${contact.email}`)}>
                <Text style={styles.email}>Call</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    position: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center'
    },
    email: {
        fontSize: 14,
        color: '#007AFF',
        textAlign: 'center',
    },
})