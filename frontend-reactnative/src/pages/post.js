import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Post = ({navigation}) => {
  const {title, description} = navigation.state.params.post;
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.value}>{title}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{description}</Text>
      </View>
    </View>
  );
};

Post.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.post.title,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20,
  },
  postContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA552F',
  },
  value: {
    color: '#999',
    paddingLeft: 30,
  },
});
export default Post;
