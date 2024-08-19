import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="mx-5 flex-row justify-between items-start">
        <View className="space-y-1">
          <Text
            style={{ fontSize: hp(3) }}
            className="font-bold tracking-wider text-neutral-600"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <Image
          source={require("../assets/images/avatar.png")}
          style={{ height: hp(6), width: hp(6) }}
          className="rounded-full"
        />
      </View>

      {/* Image Slider */}
      <View>
        <ImageSlider />
      </View>

      {/* Body partd */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
