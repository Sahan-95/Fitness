import { View, FlatList } from "react-native";
import React from "react";
import ExerciseCards from "./ExerciseCards";

const ExerciseList = ({ exerciseData }) => {
  return (
    <View>
      <FlatList
        data={exerciseData}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCards index={index} item={item} />
        )}
      />
    </View>
  );
};

export default ExerciseList;
