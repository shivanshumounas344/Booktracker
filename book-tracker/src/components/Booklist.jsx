import { useState } from 'react';
import { addBook, removeBook, getBooks , clearBooks , saveBooks} from '../utils/localstorage';
import './Booklist.css'; // Add this import

export default function Booklist() {
    const [books , setBooks] = useState(getBooks());
    const [form, setForm] = useState({ name: '', author: '', description: '' });

    return (
        <div className="booklist-container">
            <h1 className="booklist-title">Book List</h1>
            <form className="booklist-form" onSubmit={e => {
                e.preventDefault();
                addBook({ ...form });
                setBooks(getBooks());
                saveBooks();
                setForm({ name: '', author: '', description: '' });
            }}>
                <input
                    className="booklist-input"
                    placeholder="Book Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                    className="booklist-input"
                    placeholder="Author"
                    value={form.author}
                    onChange={e => setForm({ ...form, author: e.target.value })}
                />
                <input
                    className="booklist-input"
                    placeholder="Description"
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })}
                />
                <button className="booklist-add-btn" type="submit">Add Book</button>
            </form>
            <ul className="booklist-ul">
                {books.map((book) => (
                    <li className="booklist-li" key={book.name}>
                        <div >
                            <span className="booklist-bookname">{book.name}</span> <br/>
                            <span className="booklist-author">{book.author}</span> <br/>
                        </div>
                        
                        <span className="booklist-desc">{book.description}</span> <br/>
                        <button className="booklist-remove-btn" onClick={() => {
                            removeBook(book) ; 
                            setBooks(getBooks());
                            saveBooks();
                        }}>Remove</button>
                    </li>
                ))}
            </ul>
            <button className="booklist-clear-btn" onClick={() => {
                clearBooks();
                setBooks(getBooks());
                saveBooks();
            }}>Clear All</button>
        </div>
    )
}