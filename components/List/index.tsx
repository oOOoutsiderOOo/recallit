import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList, TextInput, Button } from "react-native";

const initialList = [
    {
        id: "0",
        content: "Mars",
    },
    {
        id: "1",
        content: "The Wasteland",
    },
];

const List = () => {
    const [list, setList] = useState(initialList);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        setList([...list, { id: Math.random().toString(), content: newItem }]);
        setNewItem("");
    };

    const handleDelete = id => {
        setList(list.filter(item => item.id !== id));
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listRow}>
                <Text style={styles.listItem}>{item.content}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View style={styles.listContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Virtual wishlist</Text>
            </View>
            <View style={styles.addItemContainer}>
                <TextInput
                    style={styles.addItemText}
                    placeholder="Add your next experience here!"
                    value={newItem}
                    onChangeText={setNewItem}
                    placeholderTextColor={"#CCC"}
                />
                <Button title="Add" onPress={addItem} color="#4A306D" />
            </View>
            <FlatList data={list} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingTop: 35,
        backgroundColor: "#3a0ca3",
    },

    titleContainer: {
        alignItems: "center",
        marginBottom: 20,
    },

    title: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        fontWeight: "600",
    },

    addItemContainer: {
        backgroundColor: "#020f13",
        width: "100%",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },

    addItemText: {
        color: "white",
    },

    listRow: {
        backgroundColor: "#020f13",
        margin: 5,
        padding: 10,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    deleteText: {
        color: "white",
        fontWeight: "bold",
    },

    listItem: {
        color: "white",
    },
});

export default List;
