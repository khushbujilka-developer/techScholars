import { StyleSheet } from "react-native";

export default StyleSheet.create({
    errorView: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center" },
    errorMsg: {
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center"
    },loadingMsg: {
        fontWeight: "600",
        fontSize: 18,
        textAlign: "center",
        marginTop: 10
    },
    loaderView: { 
        backgroundColor: "rgba(0,0,0,0.2)",
        flex: 1, alignItems: "center", justifyContent: "center",
    },
})