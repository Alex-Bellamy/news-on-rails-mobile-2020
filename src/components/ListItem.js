import React from "react";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const ListItem = (props) => {
  const viewArticle = (
    <View style={styles.container}>
      <TouchableOpacity
        testID={`article-${props.article.id}`}
        key={props.article.id}
        onPress={() => {
          props.navigation.navigate("ArticleDetails", {
            articleId: props.article.id,
          });
        }}
      >
        <Image
          source={{ uri: props.article.image }}
          style={styles.image}
          testID={`article-image-${props.article.id}`}
        />
        <View style={styles.card}>
          <Text id={`article-title-${props.article.id}`} style={styles.title}>
            {props.article.title}
          </Text>
          <Text id={`article-lead-${props.article.id}`} style={styles.subtitle}>
            {props.article.lead}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return <>{viewArticle}</>;
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 8,
    paddingBottom: 16,
    top: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    color: "white",
    fontSize: 26,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
    marginBottom: 5,
  },
});
