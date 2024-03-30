import React from 'react';
import ExerciseList from "../components/ExerciseList";
import {exercises} from "../data/dummy-data";
import {SafeAreaView, StyleSheet} from "react-native";

const ExercisesOverview = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ExerciseList items={exercises}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141e27",
    },
})

export default ExercisesOverview;