import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>커뮤니티 게시판에 오신 것을 환영합니다</h1>
        <p>다양한 주제에 대해 의견을 나누고 소통해보세요.</p>
        <div className="hero-buttons">
          <Link to="/boards" className="btn btn-primary">게시판 보기</Link>
          <Link to="/register" className="btn">회원가입</Link>
        </div>
      </section>

      <section className="features">
        <h2>주요 기능</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>다양한 게시판</h3>
            <p>여러 주제의 게시판에서 관심사에 맞는 대화를 나눠보세요.</p>
          </div>
          <div className="feature-item">
            <h3>실시간 알림</h3>
            <p>댓글과 좋아요 등의 활동에 대한 알림을 실시간으로 받아보세요.</p>
          </div>
          <div className="feature-item">
            <h3>파일 공유</h3>
            <p>이미지, 문서 등 다양한 파일을 게시글에 첨부할 수 있습니다.</p>
          </div>
          <div className="feature-item">
            <h3>모바일 지원</h3>
            <p>모바일에서도 편리하게 이용할 수 있는 반응형 디자인을 제공합니다.</p>
          </div>
        </div>
      </section>

      <section className="recent-posts">
        <h2>최근 게시글</h2>
        <p>아직 게시글이 없습니다. 첫 번째 게시글을 작성해보세요!</p>
        <Link to="/boards/write" className="btn">글 작성하기</Link>
      </section>
    </div>
  );
};

export default Home; 