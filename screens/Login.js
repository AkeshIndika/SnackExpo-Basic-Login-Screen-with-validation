

import * as react from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,SafeAreaView,Alert } from 'react-native';
import Constants from 'expo-constants';


function Login({navigation}){
  const [username, setText]=useState('');
  const [password, setText1]=useState('');
  
  return(
    <SafeAreaView style={styles.container}>
     <ImageBackground
      style= {{flex:1}}
      source={require('../assets/background.jpg')
      }
      style={{
          width: 330,
          height: 500,
          padding:30,
        }}
      >

       <View style={styles.contentCenter}>
      <Image
        source={require('../assets/logo.png')}

        style={{
          width: 120,
          height: 120,
          margintop:100,
          marginBottom:50,
          paddingTop:20,

        }}
      />
    <Text textAlign="center" styles={styles.textStyle}>
      <p>Wecome To The Login Page</p> 
      
    </Text>
  </View>

    <View style={styles.paddingContainer}>
    <TextInput
     style={styles.input}
    placeholder='Username'
    onChangeText={username=> setText(username)}
    defaultValue={username}
    returnKeyType="next">
    
    </TextInput>
    
   
    <TextInput 
    placeholder='Password'
    secureTextEntry
     style={styles.input}
     onChangeText={password=> setText1      (password)}
    defaultValue={password}
    returnKeyType="go">
    </TextInput>

    <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
      var uname=username;
      var pword=password;

      if(uname=="Akesh" && pword=="akesh"){
        Alert.alert('Successfully login!!');
        navigation.navigate('Home');
      }
      else{
        Alert.alert("Incorrect Username or Password");
      }
    }}>
    <Text style={styles.buttonText}>Login</Text>
    

    <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
  
    </TouchableOpacity>
 
     </TouchableOpacity>
    </View>
    </ImageBackground>
</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
  container:{
    //backgroundColor:'green',
    flex:1

  },
  paddingContainer :
  {
    padding :20,
    
  },
  contentCenter:{
    justifyContent:'center',
    alignItems:'center',
  },
 
  input:{
    height : 40,
    backgroundColor:'rgba(100,10,255,0.5)',
    color :'#FFF',
    marginBottom:20,
    fontSize:20,
    paddingHorizontal:10
  },
  buttonContainer :{
    backgroundColor:'blue',
    paddingVertical:15
  },
  buttonText: {
    textAlign:'center',
    color:'#FFFFFF',
  }
});
export default Login;