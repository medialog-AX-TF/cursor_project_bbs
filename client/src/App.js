import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트 임포트
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardWrite from './pages/BoardWrite';
import BoardEdit from './pages/BoardEdit';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// 레이아웃 컴포넌트 임포트
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/boards" element={<BoardList />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
          <Route path="/boards/write" element={<BoardWrite />} />
          <Route path="/boards/edit/:id" element={<BoardEdit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 