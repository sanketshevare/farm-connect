import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import firebase from "firebase/compat/app";

console.log(firebase);

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={tw` bg-blue-400 h-full`}>
     
      <View style={tw`flex items-center justify-center p-2 top-50`}>
      <Text
      style={tw`text-2xl font-bold text-white`}
      >This is Regsiter Screen</Text>
        <TextInput 
        placeholder="Email"
        style={tw`bg-white rounded-lg p-2 web:p-3 w-64 mb-5 focus:outline-none`}
        ></TextInput>
       
        <TextInput 
        placeholder="Password"
        style={tw`bg-white rounded-lg p-2 w-64 mb-5`}
        ></TextInput>
    
      <TouchableOpacity 
        style={tw`bg-white rounded-lg p-3 w-auto mb-5 focus:outline-none`}
      
      onPress={() => navigation.navigate("SignUp")}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Login;