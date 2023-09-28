import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';


const App = () => {
  const data =[1,2,3,4,5,6,7,8,9];
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
      <Text style={styles.heading}>Danh sách mục cuộn</Text>
      {data.map((item)=>(
        <View style={styles.item}>
        <Text>Mục {item}</Text>
      </View>
      ))}
      
      
      {/* Thêm các mục khác nếu cần */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#e0e0e0',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default App;
