import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import StartScreen from "./screens/StartScreen";
import ExercisesOverview from "./screens/ExercisesOverview";
import ExerciseDetails from "./screens/ExerciseDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerStyle: {backgroundColor: '#141e27'},
                      headerTintColor: '#dfdca9'
                  }}
              >
                  <Stack.Screen
                      name='FITNESS ASSISTANT'
                      component={StartScreen}
                  />
                  <Stack.Screen
                      name='EXERCISES'
                      component={ExercisesOverview}
                  />
                  <Stack.Screen
                      name='Exercise Details'
                      component={ExerciseDetails}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141e27",
    paddingTop: Constants.statusBarHeight,
  },
})
