import { StyleSheet } from "react-native";
import { height, width } from "../../helpers/dimensions";
import colors from "../../helpers/colors";

export default StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: "rgba(0,0,0,0.3)",
        position: "absolute",
        zIndex: 1,
        top:0,
        left:0,
        bottom:0,
        right:0,
    },
    bodyView: {
        height: width/4,
        width:  width/4,
        backgroundColor: colors.blue,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    content: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
        backgroundColor: colors.white
    },
    title: {
        marginBottom: 20,
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      
    },
})