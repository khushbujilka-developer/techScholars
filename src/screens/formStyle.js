import { StyleSheet } from "react-native";
import { width } from "../helpers/dimensions";

export default StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flex: 1,
    },
    button: {
        alignSelf: "center", width: width - 40,
        position: "absolute",
        bottom: 0
    }
})