import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Project_1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.container_2}>
        <Text  >Hello World</Text>
        </View>
        <View>
          
        </View>
      
    </View>
  )
}

export default Project_1

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    container_2:{
        backgroundColor:'aqua',
        color:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:30,
        width:100
    }
})