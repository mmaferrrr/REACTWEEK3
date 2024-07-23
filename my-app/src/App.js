import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './Components/Counter';
import MovieSearch from './Components/Moviesearch';
import MovieDetail from './Components/Moviedetail';
import TodoList from './Components/Todolist';
import TodoDetail from './Components/Tododetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/todos">To-Do List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/counter" index element={<Counter />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;