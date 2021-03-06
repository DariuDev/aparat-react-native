import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity ,Image} from 'react-native';
import {json} from '../webService/CategoryVideoApi'


const CategoryVideoFlatList = ({navigation}) => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);

   useEffect(() => {
     console.log(json)

     setData(json);
    
   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator = {false}
      
        data={data}
       renderItem={({ item }) => (
<TouchableOpacity style={styles.item}
  onPress={() => navigation.navigate('VideoPlayerScreen',{title : item.title ,link : item.link , description : item.description , duration : item.time ,view : item.view})}>
  <View style = {{flex : 1}}>
  <Image source={{uri : item.icon }} style = {styles.imageView}/>
  </View>
    <Text style={styles.title}>{ item.title}</Text>
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
    justifyContent : 'center'
  },
  item: {
flexDirection : 1,
borderRadius : 14,
 borderWidth:1,
marginTop : 5,
width : '100%',
height : 250,
  },
  title: {
    fontSize: 15,
    padding : 4,
    textAlign : 'center'
  },
  imageView : {
width: '100%',
       height: '100%',
       borderTopRightRadius: 14,
       borderTopLeftRadius: 14,
  }
});

export default CategoryVideoFlatList;
