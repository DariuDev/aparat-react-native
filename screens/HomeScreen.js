import NewVideoList from '../list/NewVideoList';
import BestVideoList from '../list/BestVideoList';
import SpecialVideoList from '../list/SpecialVideoList';
 import CustomFlatList from '../components/CustomFlatList'
 import * as React from 'react';
import {Text, View , ScrollView} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator = {false} >
    <BestVideoList navigation = {navigation} />
      <NewVideoList />
      <SpecialVideoList />
     </ScrollView>
  );
}