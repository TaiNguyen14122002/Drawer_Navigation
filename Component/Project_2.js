import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project_2 = () => {
  const nofi = ()=>{
    alert("Đây là nút thông báo");
  }
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'black',borderRadius:10}}>
      <Button color='#fff'
        title="Thông báo"
        onPress={nofi}
      />
      </View>
      
    </View>
  )
}

export default Project_2

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    margin:20
    
  },
  button:{
    backgroundColor:'aqua'
  }
})