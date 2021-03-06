import React from "react";

import {
    StyleSheet,
    Text,
    Alert,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import Home from "./Home";

export default function BottomBar() {
    const toggleOpen = () => {};
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                // backgroundColor: "#f1efef",
            }}
        >
            {/* "#f1efef" */}
            <View
                style={{
                    position: "absolute",
                    alignSelf: "center",
                    // backgroundColor: "#4387fd",
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 15,
                    zIndex: 10,
                }}
            >
                <TouchableWithoutFeedback onPress={toggleOpen}>
                    <View>
                        <AntDesign
                            name="pluscircle"
                            size={60}
                            color="#4387fd"
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View
                style={{
                    position: "absolute",
                    backgroundColor: "#f1efef",
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {
                        height: 3,
                        width: 3,
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: "100%",
                    height: 60,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Link to="/">
                        <MaterialIcons
                            name="favorite"
                            size={24}
                            color="black"
                        />
                    </Link>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        // alignItems: "center",
                        justifyContent: "center",
                        marginStart: 20,
                    }}
                >
                    <Link to="/live">
                        <MaterialIcons name="live-tv" size={24} color="black" />
                    </Link>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginStart: 65,
                    }}
                >
                    <Link to="/store">
                        <Foundation
                            name="shopping-bag"
                            size={24}
                            color="black"
                        />
                    </Link>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Link to="/home">
                        <FontAwesome5 name="gifts" size={24} color="black" />
                    </Link>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,
    },
});
