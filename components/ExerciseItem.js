import React from 'react';
import {Platform, Pressable, Text, StyleSheet, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const ExerciseItem = ({ id, title, description, icon }) => {
    const navigation = useNavigation();

    const onPressShowExercise = () => {
        navigation.navigate('Exercise Details', {id: id})
    }

    return (
        <View style={styles.exercise}>
            <Pressable
                style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
                onPress={onPressShowExercise}
            >
                <View style={styles.innerContainer}>
                    <FontAwesome5 name={icon} size={40} color='#1e262d'/>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    exercise: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 50,
        elevation: 4,
        backgroundColor: "#dfdca9",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: '#1e262d',
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonPressed: {
        opacity: 0.5,
        backgroundColor: '#203239'
    },
});

export default ExerciseItem;