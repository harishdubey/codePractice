import React, { useEffect, useState } from 'react';
import "./PostsWithPagination.css"

const PostsPagination = () => {
    const [post, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = post.slice(firstPostIndex, lastPostIndex);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "get",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(data => setPosts(data));
            setLoading(false);
        }
        fetchData();
    }, [])

    return (<div>
        <h2>Pagination Posts</h2>
        {loading ? "Posts is Loading ..." : <Posts posts={currentPosts} />}
        <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts={post.length}
            postsPerPage={postsPerPage}
        />
    </div>)
}

const Pagination = ({
    currentPage,
    setCurrentPage,
    totalPosts,
    postsPerPage
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (item, e) => {
        e.preventDefault();
        setCurrentPage(item)
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((item) => (
                    <li key={item} className={currentPage === item ? "active" : ""}>
                        <a href="!#" onClick={(e) => paginate(item, e)}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

const Posts = ({ posts }) => {
    return (
        <div className={"postContainer"}>
            <ul>
                {posts.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default PostsPagination;