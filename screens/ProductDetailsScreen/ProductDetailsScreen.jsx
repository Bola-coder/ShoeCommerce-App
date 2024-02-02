import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import styles from "./style";
import ScreenHeader from "../../components/ScreenHeader";

const ProductDetailsScreen = ({ route, navigation }) => {
  const sizes = [39, 40, 41, 42, 43, 44, 45];
  const colors = ["#008000", "#FF5C00", "#FF0000", "#000000"];
  const [activeSize, setActiveSize] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const { id, title } = route.params;
  return (
    <View style={styles.productDetails}>
      <ScreenHeader title={title} />
      <View style={styles.topHalf}>
        <View style={styles.sizes}>
          <Text style={styles.sizeText}>Size</Text>
          {sizes.map((size, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                styles.sizeBtn,
                activeSize == index && styles.ativeStyleBtn,
              ]}
              onPress={() => setActiveSize(index)}
              key={index}
            >
              <Text style={styles.sizeBtnText}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./../../assets/images/shoeOne.png")}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.bottomHalf}>
        <View style={styles.priceAndAvailability}>
          <Text style={styles.price}>
            $ 128<Text style={styles.fractionPrice}>.99</Text>
          </Text>
          <TouchableOpacity style={styles.availabilityButton}>
            <Text style={styles.availabilityButtonText}>In stock</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Sneaker made from premium leather and suede Waterproof inner liner
            to keep moisture out...
          </Text>
        </View>
        <View style={styles.colorBarContainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={[activeColor == index && styles.activeColor]}
              onPress={() => setActiveColor(index)}
            >
              <View style={[styles.color, { backgroundColor: color }]}></View>
            </TouchableOpacity>
          ))}
        </View>
        {/* <View style={styles.addToCartButtonContainer}> */}
        <TouchableOpacity
          style={styles.addToCartButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};

export default ProductDetailsScreen;
