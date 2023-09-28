import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = [];
for (let i = 1; i <= 1000; i++) {
  data.push({ id: i, name: `Mục ${i}` });
}

const LongListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default LongListExample;
