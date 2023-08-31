import { ScrollView, Text, View } from "react-native";
import React from "react";
import CategoryCard from "../../components/CategoryCard";
import styles from "./style";
import SectionTitle from "../../components/SectionTitle";
import Brands from "../../components/Brands";
import ShoeCard from "../../components/ShoeCard";
import VerticalShoeCard from "../../components/VerticalShoeCard";

const HomeScreen = () => {
  const categories = [
    {
      id: 1,
      name: "Women",
      image: require("./../../assets/images/femaleImage.png"),
    },
    {
      id: 2,
      name: "Men",
      image: require("./../../assets/images/manImage.png"),
    },
    {
      id: 3,
      name: "Unisex",
      image: require("./../../assets/images/femaleImage.png"),
    },
  ];

  const popularProducts = [
    {
      id: 1,
      brand: "Adidas",
      name: "Yung-I",
      price: 128.99,
      image: require("./../../assets/images/shoeFive.png"),
    },
    {
      id: 2,
      brand: "Nike",
      name: "Free Metcon",
      price: 120.99,
      image: require("./../../assets/images/shoeThree.png"),
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={styles.home}
      showsVerticalScrollIndicator={false}
    >
      {/* Categories */}
      <Text style={styles.headerText}>Choose a Category</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}
        >
          {categories.map((category) => (
            <CategoryCard
              name={category.name}
              image={category.image}
              key={category.id}
            />
          ))}
        </ScrollView>
      </View>

      {/* Brands */}
      <View style={styles.brands}>
        <SectionTitle name={"Select a Brand"} />
        <View style={styles.brandContent}>
          <Brands name="adidas" />
          <Brands name="PUMA" />
          <Brands name="NIKE" />
          <Brands name="crocs" />
          <Brands name="SKETCHERS" />
          <Brands name="Reebok" />
        </View>
      </View>

      {/* Popular Shoes */}
      <View style={styles.popular}>
        <SectionTitle name={"What's Popular"} />
        <ScrollView
          contentContainerStyle={styles.popularContent}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {popularProducts.map((product) => (
            <ShoeCard
              brand={product.brand}
              name={product.name}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          ))}
        </ScrollView>
      </View>

      {/* Latest SHoes */}
      <View style={styles.latest}>
        <SectionTitle name={"Latest Shoes"} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.latestContent}
        >
          <VerticalShoeCard />
          <VerticalShoeCard />
          <VerticalShoeCard />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
