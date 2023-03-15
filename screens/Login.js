import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCDGIjQLRFvCuqrIbPorhLIhzIhCGJwPps",
  authDomain: "farm-connect-a2669.firebaseapp.com",
  projectId: "farm-connect-a2669",
  storageBucket: "farm-connect-a2669.appspot.com",
  messagingSenderId: "441993903725",
  appId: "1:441993903725:web:92b5337ab638ea9c8d8964",
  measurementId: "G-12FV0GCEKS"
};
console.log(firebase.initializeApp(firebaseConfig));


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
