import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity ,Image} from 'react-native';
import {json} from '../webService/SpecialVideoApi'


const SpecialVideoFlatList = ({navigation}) => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   console.log(data);

   useEffect(() => {
     console.log(json)

     setData(json);
    
   }, []);

  return (
    
      <FlatList
      showsHorizontalScrollIndicator = {false}
      horizontal = {true}
        data={data}
       renderItem={({ item }) => (
         <SafeAreaView style={styles.container}>
<TouchableOpacity style={styles.item}
  onPress={() => navigation.navigate('VideoPlayer',{title : item.title ,link : item.link , description : item.description , duration : item.time ,view : item.view})}>
  <View style = {{flex : 1}}>
  <Image source={{uri : item.icon }} style = {styles.imageView}/>
  </View>
    <Text style={styles.title}>{ item.title}</Text>

  </TouchableOpacity>
   </SafeAreaView> )}
        keyExtractor={({ id }, index) => id}
      />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection : 'row',
    margin : 5,
  },
  item: {
flexDirection : 1,
borderRadius : 14,
 borderWidth:1,
marginRight : 5,
width : 200,
  },
  title: {
   fontSize: 15,
    padding : 4,
    textAlign : 'center'
  },
  imageView : {
width: ('100%'),
       height: ('100%'),
       borderTopRightRadius: 14,
       borderTopLeftRadius: 14,
  }
});

export default SpecialVideoFlatList;
