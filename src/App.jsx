import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import "./App.css";

function App() {
  const { mode } = useContext(ThemeContext);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1",
        );
        setPost(response.data);
      } catch (err) {
        setError("მონაცემების წამოღება ვერ მოხერხდა");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`app-container ${mode}`}>
      <Header />

      <main className="content">
        <section className="hero">
          <h2>კეთილი იყოს თქვენი მობრძანება</h2>
        </section>

        <div className="data-section">
          {loading ? (
            <div className="loader">იტვირთება...</div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            post && (
              <article className="card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </article>
            )
          )}
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Hala Madrid</p>
      </footer>
    </div>
  );
}

export default App;
