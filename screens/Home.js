import { StyleSheet, Text, View, TextInput, ImageBackground, Image} from "react-native";
import {Button, Container, Footer, Icon, Content, FooterTab, Header, NativeBaseProvider, Pressable, HStack, Center} from "native-base";
import React, { Component } from "react";
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc";

import Blogs from "../footer/Blogs";
import Posts from "../footer/Posts";
import News from "../footer/News";

function Home() {
  const [selected, setSelected] = React.useState(1);
  return (
  <NativeBaseProvider>
      <View style = {tw`flex bg-white w-full`}>
        
        <HStack style = {tw`bg-green-400 items-center shadow-md`}>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<Ionicons name={'home'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Posts
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<Ionicons name={'globe-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Blogs
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<Ionicons name={'newspaper-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                News
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </View>
    </NativeBaseProvider>
    );
}
export default Home;