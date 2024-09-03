import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from './modalStyle'
import Button from "./button";
import { width } from "../../helpers/dimensions";
import Animated, { runOnJS, ZoomIn, ZoomOut } from "react-native-reanimated";

export default Modal = props => {
    const {
        isVisible,
        onClose,
        title,
        BodyComponent,
        onPressConfirm,
        onPressCancel,
        contentStyle
    } = props

    const [isClosed, setIsClosed] = useState(false)

    const onRequestClose = () => {
        setIsClosed(true)
    }

    const onConfirm = value => {
        onPressConfirm(value)
        setIsClosed(true)
    }

    const onCancel = value => {
        onPressCancel(value)
        setIsClosed(true)
    }

    const onEndCallBack = () => {
        onClose(false)
    }

    const animationEnd = ZoomOut.withCallback((finished) => {
        'worklet';
        if (finished) {
            runOnJS(onEndCallBack)()
        }
    });

    const AnimatedModal = props => {
        if (isClosed) {
            return null
        }
        return (
            <Animated.View
                entering={ZoomIn}
                exiting={animationEnd}
                style={[styles.content, contentStyle]}>
                <Text style={styles.title}>{title}</Text>
                {
                    BodyComponent
                        ? <BodyComponent />
                        : <View style={styles.bodyView}>
                            <Text>Body</Text>
                        </View>
                }

                <View style={styles.row}>
                    <Button style={{ width: width / 3 }} onPress={onConfirm} title={"Confirm"} />
                    <Button style={{ width: width / 3 }}  onPress={onCancel} title={"Cancel"} />
                </View>
            </Animated.View>
        )
    }


    if (!isVisible) {
        return null
    }


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onRequestClose}>
                <View style={{ flex: 1 }}>
                    <AnimatedModal />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}