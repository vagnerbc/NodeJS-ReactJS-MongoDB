import React, {Component} from 'react';
import api from '../services/api';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Posts',
  };

  state = {
    postInfo: {},
    docs: [],
    page: 1,
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async (page = 1) => {
    try {
      const response = await api.get(`/posts?page=${page}`);
      const {docs, ...postInfo} = await response.data;

      this.setState({
        docs: [...this.state.docs, ...docs],
        postInfo,
        page,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  loadMore = () => {
    const {page, postInfo} = this.state;

    if (page === postInfo.pages) {
      return;
    }

    const pageNumber = page + 1;

    this.loadPosts(pageNumber);
  };

  renderItem = ({item}) => (
    <View style={styles.postContainer}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postDescription}>{item.description}</Text>

      <TouchableOpacity
        style={styles.postButton}
        onPress={() => {
          this.props.navigation.navigate('PostDetail', {post: item});
        }}>
        <Text style={styles.postButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  list: {
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

  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  postDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  postButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  postButtonText: {
    fontSize: 16,
    color: '#DA553F',
    fontWeight: 'bold',
  },
});
