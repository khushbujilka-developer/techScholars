import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";

export default StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: 80,
        padding: 15,
        backgroundColor: colors.sky
    },
    titleStyle: {
        color: colors.black,
        fontWeight: "600",
    },
})