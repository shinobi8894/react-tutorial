import { useEffect, useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, {
        params: { _page: page, _limit: 5 },
      });
      setPosts(prevPosts => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleLoadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const renderPosts = () => posts.map(post => <div key={post.id}>{post.title}</div>);

  return (
    <div className="App">
      <h2>React Tutorial 5 - Load More Button</h2>
      <div className='list'>{renderPosts()}</div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default App;
