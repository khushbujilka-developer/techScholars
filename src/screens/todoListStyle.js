import { StyleSheet } from "react-native";
import { width } from "../helpers/dimensions";

export default StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    item: {
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 10,
    },
    todoView:{ flex: 1, borderRightWidth: 1, paddingRight: 10 },
    completedView:{ flex: 1, marginLeft: 10 },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    input: {
        flex: 1,
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
        marginRight: 12,
        padding: 10,
    },
    addTaskView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
})