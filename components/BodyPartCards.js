import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyPartCards = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end mb-4 p-4"
        onPress={() => {
          navigation.navigate("exercises", {
            // To pass particluar clicked card to child component
            name: item?.name,
            image: item?.image,
          });
        }}
      >
        <Image
          source={item.image}
          resizeMethod="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: wp(52) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-[35px]"
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BodyPartCards;
