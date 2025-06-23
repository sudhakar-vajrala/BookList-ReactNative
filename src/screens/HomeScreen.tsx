import { View, Text, SafeAreaView, FlatList, Alert, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookByID, getListOfBooks } from "../api/http";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

const HomeScreen = () => {
  const [bookList, setBookList] = useState();
  const [modelVisiable, setModelVisiable] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books) => setBookList(books),
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    getListOfBooksFN();
  }, []);

  const onDeleteItem = (item) => {
    console.log(item.id);
    deleteBookByID({
      onSuccess: () => {
        Alert.alert("Item deleted successfully");
        getListOfBooksFN();
      },
      onError: (err) => console.log(err),
      itemID: item.id,
    });
  };
 
  const onEditItem = (item) => {
    console.log(item)
    setSelectedItem(item)
    setModelVisiable(true)
  }

  const addButtonClicked = () => {
    setSelectedItem({})
    setModelVisiable(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            id={item.id}
            name={item.name}
            price={item.price}
            avatar={item.avatar}
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => onEditItem(item)}
          />
        )}
      />
      <AddButton onPress={addButtonClicked}/>
      <Modal visible={modelVisiable} animationType="slide">
        <AddBookScreen 
        onCloseModal={() => setModelVisiable(false)}
        onCreateSuccess={() => getListOfBooksFN()}
        selectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
