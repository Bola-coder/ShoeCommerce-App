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

const BrandScreen = () => {
  const brandNames = [
    "Running",
    "Causal",
    "Fashion",
    "Trending",
    "Running",
    "Causal",
    "Fashion",
    "Trending",
  ];
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  const handleActiveBrand = (id) => {
    setActiveBrandIndex(id);
  };
  return (
    <View>
      <ScreenHeader title={"Brand"} />
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
          {brandNames.map((brand, index) => (
            <Tab
              key={index}
              name={brand}
              active={index === activeBrandIndex}
              horizontalScroll={true}
              onPress={() => handleActiveBrand(index)}
            />
          ))}
        </ScrollView>

        {/* The content based on the tab selected above */}

        <View style={styles.brandContent}>
          <SectionTitle name={brandNames[activeBrandIndex]} />
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
        <View style={styles.shoe}>
          <SectionTitle name={"Latest Shoes"} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.shoeContent}
          >
            <VerticalShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeOne.png")}
            />
            <VerticalShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeTwo.png")}
            />
            <VerticalShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeThree.png")}
            />
            <VerticalShoeCard
              brand={"Adidas"}
              name={"Teezy"}
              price={200}
              image={require("./../../assets/images/shoeFour.png")}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default BrandScreen;
