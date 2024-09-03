import { StyleSheet } from "react-native";
import colors from "../helpers/colors";

export default StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        textTransform: "capitalize",
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 10
    },
    header: {
        backgroundColor: colors.sky,
        marginBottom: 20,
        padding: 10
    },
})