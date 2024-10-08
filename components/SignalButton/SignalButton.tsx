import React from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";

import { styles } from "./SignalButtonStyles";

export function SignalButton() {
  return (
    <View style={styles.background}>
      <Image
        style={styles.batman}
        source={require("../../assets/cropped-Exposicao-Batman-75-anos-Batsinal.jpg")}
      />
    </View>
  );
}
