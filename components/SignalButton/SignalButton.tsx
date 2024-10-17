import React from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";


type SignalButtonProps = {
  toggleComponent: () => void;
}

const SignalButton: React.FC<SignalButtonProps> = ({ toggleComponent }) => {
// export function SignalButton({toggleComponent}) {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        source={require("../../assets/cropped-Exposicao-Batman-75-anos-Batsinal.jpg")}
        style={{
          width: '100%',  
          height: '100%', 
          resizeMode: 'contain',  }}
      />
      <TouchableOpacity onPress={toggleComponent} 
        style={{
          width: "40%",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 3,
          borderRadius: 8,
          margin: 15,
          padding: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Chamar Herói
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignalButton;