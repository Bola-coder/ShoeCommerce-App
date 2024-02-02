import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import VerticalShoeCard from "../../components/VerticalShoeCard";

import styles from "./style";

const BrandCategoryProductsScreen = ({ route, navigation }) => {
  const { header } = route.params;
  return (
    <View style={styles.brandCategoryProductContainer}>
      <ScreenHeader title={header} />
      <ScrollView
        contentContainerStyle={styles.brandCategoryProductsContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeOne.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeTwo.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeThree.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeFour.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeFive.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeOne.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeTwo.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeThree.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeFour.png")}
          />
        </View>
        <View style={styles.categoryProduct}>
          <VerticalShoeCard
            brand={"Adidas"}
            name={"Teezy"}
            price={200}
            image={require("./../../assets/images/shoeFive.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BrandCategoryProductsScreen;
