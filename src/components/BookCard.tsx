import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const BookCard = ({id, name, price, avatar, onDeleteItem, onEditItem}) => {
    return <View style = {styles.container}>
        <Image
        source={{uri:avatar}}
        style={styles.coverImage}
        />

        <View style = {styles.detailsContainer}>
            <Text style={styles.bookName}>
                {name}
            </Text>
            <Text style={styles.bookName}>
                {id}
            </Text>
            <Text style={styles.price}>
                {price}
            </Text>
        </View>
        
        <View style = {styles.deleteEditContainer}>
            <TouchableOpacity style = {styles.circleButton} onPress={onDeleteItem}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.circleButton} onPress={onEditItem}>
                <FontAwesome name="edit" size={24} color="#25a" />
            </TouchableOpacity>
        </View>

    </View>    
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"#fff",
        borderRadius:10,
        padding:10,
        shadowColor:"#000",
        shadowOffset:{width: 0, height: 2},
        shadowOpacity:1,
        shadowRadius:4,
        elevation:3,
        margin:10,
    },
    coverImage:{
        width:"25%",
        height: 120,
        borderRadius: 8,
        resizeMode:"stretch",
    },
    detailsContainer:{
        flex: 1,
        marginHorizontal: 10,
        // marginTop:10,
    },
    bookName:{
        fontSize: 20,
        fontWeight:"bold",
        color:"#000"
    },
    autorName:{
        fontSize: 17,
        color:"#888",
        marginVertical:5,
    },
    price:{
        fontSize: 20,
        fontWeight:"bold",
        color:"#25a"
    },
    deleteEditContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    circleButton:{
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
        marginStart: 10,
    }
})

export default BookCard