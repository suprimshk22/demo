import { StyleSheet } from "react-native";
import { FONTS_SIZE, THEME, FONTWEIGHT } from "../../constant";

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.primary_color,
  },
  subTitle: {
    fontSize: FONTS_SIZE.min,
    fontWeight: FONTWEIGHT.REGULAR,
    color: THEME.defaultText,
    textAlign: "center",
  },
  title: {
    fontSize: FONTS_SIZE.mid,
    fontWeight: FONTWEIGHT.BOLD,
    color: THEME.text.normal,
  },
  wrapper: {
    flex: 1,
    backgroundColor: THEME.primary_color,
    alignItems: "center",
    justifyContent: "center",
  },
});
