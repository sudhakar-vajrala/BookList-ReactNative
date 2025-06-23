import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import AppTextInput from '../components/AppTextInput';
import SaveButton from '../components/SaveButton';
import { createBook, updateBook } from '../api/http';

const AddBookScreen = ({onCloseModal, onCreateSuccess, selectedItem}) => {

    const [bookTitle, setBookTitle] = useState(selectedItem?.name ?? "")
    const [bookPrice, setBookPrice] = useState(selectedItem?.price ?? "")
    const [bookImage, setBookImage] = useState(selectedItem?.avatar ?? "")

    const createNewBook = () => {
        createBook({
            onSuccess: () =>{
                Alert.alert("Item added  successfully");
                onCloseModal()
                onCreateSuccess()
            },
            onError: (err) => console.log(err),
            body:{
                avatar:bookImage,
                name:bookTitle,
                price:bookPrice,
            }
        })
    }

    const editBook = () => {
        updateBook({
            onSuccess: () =>{
                Alert.alert("Item updated successfully");
                onCloseModal()
                onCreateSuccess()
            },
            onError: (err) => console.log(err),
            body:{
                avatar:bookImage,
                name:bookTitle,
                price:bookPrice,
            },
            itemID:selectedItem?.id
        })
    }

  return (
    <SafeAreaView>
      <Ionicons name="arrow-back" size={24} color="blue" onPress={onCloseModal}/>
      <View style={styles.body}>
        <Text style={styles.title}>
            Book Details
        </Text>
        <AppTextInput value={bookTitle} onChangeText={setBookTitle} placeholder={"Book Name"}/>
        <AppTextInput value={bookPrice} onChangeText={setBookPrice} placeholder={"Price"} keyboardType={"numeric"}/>
        <AppTextInput value={bookImage} onChangeText={setBookImage} placeholder={"Image URL"}/>
        <SaveButton onPress={ !!selectedItem ? editBook :  createNewBook}/>
      </View>
    </SafeAreaView>
  )
}

export default AddBookScreen

const styles = StyleSheet.create({
    body:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    title:{
        fontSize: 20,
        fontWeight:"bold",
        marginBottom:20,
    }
})