import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project_5 = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'red', padding:20}}>
        <Text>Hình 1</Text>
      </View>

      <View style={{backgroundColor:'aqua', padding:20}}>
        <Text>Hình 2</Text>
      </View>

      <View style={{backgroundColor:'green', padding:20}}>
        <Text>Hình 3</Text>
      </View>
    </View>
  )
}

export default Project_5

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'space-around', 
    alignItems:'center', 
    flexDirection:'row'
  }
})