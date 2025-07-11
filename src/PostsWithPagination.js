import React, { useState, useEffect } from 'react';
import "./PostsWithPagination.css";

const PostsWithPagination = () => {
    const [post, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexofLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexofLastPost - postsPerPage;
    const currentPosts = post.slice(indexofFirstPost, indexofLastPost);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const fetchData = async () => {
                // const signal = AbortSignal.timeout(5000);
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data)
                setLoading(false);
            }
            fetchData();

            // const fetchData = () => fetch('https://jsonplaceholder.typicode.com/posts')
            //     .then((response) => response.json())
            //     .then((res) => {
            //         setPosts(res)
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
            // fetchData();
        }, []
    )

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {loading ? "Loading ..." : <Posts posts={currentPosts} />}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={post.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

const Posts = ({ posts }) => {
    return (
        <div className={"postContainer"}>
            <ul>
                {posts.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}

const Pagination = ({
    postsPerPage,
    totalPosts,
    setCurrentPage,
    currentPage
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((num) =>
                (
                    <li key={num} className={currentPage === num ? "active" : ""}>
                        <a href="!#" onClick={(e) => paginate(num, e)}>
                            {num}
                        </a>
                    </li>
                )
                )}
            </ul>

        </nav>

    )
}


export default PostsWithPagination;