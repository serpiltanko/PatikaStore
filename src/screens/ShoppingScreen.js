import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Search from '../components/Search'
import Product from '../components/Product'
import product_data from '../../services/product_data'


const ShoppingScreen = () => {

  const renderProducts = ({item}) => <Product products={item} />
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <Search/>
     
     <FlatList
     keyExtractor={(item)=>item.id.toString()}
     data={product_data}
     renderItem={renderProducts}     
     numColumns={2}
    
     
     />
    </SafeAreaView>
  )
}

export default ShoppingScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"white",
        margin:16,
       
    },
    header:{
        color:"#800080",
        fontSize:30,
        fontWeight:"bold",
        paddingLeft:16,
    }

})