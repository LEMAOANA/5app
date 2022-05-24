import { StyleSheet, } from 'react-native';

const Styless = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
  
    itemStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 15,
      width:100,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
      color:'BLUE',
    },
    post:{
      height: 500,
      backgroundColor:'#f5f5f5',
      justifyContent:'flex-start',
      margin: 12,
    },
    bigsettings:{
      height:70,
      backgroundColor:'blue',
      margin: 12,
      alignItems:'center',
     justifyContent: 'center',
    },
    settings:{
      height:20,
      width:'100%',
      backgroundColor:'blue',
      margin: 12,
      alignItems:'center',
     justifyContent: 'space-between',
     flexDirection: 'row',
    },
    postText:{
      color:'black',
      fontSize:15,
      fontWeight:'bold',
      margin:10,
    },
    postt:{
      height: 200,
      backgroundColor:'purple',
      justifyContent:'flex-start',
      margin: 12,
    },
    link:{
      color:'blue',
      fontSize: 15,
      fontWeight:'bold',
    },
    image:{
      width: 50,
      height: 50,
      borderRadius:80,
      marginRight:10,
      alignItems:'flex-start'
        },
    postpic:{
      height:'50%',
      width: '100%',
      marginTop:5,
    },
    profile:{
    padding:10,
      flexDirection:'row',
    },
    likecommentshare:{
      height:40,
      backgroundColor:'white',
      margin: 12,
      width:'98%',
     justifyContent: 'space-between',
     flexDirection: 'row',
     alignItems:'center',
    },
    licosh:{
      fontSize: 15,
      alignItems:'center',
      flexDirection:'row'
    },
    countContainer: {
      paddingTop:10,
      justifyContent:'space-between',
      flexDirection:'row',
      height:20,
    },
    likestyle:{
      color:'blue',
    }
  });
  export default Styless;  