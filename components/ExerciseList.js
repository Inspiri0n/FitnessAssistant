import React from 'react';
import {FlatList, View} from "react-native";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({ items }) {
    const renderExercise = ({ item }) => {
        const exerciseProps = {
            id: item.id,
            title: item.title,
            description: item.description,
            icon: item.icon
        };

        return <ExerciseItem {...exerciseProps} />;
    };

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderExercise}
            />
        </View>
    );
}

export default ExerciseList;