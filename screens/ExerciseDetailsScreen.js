import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseDetailsScreen = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const { itemData } = routes.params;

  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{
            uri: itemData.gifUrl,
          }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="absolute items-center flex justify-center mx-2 mt-2 right-0"
        style={{ height: hp(5.5), width: hp(5.5) }}
      >
        <Anticons name="closecircle" size={hp(4)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}
      <ScrollView
        className="mx-4 space-y-2 mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          style={{ fontSize: hp(2.5) }}
          className="font-semibold text-neutral-700 tracking-wide"
        >
          {itemData?.name}
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(400).delay(100).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide pt-3"
        >
          Equipment{" "}
          <Text className="font-bold text-neutral-800">
            {itemData?.equipment}
          </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(400).delay(200).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles :{" "}
          <Text className="font-bold text-neutral-800">
            {itemData?.secondaryMuscles.join(",")}
          </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(400).delay(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Target{" "}
          <Text className="font-bold text-neutral-800">{itemData?.target}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(400).delay(400).springify()}
          style={{ fontSize: hp(2.3) }}
          className="font-semibold text-neutral-700 tracking-wide pt-5"
        >
          Instructions
        </Animated.Text>

        {Array.isArray(itemData.instructions)
          ? itemData.instructions.map((instruction, index) => {
              return (
                <Animated.Text
                  entering={FadeInDown.duration(400)
                    .delay((index + 6) * 100)
                    .springify()}
                  key={index}
                  style={{ fontSize: hp(1.7) }}
                  className="text-neutral-600"
                >
                  {instruction}
                </Animated.Text>
              );
            })
          : typeof itemData.instructions === "string"
          ? itemData.instructions.split(",").map((instruction, index) => {
              return (
                <Animated.Text
                  entering={FadeInDown.duration(400)
                    .delay((index + 6) * 100)
                    .springify()}
                  key={index}
                  style={{ fontSize: hp(1.7) }}
                  className="text-neutral-600"
                >
                  {instruction.trim()}
                </Animated.Text>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
};

export default ExerciseDetailsScreen;
