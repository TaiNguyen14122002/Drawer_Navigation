import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {getHeaderTitle} from '@react-navigation/elements'
import { Appbar, Menu } from 'react-native-paper';
import App from '../App';


const CustomNavigationBar = ({navigation, route, options, back}) => {

    const[visible, setVisible] = React.useState(true);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={()=>navigation.goBack()}/> : null}
        {/* <Appbar.BackAction onPress={() => navigation.goBack()} /> */}
        <Appbar.Content title={title}/>
        {! back ? (
            <Menu visible={visible}
                    onDismiss ={closeMenu}
                    anchor={
                        <Appbar.Action icon="dots-vertical" onPress={openMenu}/>
                    }>
                    <Menu.Item onPress={()=>{console.log('option 1 was passed')}} title="Trang chủ"/>
                    <Menu.Item onPress={()=>{console.log('option 3 was passed')}} title="Option 3"/>
                    <Menu.Item onPress={()=>{navigation.navigate("Calculator")}} title="Calculator"/>
                    
                    
            </Menu>
        ):null }
    </Appbar.Header>
  )
}

export default CustomNavigationBar

const styles = StyleSheet.create({})