import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';


const SpecialVideoFlatList = ({navigation}) => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);

   useEffect(() => {
     fetch('https://reactnative.dev/movies.json')
       .then((response) => response.json())
       .then((json) => setData(json))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
        data={data.movies}
       renderItem={({ item }) => (
<TouchableOpacity style={styles.item}
  onPress={() => { console.log('pressed'); navigation.navigate('VideoPlayerScreen',{id : item.title})}}>
    <Text style={styles.title}>{item.id + '. ' + item.title}</Text>
  </TouchableOpacity> )}
        keyExtractor={({ id }, index) => id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',
    margin : 5,
  },
  item: {
    background: '#0000ff',
flexDirection : 1,
borderRadius : 14,
marginRight : 5,
width : 200,
  },
  title: {
    fontSize: 32,
  },
});

export default SpecialVideoFlatList;
