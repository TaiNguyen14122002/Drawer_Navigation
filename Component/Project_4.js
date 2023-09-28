import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Project_4 = () => {
  const [click, setclick] = useState(0);

  const clickclick =()=>{
    setclick(click+1);
  }
  return (
    <View style={{ marginTop:20, margin:30}}>
      <Text style={{textAlign:'center'}}>Số lần đã nhấn: {click} lần</Text>
      <View style={{backgroundColor:'black', marginTop:20, borderRadius:10,}}>
        <Button color='#fff' title='Nhấn' onPress={clickclick}/>
      </View>
      
    </View>
  )
}

export default Project_4

const styles = StyleSheet.create({})