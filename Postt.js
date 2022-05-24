import { StatusBar } from 'expo-status-bar';
import { Text, View,TouchableOpacity } from 'react-native';
import { EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import styles from './Styles';

export default function Postt({word}) {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      <View style={styles.postt}>
      <Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>
      #inspiration #inspirationalquotes 
      #motivation #motivationalquotes 
      #success #successquotes #successmindset
       #successful #positivevibes #positivity 
       #positivequotes #positivethinking #life #quotes 
       #quoteoftheday #quotestagram #quotestoliveby 
       #quotesaboutlife #lawofattraction #lawofattractionquotes
        #truesayings #truequotes #wisequotes #bestquotes #bestquotesever
      </Text>
      </View>
        <View style={styles.countContainer}>
            <Text>{count} likes                                               0 comments</Text>
        </View>
        <View style={styles.likecommentshare}>
           <TouchableOpacity style={styles.licosh} onPress={onPress}>
                 <EvilIcons name="like" size={30} color="blue"/>
                 <Text style={styles.likestyle}>like</Text>
            </TouchableOpacity>

             <MaterialCommunityIcons name="comment" size={20} color="black"/>
          
             <MaterialCommunityIcons name="share-outline" size={24} color="black">
               <Text style={styles.licosh}>Share
               </Text>
             </MaterialCommunityIcons>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}