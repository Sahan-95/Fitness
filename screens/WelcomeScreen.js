import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute"
        source={require("../assets/images/welcome.png")}
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wider"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wider"
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("home");
            }}
            className="bg-rose-500 flex rounded-full items-center justify-center mx-auto border-[2px] border-neutral-200"
            style={{ height: hp(7), width: wp(80) }}
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="fonnt-bold text-white tracking-widest"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;
