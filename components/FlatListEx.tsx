import { FlatList, Text, View } from "react-native";

export default function FlatListEx() {
    const data = [
        { key: '1', title: 'Item 1' },
        { key: '2', title: 'Item 2' },
        { key: '3', title: 'Item 3' },
        { key: '4', title: 'Item 4' },
        { key: '5', title: 'Item 5' },
    ];

    return (
        <FlatList
            style={{ width: '100%' }}
            data={data}
            renderItem={({ item }) => (
                <View style={{ padding: 10, alignItems: 'center', width: '100%', borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <Text>{item.title}</Text>
                </View>
            )}
        />
    );
}
