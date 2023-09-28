import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Project_1 from './Component/Project_1';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Project_2 from './Component/Project_2';
import Icon from 'react-native-vector-icons/FontAwesome';
import Project_3 from './Component/Project_3';
import Project_4 from './Component/Project_4';
import Project_5 from './Component/Project_5';
import Project_6 from './Component/Project_6';
import Project_7 from './Component/Project_8';
import Project_8 from './Component/Project_8';
import Project_9 from './Component/Project_9';
import Calculator from './Lab_1.2/Calculator';
import { createStackNavigator } from '@react-navigation/stack';
//import { PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './Lab_4_LT/CustomNavigationBar';
import { State } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "react-native-gesture-handler"
import { PaperProvider } from 'react-native-paper';
import CustomDrawerContent3 from './Screen/CustomDrawerContent333';



const Tab = createBottomTabNavigator();
const stack = createStackNavigator();
const Drawer = createDrawerNavigator()


export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name ="Bai_1" component={Project_1}/>
    //     <Tab.Screen name ="Bai_2" component={Project_2}/>
    //     <Tab.Screen name ="Bai_3" component={Project_3}/>
    //     <Tab.Screen name ="Bai_4" component={Project_4}/>
    //     <Tab.Screen name ="Bai_5" component={Project_5}/>
    //     <Tab.Screen name ="Bai_6" component={Project_6}/>
    //     <Tab.Screen name ="Bai_7" component={Project_8}/>
    //     <Tab.Screen name ="Bai_8" component={Project_9}/>
    //     <Tab.Screen name ="Máy Tính" component={Calculator}/>
    // </Tab.Navigator>
    // </NavigationContainer>
    
   
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='May_tinh' drawerContent={(props) => <CustomDrawerContent3 {...props} />}>
          <Drawer.Screen name ="Bai_1" component={Project_1}/>
          <Drawer.Screen name ="May_tinh" component={Calculator}/>
        </Drawer.Navigator>
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
