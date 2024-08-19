import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ExercisesScreen from "./screens/ExercisesScreen";
import ExerciseDetailsScreen from "./screens/ExerciseDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen
          name="exercises"
          component={ExercisesScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="exercisesDetails"
          component={ExerciseDetailsScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
