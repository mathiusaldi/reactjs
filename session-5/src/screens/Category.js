import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Text, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const categoryListSchema = gql`
  query getCategory($id: String) {
    categoryList(filters: { ids: { eq: $id } }) {
      name
      children {
        id
        name
        children {
          id
          name
        }
      }
    }
  }
`;

const Category = () => {
  const { loading, error, data } = useQuery(categoryListSchema, {
    variables: {
      id: 2,
    },
  });

  if (loading) return <Text>Loading...</Text>;

  const categoryItem = data.categoryList;

  const toCatalog = useNavigation();

  return (
    <ScrollView>
      {
      categoryItem.map((val, idx) => {
        return (
          <View
            key={idx}
            style={{ alignItems: "center" }}
            style={{ marginBottom: 20, marginTop: 40 }}
          >
            {val.children.map((cat, idy) => {
              return (
                <View key={idy} style={{ marginBottom: 20 }}>
                  <Text
                    style={{ textAlign: "center", fontSize: 25 }}
                    onPress={() =>
                      toCatalog.navigate("Catalog", { id: cat.id })
                    }
                  >
                    {cat.name}
                  </Text>
                  {cat.children.map((child, idz) => {
                    return (
                      <Text
                        key={idz}
                        style={{ textAlign: "center", marginBottom: 10 }}
                        onPress={() =>
                          toCatalog.navigate("Catalog", { id: child.id })
                        }
                      >
                        {child.name}
                      </Text>
                    );
                  })}
                </View>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Category;
