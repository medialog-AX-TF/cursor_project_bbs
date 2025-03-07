import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header>
      <div className="container">
        <h1>
          <Link to="/">커뮤니티 게시판</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/boards">게시판</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile">내 프로필</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn">로그아웃</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/register">회원가입</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 