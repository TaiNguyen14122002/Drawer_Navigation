import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-paper';

const CustomDrawerContent3 = ({navigation}) => {
    const[active,setActive] = React.useState('');

  return (
    <View style={styles.container}>
        <Drawer.Section
            title= "Bài 1"
            icon = "home"
            active={active === 'home'}
            onPress={()=>{
                setActive('home');
                navigation.navigate("Bai_1");
            }
                }
        />
        <Drawer.Section
            title= "Máy tính"
            icon = "star"
            active={active === 'Calculator'}
            onPress={()=>{
                setActive('Calculator');
                navigation.navigate("May_tinh");
            }
                }
        />
    </View>
  )
}

export default CustomDrawerContent3

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40
    }
})