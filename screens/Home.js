import * as react from 'react';
import { Text, View, StyleSheet,ImageBackground,Image,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';


function Home({navigation}){
  
  return(
    <SafeAreaView style={styles.container}>
     <ImageBackground
      style= {{flex:1}}
      >

       <View style={styles.contentCenter}>

       <Text textAlign="center" styles={styles.textStyle}>

          <h2 style={{
            color:'blue',
            textAlign:'center'
          }}
          
          >Health Care Centre</h2>
         
<Image
        source={require('../assets/th.jpeg')}

        style={{
          width: 300,
          height: 150,
          margintop:100,
          marginBottom:50,
          paddingTop:20,

        }}
      />
      
        </Text>
        <Text>
        <Image
        source={require('../assets/th.jpeg')}

        style={{
          width: 300,
          height: 150,
          margintop:100,
          marginBottom:50,
          paddingTop:20,

        }}
      />
        </Text>
       <Text>
        <Image
        source={require('../assets/th.jpeg')}

        style={{
          width: 300,
          height: 150,
          margintop:100,
          marginBottom:50,
          paddingTop:20,

        }}
      />
        </Text>
      

      <Text textAlign="center" styles={styles.textStyle}>

          
          
      
        </Text>
    
  </View>

    </ImageBackground>
</SafeAreaView> 


   
  );
}


const styles=StyleSheet.create({
        container:{
          backgroundColor:'gray',
          flex:1

        },
        
        contentCenter:{
          justifyContent:'center',
          alignItems:'center',
        },
      
      });
export default Home;