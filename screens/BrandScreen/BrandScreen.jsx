import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import BrandCard from "./../../components/BrandCard";
import styles from "./style";
import ScreenHeader from "../../components/ScreenHeader";
import Tab from "../../components/Tab";
import SectionTitle from "../../components/SectionTitle";
import ShoeCard from "../../components/ShoeCard";
import VerticalShoeCard from "../../components/VerticalShoeCard";

const BrandScreen = ({ navigation }) => {
  const brandCategories = [
    "Running",
    "Causal",
    "Fashion",
    "Trending",
    "Running",
    "Causal",
    "Fashion",
    "Trending",
  ];
  const [activeBrandCategoryIndex, setActiveBrandCategoryIndex] = useState(0);

  const handleActiveBrandCategory = (id) => {
    setActiveBrandCategoryIndex(id);
  };

  return (
    <View>
      <ScreenHeader title={""} />
      <ScrollView
        contentContainerStyle={styles.brand}
        showsVerticalScrollIndicator={false}
      >
        <BrandCard />
        <ScrollView
          horizontal
          contentContainerStyle={styles.tabs}
          showsHorizontalScrollIndicator={false}
        >
          {brandCategories.map((brandCategory, index) => (
            <Tab
              key={index}
              name={brandCategory}
              active={index === activeBrandCategoryIndex}
              horizontalScroll={true}
              onPress={() => handleActiveBrandCategory(index)}
            />
          ))}
        </ScrollView>

        {/* The content based on the tab selected above */}

        <View style={styles.brandContent}>
          <SectionTitle
            name={brandCategories[activeBrandCategoryIndex]}
            onBtnPress={() =>
              navigation.navigate("BrandCategoryProducts", {
                header: brandCategories[activeBrandCategoryIndex],
              })
            }
          />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeOne.png")}
            />
            <ShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeTwo.png")}
            />
            <ShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeThree.png")}
            />
            <ShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeFour.png")}
            />
          </ScrollView>
        </View>
        {/* Latest Shoes */}
        <View style={styles.latestProducts}>
          <SectionTitle name={"Latest Shoes"} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.latestProductsContent}
          >
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeOne.png")}
              />
            </View>
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeTwo.png")}
              />
            </View>
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeThree.png")}
              />
            </View>
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeFour.png")}
              />
            </View>
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeFive.png")}
              />
            </View>
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeOne.png")}
              />
            </View>
            <View style={styles.product}>
              <VerticalShoeCard
                brand={"Adidas"}
                name={"Teezy"}
                price={200}
                image={require("./../../assets/images/shoeTwo.png")}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default BrandScreen;
