import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Project_8 = ({navigation}) => {
  const [Nickname, setNickname] = useState('');
  const Hello=()=>{
    if(Nickname===''){
      alert("Xin vui lòng nhập Nickname");
    }
    else{
      alert("Hello:"+ " " +Nickname);
      
    }
    
  }
  return (
    <View style={{margin:20}}>
      <Text style={{fontWeight:'bold', fontSize:24}}>What's your name ?</Text>
      <TextInput
          value={Nickname} 
          onChangeText={(text)=> setNickname(text)}
          fontSize='14' 
          placeholder='Your Name'
          style={styles.container}
          
      />
      <View style={styles.button}>
      <Button color='white' title='Đến Bài 3' onPress={() => navigation.navigate("Hello")}/>
      {/* <Button color='white' title='Nói xin chào' onPress={() => navigation.navigate("Hello")}/> */}
      {/* onPress={(text)=>Hello(text)} */}
    </View>
      </View>
      
  )
}

export default Project_8

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    borderColor:'#ccc',
    borderWidth:1,
    padding:10,
    borderRadius:10
  },
  button:{
    backgroundColor:'black',
    margin:20,
    borderRadius:10,
  }
})