import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,TextInput,SafeAreaView,Button, TouchableOpacity  } from 'react-native';
import { AntDesign,Entypo,MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Postt from './Postt';
import styles from './Styles';

export default function App() {
    const [mypost, setmypost] = useState('');
    const [list, setlist] = useState([]);

    function dopost(anytime){
      return <Postt mypost={anytime.mypost}/>
    }
    function showpost(){
      setlist([{mine:mypost}, ...list])
    }

  
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
   
        <View style={styles.bigsettings}>
          <Text style={{fontWeight:'bold',fontSize:25,color:'white'}}>FaceBook</Text>
          <View  style={styles.settings}>
           <Entypo name="chevron-small-left" size={40} color="white" />
           <MaterialIcons name="search" size={40} color="white"/>
           <AntDesign name="bars" size={40} color="white" />
         </View>
        </View>
       
        <View style={styles.post}>
          <View style={styles.profile}>
           <Image style={styles.image}
           source={require('./assets/lejone1.jpg')} />

           <Text> LEMAOANA LEJONE<br/> now</Text>
           <AntDesign name="ellipsis1" size={40} color="white" />
           
          </View>
          <View style={{padding: 10,fontSize: 42}}>
            <TextInput style={{height: 40, maxHeight: 100,}}
             multiline ={true}
             placeholder="what is in your mind!"
             Value={mypost} onChangeText= {setmypost}
            />
            <TouchableOpacity>
              <Button tittle='Postt' onPress={showpost}/>
            </TouchableOpacity>
            
              {list.map(word => dopost(word))}
              
        
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}