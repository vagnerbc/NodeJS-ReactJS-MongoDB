import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import './styles.css';

export default class Main extends Component {

    state = {
        posts: [],
        postInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = async (page = 1) => {
        const response = await api.get(`/posts?page=${page}`);

        const { docs, ...postInfo } = response.data;

        this.setState({ posts: docs, postInfo, page });
    }

    renderPost = ({ _id, title, description }) => 
        <article key={_id}>
            <strong>{ title }</strong>
            <p>{ description }</p>
            <Link 
                to={{
                        pathname: '/sobre', 
                        state: {title, description}
                    }}>
                        Acessar
            </Link>
        </article>

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        this.getPosts(page - 1);
    }

    nextPage = () => {
        const { page, postInfo } = this.state;

        if (page === postInfo.pages) return;

        this.getPosts(page + 1);
    }

    render() {
        const { posts, page, postInfo } = this.state;
        return (
            <div className="post-list">
                {posts.map(this.renderPost)}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === postInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        );
    }
}