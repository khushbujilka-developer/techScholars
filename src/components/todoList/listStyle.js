import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";
import { height, width } from "../../helpers/dimensions";

export default StyleSheet.create({
    container: {
        paddingVertical: 30,

    },
    head: {
        marginBottom: 10, borderBottomWidth: 1,
        paddingBottom: 20,
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    inputView: {
        width: width / 2,
        height: 50,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 20,

    },
    input: {
        flex: 1,
        borderRadius: 10,
        height: 40,
        borderRadius: 10,
        marginRight: 12,
        padding: 10,
        borderWidth: 1,
    },
    row: {
        flexDirection: "row",
    },
    btnText: {
        textDecorationLine: "underline",
        textTransform: "capitalize",
        fontWeight: "600",
        fontSize: 16,
    },
    btnView: {
        paddingVertical: 14
    },
    deleteBtn: {
        marginLeft: 10, height: 30, padding: 5
    },
    name: {

        fontSize: 18,
        textTransform: "capitalize"
    },
    modal: {
        height: height / 3,
        borderRadius: 10,
        width: width / 1.3,
        backgroundColor: colors.white,
        // alignItems: "center",
        padding: 20,
    },
    
    modalContent:
    {
        flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.4)"

    },
})