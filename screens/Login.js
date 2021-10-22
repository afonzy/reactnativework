import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default function Login({navigation}) {
  return <View 
   style={{ 
     flex: 1, 
     justifyContent: "center", 
     backgroundColor: 'white', 
     alignItems: "center"}}
     >

    <Image 
    style={{
      width:200,
      height:200,
      borderRadius: 20,
      marginBottom: 50,
      transform: [{rotate: '45deg'}]
    }}
    source={{
      uri: "https://e0.365dm.com/21/10/768x432/skysports-marcus-rashford-manchester-united_5547264.jpg?20211015140544"}}
       />
    <Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 24, }}>Welcome to </Text>
    <Text style= {{color: 'black', fontSize: 30, fontWeight: '600'}}>Power Bike Shop</Text>
    <TouchableOpacity 
       style={{
         backgroundColor: "#e3e3e3", 
         flexDirection: "row",
         alignItems: "center",
         padding: 10, 
         paddingHorizontal: 60,
         borderRadius: 10, 
         marginTop: 20
        }}
    >
      <AntDesign name="google" size={24} color="rgb(256,100,10)" />
      <Text style={{fontSize: 17, marginLeft: 15}}>Login with Gmail</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("Home")
    }}
       style={{
         backgroundColor: "black", 
         flexDirection: "row",
         alignItems: "center",
         padding: 10, 
         paddingHorizontal: 60,
         borderRadius: 10, 
         marginTop: 20
        }}
    >
      <AntDesign name="apple1" size={24} color="white" />
      <Text style={{fontSize: 17, color: "white", marginLeft: 15 }}>Login with Apple
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text style={{marginTop: 10, fontWeight: '500', color: 'grey'}}>
      Not a member?{" "}
       <Text style={{color: 'orange', fontWeight: 'bold'}}> Signup</Text>
      </Text>
    </TouchableOpacity>
    
    


  </View>;
}
