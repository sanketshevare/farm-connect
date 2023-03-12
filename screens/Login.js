import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={tw` bg-blue-400 `}>
      <Text>This is a Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Move to Signup Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

const Login = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={tw` bg-blue-400 `}>This is a Login Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text>Move to Signup Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login
