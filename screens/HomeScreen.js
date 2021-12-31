import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>this is home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
});
