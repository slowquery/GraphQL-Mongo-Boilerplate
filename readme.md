# GraphQL Boilerplate

GraphQL 보일러플레이트입니다.

## 설치
```
$ yarn install
```

## 스크립트
**실행**
```
$ yarn start
```
**빌드**
```
$ yarn build
```

## 환경변수
`.env` [프로젝트루트디렉토리/.env] 파일 설정 
```
MONGO_HOST=몽고호스트
MONGO_USER=몽고유저명
MONGO_PASS=몽고비밀번호 
MONGO_DB=몽고데이터베이스명
MONGO_PORT=몽고포트
MONGO_POOLSIZE=몽고커넥션풀사이즈
APP_PORT=앱포트
SECRET=앱시크릿키
```

## 접근
`/graphql` 경로로 접근하여 GraphQL Playground를 이용하여 실행합니다.

### 회원가입
```
mutation($Name: String!, $Email: String!, $Pass:String!){
  AddUser(Name:$Name, Email: $Email, Password: $Pass) {
    AccessToken
  }
}
```
**회원가입 변수**
```
{
  "Name": "test",
  "Email": "test@gmail.com",
  "Pass": "P@ssW0rd"
}
```

### 로그인
```
mutation($Email: String!, $Pass:String!){
  LoginUser(Email: $Email, Password: $Pass) {
    AccessToken
  }
}
```
**로그인 변수**
```
{
  "Email": "test@gmail.com",
  "Pass": "P@ssW0rd"
}
```

### 전체 유저 목록
```
{
  Users {
    _id,
    Email,
    Name
  }
}
```