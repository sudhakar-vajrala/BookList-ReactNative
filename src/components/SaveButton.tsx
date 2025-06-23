import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SaveButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>Save</Text>
    </TouchableOpacity>
  )
}

export default SaveButton

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height: 40,
        backgroundColor:"#1273DE",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8, 
    },
    title:{
        fontSize:16,
        fontWeight:"bold",
        color:"white",
    }
})