import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./ListItem";
import axios from "axios";

const ArticlesIndex = ({ navigation }) => {
  const [articlesList, setArticlesList] = useState([]);

  const getArticles = async () => {
    try {
      let response = await axios.get(`/articles`);
      setArticlesList(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      {articlesList && (
        <>
          <View style={styles.container}>
            <FlatList
              data={articlesList}
              keyExtractor={(article) => article.id.toString()}
              renderItem={({ item }) => {
                return <ListItem article={item} navigation={navigation} />;
              }}
            />
          </View>
        </>
      )}
    </>
  );
};

export default ArticlesIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
