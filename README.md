# Cursor 활용한 커뮤니티 게시판 프로젝트

이 프로젝트는 커서에 대한 이해를 돕기 위해 만들었습니다.  
관련 동영상을 참고하세요 
https://www.youtube.com/watch?v=Zk7s765Ko34


## 프로젝트 개요

이 커뮤니티 게시판은 다음과 같은 주요 기능을 제공합니다:

- 사용자 계정 관리 (회원가입, 로그인, 프로필 관리)
- 게시글 작성, 수정, 삭제 기능
- 댓글 및 대댓글 기능
- 게시글 카테고리 분류
- 게시글 검색 기능
- 파일 업로드 기능
- 사용자 알림 시스템
- 관리자 대시보드

## 기술 스택

- **프론트엔드**: React
- **백엔드**: Spring Boot
- **데이터베이스**: PostgreSQL
- **인증**: JWT (JSON Web Tokens)
- **파일 저장소**: AWS S3 또는 로컬 스토리지
- **배포**: Docker, AWS/Vercel

## 설치 및 실행 방법

### 사전 요구사항

- Java 17 이상
- Node.js 18.x 이상
- npm 또는 yarn
- PostgreSQL

### 설치 단계

1. 저장소 클론
   ```bash
   git clone https://github.com/medialog-AX-TF/cursor_project_bbs.git
   cd cursor_project_bbs
   ```

2. 의존성 설치
   ```bash
   # 백엔드 의존성 설치 (Maven 또는 Gradle 사용)
   cd server
   ./mvnw install  # Maven 사용 시
   # 또는
   ./gradlew build  # Gradle 사용 시

   # 프론트엔드 의존성 설치
   cd ../client
   npm install
   ```

3. 환경 변수 설정
   ```
   # server/src/main/resources/application.properties 또는 application.yml 파일 설정
   spring.datasource.url=jdbc:postgresql://localhost:5432/bbs
   spring.datasource.username=root
   spring.datasource.password=****
   ```

4. 애플리케이션 실행
   ```bash
   # 백엔드 서버 실행
   cd server
   ./mvnw spring-boot:run  # Maven 사용 시
   # 또는
   ./gradlew bootRun  # Gradle 사용 시

   # 프론트엔드 서버 실행 (새 터미널에서)
   cd client
   npm start
   ```

## 프로젝트 구조

```
cursor_project_bbs/
├── client/                 # 프론트엔드 코드 (React)
│   ├── public/             # 정적 파일
│   └── src/                # 소스 코드
│       ├── components/     # 리액트 컴포넌트
│       ├── pages/          # 페이지 컴포넌트
│       ├── services/       # API 서비스
│       ├── context/        # 리액트 컨텍스트
│       └── utils/          # 유틸리티 함수
├── server/                 # 백엔드 코드 (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/       # Java 소스 코드
│   │   │   │   ├── controller/  # 컨트롤러
│   │   │   │   ├── model/       # 데이터 모델
│   │   │   │   ├── repository/  # 데이터 저장소
│   │   │   │   ├── service/     # 비즈니스 로직
│   │   │   │   └── config/      # 설정 파일
│   │   │   └── resources/  # 리소스 파일
│   │   └── test/           # 테스트 코드
│   └── pom.xml 또는 build.gradle  # 의존성 관리
└── docs/                   # 문서
    └── requirements.md     # 요구사항 문서
```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 연락처

프로젝트 관리자 - [이메일 주소]

프로젝트 링크: [https://github.com/medialog-AX-TF/cursor_project_bbs](https://github.com/medialog-AX-TF/cursor_project_bbs) 
