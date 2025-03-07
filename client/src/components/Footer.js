import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} 커뮤니티 게시판. All rights reserved.</p>
        <p>
          <a href="/terms">이용약관</a> | 
          <a href="/privacy">개인정보처리방침</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 