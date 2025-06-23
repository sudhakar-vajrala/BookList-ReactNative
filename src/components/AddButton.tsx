import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const AddButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome6 name="add" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        backgroundColor: "#1273DE",
        borderRadius:25,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center"
    }
})