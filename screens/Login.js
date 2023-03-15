import React from "react";
import { View, Text, TouchableOpacity, TextInput, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import firebase from "firebase/compat/app";
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={tw` bg-green-400 h-full flex items-center justify-center`}>
      <View
        style={tw`flex items-center justify-center shadow-lg bg-lime-300 p-5 rounded-lg`}
      >
        <Text style={tw`text-2xl web:text-4xl font-bold text-white mb-5 `}>
          Farm-Connect
        </Text>
        <View style={tw`flex flex-row`}>
          <Ionicons
            name="md-mail"
            size={34}
            style={tw`h-11 web:h-12 p-1 rounded-l-md relative bg-white text-gray-500 shadow-sm`}
          />
          <TextInput
            placeholder="Email"
            
            style={tw`bg-white  rounded-r-lg p-2 web:p-4 w-64 web:w-98 mb-5 focus:outline-none shadow-sm`}
          ></TextInput>
        </View>

        <View style={tw`flex flex-row`}>
          <Ionicons
            name="md-lock-closed"
            size={34}
            style={tw`h-11 web:h-12 p-1 rounded-l-md relative bg-white text-gray-500 shadow-sm`}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={tw`bg-white  rounded-r-lg p-2 web:p-4 w-64 web:w-98 mb-5 focus:outline-none shadow-sm`}
          ></TextInput>
        </View>

        <Text
          style={tw`web:text-lg mb-3`}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password?
        </Text>

        <TouchableOpacity
          style={tw`bg-white rounded-lg p-3 w-auto mb-5 focus:outline-none shadow-sm`}

          onPress={() => navigation.navigate("Home")}

        >
          <Text>Login</Text>
        </TouchableOpacity>

        <Text
          style={tw`web:text-lg `}
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have an account yet? SignUp
        </Text>
      </View>
    </View>
  );
};

export default Login;