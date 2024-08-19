import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fetchExercisesByBodyPart } from "../services/exerciseDbService";
import Ionicon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

const ExercisesScreen = () => {
  const navigation = useNavigation();

  const [exercises, setExercises] = useState([]);

  // to get previous screen values for particulat clicked card
  const routes = useRoute();
  const { name, image } = routes.params;

  useEffect(() => {
    if (routes) getExercises(name);
  }, [routes]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    setExercises(data);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <StatusBar style="light" />
      <Image
        source={image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute top-14 left-6 rounded-full bg-rose-500 items-center flex justify-center pr-1"
        style={{ height: hp(5.5), width: hp(5.5) }}
      >
        <Ionicon name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises for particular body parts */}
      <View className="mt-4 mx-4 space-y-3">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {name} exercises
        </Text>

        <View className="mb-10">
          <ExerciseList exerciseData={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ExercisesScreen;
