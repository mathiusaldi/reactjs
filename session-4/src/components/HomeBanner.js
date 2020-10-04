import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text, Image, View, SafeAreaView, Dimensions } from "react-native";
import { useQuery, gql } from "@apollo/client";

const homeBanner = gql`
  {
    getHomepageSlider {
      images {
        image_id
        image_url
      }
      slider_id
    }
  }
`;

const BannerWidth = Dimensions.get("window").width;

const BannerHeight = 260;

const HomeBanner = () => {
  const [activeSlide, setState] = useState(0);

  const { loading, error, data } = useQuery(homeBanner);

  if (loading) return <Text>Loading...</Text>;

  const imageSLider = data.getHomepageSlider.images;

  function changeIndex(index) {
    setState(index);
  }

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: BannerHeight,
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
          }}
          source={{
            uri: item.image_url,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          loop
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          layout={"default"}
          data={imageSLider}
          sliderWidth={BannerWidth}
          itemWidth={BannerWidth}
          renderItem={renderItem}
          onSnapToItem={(index) => changeIndex(index)}
        />
      </View>
      <Pagination
        dotsLength={imageSLider.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </SafeAreaView>
  );
};

export default HomeBanner;
