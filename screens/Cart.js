import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cart({navigation}){

    const CartItem = (props) => {
        
    return (
            <View style={{flexDirection:'row'}}>

            <Image 
            style={{
                padding:40,
                backgroundColor:'rgb(224,224,224)',
                width:100, 
                height:100, 
                marginLeft: 30,
                marginTop:40,
                borderRadius:10
                }}

            source={{uri:props.image}}
            />

            
            <View style={{flexDirection:'column'}}>

            
            <Text style={{marginTop:50, marginLeft:30, fontWeight:'bold', fontSize:20}}>{props.title}</Text>
            <Text style={{marginTop:10, marginLeft:30}}>{props.description}</Text>
        <Text style={{marginTop:10, marginLeft:30, color:"orange"}}>$<Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>{props.price}</Text></Text>
                
            </View>

            <View style={{flexDirection:'column'}}>
            <EvilIcons name="trash" size={24} color="rgb(204,102,0)"  style={{marginTop:50, marginLeft:70}}/>

            <View style={{flexDirection:"row"}}>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{marginTop:30}} />
            </TouchableOpacity>
            <Text style={{marginTop:30, marginLeft:20, fontWeight:'bold', fontSize:20}}>1</Text>
            <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(204,102,0)" style={{marginTop:29, marginLeft:20}} />
            </TouchableOpacity>
            </View>
        </View>
        </View>
       

      
    )}


    const {goBack} = navigation;
    return (
        
        
        <View style={{flex:1}}>
    <View style={{marginTop:70, marginLeft:20, flexDirection:'row'}}>
        <TouchableOpacity onPress= {()=>goBack()
        }>
        <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <View style={{flexDirection:'column'}}>
        <Text style={{
            marginLeft: 100,
            fontSize:24,
            fontWeight:"bold"
        }}>
            Cart List
        </Text>
        <Text style={{marginLeft:120}}>(3 items)</Text>
       
        </View>   
    </View>

    <View>
    <CartItem description="Mountain Bike" price="41,700.00" title="School girl" image="https://image.made-in-china.com/2f0j00wVGrDuJnSdgO/Children-s-Bicycle-6-8-10-12-15-Years-Old-Stroller-Girl-s-16182022-Inch-Primary-and-Middle-School-Student-Bike.jpg" />
    <CartItem description="Urban Bike" price="12,180.00" title="KFC" image="https://thumbs.dreamstime.com/z/kfc-online-food-order-delivery-bike-kfc-online-food-order-delivery-bike-219801816.jpg" />
    <CartItem description="Road Bike" price="400.00" title="Dirt Bike" image ="http://pulpmx.com/app/uploads/2020/09/2eBnLc5A.jpeg" />
    </View>

   <View style={{margin:7, borderRadius:30, padding:50, backgroundColor:"rgb(160,160,160)", alignItems:"center",justifyContent:"space-between", flexDirection:"row"}}>
   <Text style={{justifyContent:"space-between", fontSize:20, color:"grey"}}>Sub-Total </Text>
   <Text style={{justifyContent:"space-between",  fontSize:25}}>$54,280.00</Text>
   </View>
   
       
        <TouchableOpacity>
        <View style={{backgroundColor:"rgb(204,102,0)", padding:20, margin:5, borderRadius:15}}>
        <Text style={{marginTop:0, fontWeight:'bold', color:"white", textAlign:'center', fontSize:17}}>Proceed to Checkout</Text>
        
        </View>
        </TouchableOpacity>

       
        <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80, bottom:0}}>
    <View style={{flexDirection:"row"}}>

    <TouchableOpacity onPress={()=>{
        navigation.navigate("Home")
    }}>
    <Ionicons name="home-outline" size={30} color="black" style={{marginTop:20, marginLeft:30}} />
</TouchableOpacity>
        <FontAwesome name="microphone" size={30} color="white" style={{
        marginBottom:0,
         marginLeft:120,
         backgroundColor:"black",
         padding:17,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity>
         <FontAwesome5 name="shopping-bag" size={26} color="orange"  style={{marginLeft:110, marginTop:20}} />
        </TouchableOpacity>
    </View>   
    </View> 
    </View>
    )
}