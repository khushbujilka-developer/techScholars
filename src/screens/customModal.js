import React, { useState } from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './customModalStyle'
import Modal from "../components/commonComponents/modal";

const CustomeModal = props => {

    const [showModal, setShowModal] = useState(false)

    const onPressCancel = props => {
        Alert.alert("onPressCancel")
    }

    const onPressConfirm = props => {
        Alert.alert("onPressConfirm")
    }

    return (
        <SafeAreaView style={styles.container}>

            <Modal
                isVisible={showModal}
                onClose={setShowModal}
                title={"Review your Detail"}
                onPressConfirm={onPressConfirm}
                onPressCancel={onPressCancel}
            />
            <TouchableOpacity onPress={() => setShowModal(true)} style={styles.btn}>
                <Text style={styles.name}>Show modal</Text></TouchableOpacity>
        </SafeAreaView>
    )
}
export default CustomeModal