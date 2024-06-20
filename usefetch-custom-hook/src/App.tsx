import { useEffect, useState } from "react";
import "./App.css";

interface RandomUserData {
  results: {
    name: {
      first: string;
    };
    email: string;
    phone: string;
    picture: {
      medium: string;
      large: string;
    };
  }[];
}

function useFetch(url: string) {
  const [data, setData] = useState<RandomUserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

function App() {
  const { data, loading, error } = useFetch("https://randomuser.me/api/");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <div className="App">
      <div className="profile-card">
        <img
          className="profile-image"
          src={data?.results[0]?.picture.large}
          alt="avatar"
        />
        <span className="profile-name">{data?.results[0]?.name?.first}</span>
        <span className="profile-email">{data?.results[0]?.email}</span>
        <span className="profile-phone">{data?.results[0]?.phone}</span>
      </div>
    </div>
  );
}

export default App;
