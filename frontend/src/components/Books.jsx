import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api/books";

function Books() {
  
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching books:", err);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <div>Loading books...</div>;

  return (
    <div className="App">
      <h1>My Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.name}:</strong> {book.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
