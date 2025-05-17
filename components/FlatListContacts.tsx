import { FlatList, Text, View } from "react-native";
import ContactItem from "./ContactItem";

export type ContactType = {
    name: string;
    email: string;
    position: string;
    photo: string;
};

export default function FlatListContacts() {
    const data = [
        {
            name: 'John Doe',
            email: 'dfsdfasd@example.com',
            position: 'CEO',
            photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            name: 'Jane Smith',
            email: 'mRd8O@example.com',
            position: 'CTO',
            photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
            name: 'Alice Johnson',
            email: 'erqwerfasdf@example.com',
            position: 'CFO',
            photo: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
            name: 'Bob Brown',
            email: 'oshidwvaiovnoan@example.com',
            position: 'COO',
            photo: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
            name: 'Charlie Davis',
            email: 'askjcbaidfbv0iw@example.com',
            position: 'CMO',
            photo: 'https://randomuser.me/api/portraits/men/5.jpg',
        },
        {
            name: 'Diana Evans',
            email: 'valnvaoifnva@example.com',
            position: 'CIO',
            photo: 'https://randomuser.me/api/portraits/women/6.jpg',
        },
        {
            name: 'Ethan Foster',
            email: 'dovcnaoivnaofv@example.com',
            position: 'CTO',
            photo: 'https://randomuser.me/api/portraits/men/7.jpg',
        },
        {
            name: 'Fiona Green',
            email: 'dvawddfwdv@example.com',
            position: 'CFO',
            photo: 'https://randomuser.me/api/portraits/women/8.jpg',
        },
        {
            name: 'George Harris',
            email: 'wadvavav@example.com',
            position: 'COO',
            photo: 'https://randomuser.me/api/portraits/men/9.jpg',
        },
    ];

    return (
        <FlatList
            style={{ width: '100%', padding: 10 }}
            data={data}
            renderItem={({ item }) => (
                <ContactItem contact={item} />
            )}
            keyExtractor={(item) => item.email}
            nestedScrollEnabled={true}
        />
    );
}