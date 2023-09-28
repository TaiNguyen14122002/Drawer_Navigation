import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'



const Project_3 = () => {

  
  
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'red', borderRadius:10}}>
        <Button color='white' title='Say Hello' Text="Hello!" onPress={()=>alert("Hello!")}/>
      </View>
      <View style={{backgroundColor:'#4dc2c2', marginTop:20, borderRadius:10}}>
        <Button color='white' title='Say Goodbye' Text="Goobye!" onPress={()=>alert("Goodbye!")}/>
      </View>
    </View>
  )
}

export default Project_3

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    color:'#fff'
  }
})