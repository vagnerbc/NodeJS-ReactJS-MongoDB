import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css';

export default class Main extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        const response = await api.get('/posts');

        this.setState({ posts: response.data.docs });
    }

    renderPost = ({ _id, title, description }) => 
        <article key={_id}>
            <strong>{ title }</strong>
            <p>{ description }</p>
            <a href="">Acessar</a>
        </article>

    render() {
        const { posts } = this.state;
        return (
            <div className="post-list">
                {posts.map(this.renderPost)}
            </div>
        )
    }
}