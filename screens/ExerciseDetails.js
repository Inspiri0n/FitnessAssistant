import React, {useLayoutEffect} from 'react';
import {ScrollView, Text, StyleSheet, View, SafeAreaView} from "react-native";
import {exercises} from "../data/dummy-data";
import {FontAwesome5} from "@expo/vector-icons";

const ExerciseDetails = ({ route, navigation }) => {
    const exerciseId = route.params.id;

    const selectedExercise = exercises.find(el => el.id === exerciseId);

    useLayoutEffect(() => {
        navigation.setOptions({ title: selectedExercise.title })
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <FontAwesome5 style={styles.icon} name={selectedExercise.icon} size={150} color='#dfdca9'/>
                <Text style={styles.title}>{selectedExercise.title}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{selectedExercise.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#141e27',
    },
    icon: {
        marginBottom: 30,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        color: '#dfdca9',
        textAlign: 'center',
        marginBottom: 20
    },
    descriptionContainer: {
        backgroundColor: '#203239',
        padding: 15,
        borderRadius: 16
    },
    description: {
        color: '#dfdca9',
        fontSize: 17
    }
})

export default ExerciseDetails;