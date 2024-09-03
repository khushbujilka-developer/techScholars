import { StyleSheet } from "react-native";
import { width } from "../helpers/dimensions";
import colors from "../helpers/colors";

export default StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: colors.sky,
        height: 50, width: width / 2,
    },
    head: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    name: {
        paddingBottom: 20,
        fontSize: 16,
        fontWeight: "400",
        textTransform: "capitalize"
    },
})