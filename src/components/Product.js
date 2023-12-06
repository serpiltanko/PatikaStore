import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Product = ({ products }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.productContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: products.imgURL }} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}> {products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            {products.inStock ? (
              <Text style={styles.inStock}></Text>
            ) : (
              <Text style={styles.inStock}>STOKTA YOK</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin:10,
  gap:5,
  },

  productContainer: {
 
    backgroundColor: "#ECEFF1",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10, 
    height: Dimensions.get("window").height / 2,

  },

  imageContainer: {
   margin:10,   
  },


  image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 3,
    borderRadius: 10,
    resizeMode: "contain",
  },

  bottomContainer: {
    padding:10,
    textAlign:"left",
  },
  title: {
    fontSize: 20,
    fontWeight:"700",
    marginBottom:5,
  },
  price: {
    fontSize: 18,
    fontWeight:"700",
    color:"#808080",
  },
  inStock: {
    fontSize: 14,
    fontWeight:"500",
    color: "red",
  },
});
