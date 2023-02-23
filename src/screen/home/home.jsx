import { View, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { CustomText } from "../../component";
import { FONTS_SIZE, FONTWEIGHT } from "../../constant";
import { HomeStyle } from "../../styles";

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
      <View style={HomeStyle.container}>
        <CustomText style={HomeStyle.title}>Yala IT Solution</CustomText>
        {isHovered && <CustomText style={HomeStyle.subTitle}>Hello</CustomText>}
      </View>
    </TouchableHighlight>
  );
};
