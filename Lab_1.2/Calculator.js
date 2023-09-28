import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';


const darkThemeColors = {
  backgroundColor: 'black',
  textColor: 'white',
  borderColor:'red'
};


const Calculator = () => {
  const [Input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+',
  ];

  const Equals = (button) => {
    if (button === '=') {
      setInput(result + button);
      try {
        setResult(eval(result));
      } catch (error) {
        setResult('Error');
      }
    } else if (button === 'C') {
      setInput('');
      setResult('');
    } else {
      setResult(result + button);
    }
  };

  
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  

  return (
    <View style={{backgroundColor: isDarkMode ? darkThemeColors.backgroundColor: '#f0f0f0',flex:1}}>
      <View style={{alignItems:"flex-start",flex:1, marginTop:10}}>
          <Button color={isDarkMode ? darkThemeColors.textColor: 'black'} backgroundColor={isDarkMode ? darkThemeColors.textColor: 'black'} title={`Giao diện ${isDarkMode ? 'Sáng' : 'Tối'}`} onPress={()=>setIsDarkMode(!isDarkMode)}/>
        
      </View>
      <View style={{...styles.container,backgroundColor: isDarkMode ? darkThemeColors.backgroundColor: '#f0f0f0'}}>
      
        <Text style={{color:isDarkMode ? darkThemeColors.textColor: 'black'}}>{Input}</Text>
        <Text style={{...styles.result, color:isDarkMode ? darkThemeColors.textColor: 'black'}}>{result}</Text>
        <View style={{...styles.buttonContainer, backgroundColor: isDarkMode ? 'red': '#f0f0f0'}}>
          {buttons.map((button, index) => (
            <TouchableOpacity
              key={index}
              
              style={{...styles.button, borderColor: isDarkMode ? 'red':'#ccc'}}
              onPress={() => Equals(button)}
            >
              <Text style={{...styles.buttonText, Color:isDarkMode ? darkThemeColors.textColor: 'black'}}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    
  },
  result: {
    fontSize: 48,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    
  },
  buttonText: {
    fontSize: 24,
    
    
  },
});

export default Calculator;
