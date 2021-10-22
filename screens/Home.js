import React, { useState } from "react";
import {  View, Text, FlatList, TouchableOpacity, Image, SafeAreaView, ScrollView, } from "react-native"; 
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {
 

  const [heartNames, setHeartNames] = useState([
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          ])

   const heart = (id) => {
    return <Ionicons
            
            name={heartNames[id]}
            size={24}
            color="orange"
            style={{ marginLeft: 80 }}

            
          />;
  }

  const [list, setList] = useState([
    { name: "All", key: "1" },
    { name: "Road Bike", key: "2" },
    { name: "Mountain", key: "3" },
    { name: "Urban", key: "4" },
  ]);

  {
    
  }

const updateHeart = (id) => {
  console.log(id);

  
  let updatedList = heartNames.map((item,index) => 
    {
      if (index == id){
        if (heartNames[index] == "heart-outline"){
          return "heart";
        }
        else
        {
          return 'heart-outline';
        }
         
      }
      return item;  
    });

  setHeartNames( updatedList); 
}

  const PRODUCT = (props) => {
    return (
      <View
        style={{
          height: 250,
          width: 150,
          backgroundColor: "rgb(224,224,224)",
          padding: 20,
          marginTop: 30,
          borderRadius: 20,
          marginLeft: 20,
          position: "relative",
          flexDirection: "column",
        }}
      >
        
        <TouchableOpacity onPress={()=>updateHeart(
        props.id)
        }>
          {heart(props.id)}
        </TouchableOpacity>

       
        
          <Image
            style={{ alignItems:"center", justifyContent:"center", marginTop:10, marginBottom:10, height: 130, maxWidth: 100, borderRadius:20 }}
            source={{uri:props.image}}
            
          />
        

       
        <Text>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "orange" }}>$</Text>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            {props.price}
          </Text>
        </View>
      </View>
    );
  };

  {
   
  }
  return (
      
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="menu-outline" size={24} color="black" />

        
          <FontAwesome name="motorcycle" size={24} color="black" />
     

        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications" size={20} color="black" />
        </View>
      </View>

     
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: "grey" }}>
          The World's{" "}
          <Text style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}>
            Best Bike
          </Text>
        </Text>
      </View>

      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 27,
        }}
      >
        Categories
      </Text>




     
      <View
        style={{ borderRadius: 10, marginTop: 10, flexDirection: "column" }}
      >
        <FlatList
          horizontal={true}
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10,
                  padding: 20,
                  borderRadius: 10,
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>




     
      
      <SafeAreaView style={{height:570}}>
      <ScrollView >
      <View style={{ flexDirection: "row" }}>
        
          
          <PRODUCT
            title="Beef parte"
            image="https://cdn.thecoolist.com/wp-content/uploads/2016/08/Electric-or-E-Bikes-types-of-bicycle-960x640.jpeg"
            id={0}
            price="1,700.00
            "
          />
          <PRODUCT
          id={1}
            price="1,500.00"
            title="Circus"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ordinary_bicycle01.jpg/220px-Ordinary_bicycle01.jpg"
          />
          
        
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={2} price="1,200.00" title="BMX" image="https://i.pinimg.com/736x/5f/88/61/5f88611d3006acc039a28ac738990468.jpg" 
        />
        <PRODUCT id={3} price="980.00" title="Baddest" image="https://ep1.pinkbike.org/p4pb11269396/p4pb11269396.jpg" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={4} price="6,400.00" title="Batman" image="https://img.etimg.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg" />
        <PRODUCT id={5} price="12,180.00" title="KFC" image="https://thumbs.dreamstime.com/z/kfc-online-food-order-delivery-bike-kfc-online-food-order-delivery-bike-219801816.jpg" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={6} price="22,000.00" title="Alele" image="https://media.4rgos.it/i/Argos/1321-m007-25-01-bikes-8863311?maxW=768&qlt=75&fmt.jpeg.interlaced=true" />
        <PRODUCT id={7} price="400.00" title="Dirt Bike" image="http://pulpmx.com/app/uploads/2020/09/2eBnLc5A.jpeg" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={8} price="41,500.00" title="School girl" image="https://image.made-in-china.com/2f0j00wVGrDuJnSdgO/Children-s-Bicycle-6-8-10-12-15-Years-Old-Stroller-Girl-s-16182022-Inch-Primary-and-Middle-School-Student-Bike.jpg" />
        <PRODUCT id={9} price="2,000.00" title="Tour de france" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXGgSy8NXmMqgukQ05vO6xnNTDqE90Jaln1FLPy9SpClztpbBX8zofGSjAYnNHCCquec&usqp=CAU" />
      </View>
      </ScrollView>
    </SafeAreaView>

    

    <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80,position:'absolute', bottom:0}}>
    <View style={{flexDirection:"row"}}>
    <Entypo name="home" size={30} color="orange" style={{marginTop:20, marginLeft:30}} />

        <FontAwesome name="microphone" size={30} color="white" style={{
        marginTop:1,
         marginLeft:120,
         backgroundColor:"black",
         padding:15,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Cart")
            }}>
         <SimpleLineIcons name="bag" size={25} color="black" style={{marginLeft:110, marginTop:30}} />
        </TouchableOpacity>
    </View>
    
        
    </View> 
    </View>
   


    
    
  );
}
