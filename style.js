import { Platform } from "react-native";

export const BG_COLOR = "#203239";
export const HIGHLIGHT_BG_COLOR = "#dfdca9";

export const TEXT = {
  color: "#c5c5c5",
  textAlign: "center",
};

export const TEXT_LABEL = {
  fontSize: 15,
  textAlign: "center",
  color: "#dfdca9",
};

export const TEXT_VALUE = {
  ...TEXT,
  fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  fontSize: 35,
  lineHeight: 55,
  fontWeight: "bold",
};

export const ROW = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
};

export const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};

export const BOX = {
  flex: 1,
  backgroundColor: BG_COLOR,
  padding: 15,
  borderRadius: 50,
};
