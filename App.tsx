import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {

  const [bookList, setBookList] = useState([])



  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  label:{
    fontSize: 20,
    marginHorizontal: 10
  },
  image:{
    width:200,
    height: 200,
  }
});
