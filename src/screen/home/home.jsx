import { View, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { CustomText } from "../../component";
import { HomeStyle as hs } from "../../styles";

export const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <TouchableHighlight
      underlayColor="transparent"
      onShowUnderlay={handleHover}
      onHideUnderlay={handleHover}
      onPress={() => alert("Yala IT Solution")}
    >
      <View style={hs.container}>
        <CustomText style={hs.title}>Yala IT Solution</CustomText>
        {isHovered && <CustomText style={hs.subTitle}>Hello</CustomText>}
      </View>
    </TouchableHighlight>
  );
};
