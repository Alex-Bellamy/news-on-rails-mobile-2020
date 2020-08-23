import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { Paragraph, Title } from 'react-native-paper';
import axios from "axios";

const ArticleDetails = ({ route }) => {
  const { articleId } = route.params
  const [article, setSingleArticle] = useState({})
 
  const getSingleArticle = async () => {
    let response = await axios.get(`/articles/${articleId}`);
    setSingleArticle(response.data.article);
  };

  useEffect(() => {
    getSingleArticle();
  }, [])

  const singleArticle = article && (
    <View>
      <View key={article.id}>
      <Image style={styles.image} source={{ uri: article.image }} />
      <View style={styles.contentContainer}>
        <Title style={styles.title}>{article.title}</Title>
        <Paragraph style={styles.subtitle}>{article.lead}</Paragraph>
        <Paragraph style={styles.subtitle}>{article.content}</Paragraph>
      </View>
      </View>
    </View>
  )

  return <View>{singleArticle}</View>
}

export default ArticleDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contentContainer: {
    marginLeft: 5,
    marginRight: 5
  },
  card: {
    position: "relative",
    width: Dimensions.get('window').width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  title: {
    color: "grey",
    fontSize: 26,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
    marginBottom: 15
  },
});