import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import  BatForm  from "../../components/BatForm/BatForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Switch, Text, TouchableOpacity, View } from "react-native";
import SignalButton from "../../components/SignalButton/SignalButton";

export const Home = () => {
  const [showBatSinal, setShowBatSinal] = useState(true);

  const toggleComponent = () => {
    setShowBatSinal(!showBatSinal);
  };

  return (
    <SafeAreaView style={{flex: 1,}}>
      <StatusBar />
      <View>
      {showBatSinal ? (
        <SignalButton toggleComponent={toggleComponent} />  
      ) : (
        <BatForm toggleComponent={toggleComponent}  />  
      )}
    </View>
    </SafeAreaView>
  );
};
