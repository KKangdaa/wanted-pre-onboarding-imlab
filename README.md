# 🎉 원티드 프리온보딩 프론트엔드 코스 3차 과제

## 과제 소개
- 목표 : 영화 API활용한 트레일러 사이트 만들기
- 작업기간 : 2022.09.06 ~ 2022.09.08
<br/>

## 배포 링크

https://hotsix-imlab.netlify.app/

<br/>

## 팀원들을 소개합니다.

|멤버|담당|포부|
|:--|:--|:--|
|[김승모(팀장)](https://github.com/endmoseung)|프론트엔드|프리온보딩 코스 수료후 관련기업 취업성공!|
|[손우영](https://github.com/dndud2906)|프론트엔드|프리온보딩 기반으로 하루빨리 이직|
|[이종호](https://github.com/devfrank9)|프론트엔드|원피스 완결 전에 오픈소스 컨트리뷰터 달기|
|[민유경](https://github.com/MINYUKYUNG)|프론트엔드|10월 안에 취직!|
|[강다현](https://github.com/KKangdaa)|프론트엔드|실무를 아는 신입개발자 되기|
|[임성훈](https://github.com/sasumpi123)|프론트엔드|좋은회사로 이직 성공하기|
<br/>

## Commit & Merge Convention

```
1. dev (개발) 브랜치를 생성한다.
2. 각자 주어진 작업에 대한 issue를 생성한다.
3. 생성된 issue 번호로 개별 branch 이름을 갖는다
4. 개별 branch에서 작업후 Git 컨벤션에 따라 커밋 및 PR을 한다.
5. 이때, PR은 dev(개발)로 한다.
6. 모든 issue close 및 작업사항 없을시 main으로 dev(개발) 브랜치를 PR한다.
7. 이후 작업 발생시 1~6을 반복한다.
```
<br />

## 실행 방법

레포지토리를 `clone` 합니다
```markdown
$ git clone https://github.com/Pre-HotSix/wanted-pre-onboarding-imlab.git
```
dependencies를 설치합니다
```markdown
$ npm install
```
프로젝트를 실행합니다
```markdown
$ npm start
```
<br/>

## 폴더 구조

```
root
├── .babelrc
├── .eslintrc
├── .vscode
├── .prettierrc
├── package-lock.json
├── package.json
├── tsconfig.json
├── public
|   ├── favicon.ico
|   └── index.html
├── config
|   ├── webpack.common.js
|   ├── webpack.dev.js
|   └── webpack.prod.js
└── src
    ├── apis
    ├── assets
    ├── components
    ├── hooks
    ├── pages
    ├── routes
    ├── styles
    ├── App.jsx
    ├── types.d.ts
    └── index.js
```

|폴더|구분|
|:--|:--|
|apis|api함수들을 모아둔 폴더|
|assets|더미 및 이미지 등 로컬 파일|
|components|코드 재사용을 위한 컴포넌트 관리형 폴더|
|hooks|react의 커스텀 hook을 관리하는 폴더|
|pages|url주소에 따른 페이지 구성 폴더|
|routes|라우팅 관련 처리 폴더|
|styles|전역으로 사용하는 style 관리 폴더|
<br/>

## 디자인 시안 by 강다현

[피그마 바로가기](https://www.figma.com/file/XfhbCGKRROJevroxACFMe6/MovieTrailer?node-id=0%3A1)

<br />

## 요구사항

1. 공통
    - Loading 상태 표기
    - Infinite scroll
    - 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
    - API Response 데이터 캐쉬 (라이브러리 사용)
        - 캐싱에 대한 간단한 개념을 글로 작성해서 README에 포함 or 링크형태로 연결해주세요
    
2. movies / 리스트 페이지
    - 한번에 가져올 데이터 최대 20
    - 제목, 포스터, 별점 표시
    - 포스터 없는 경우, 대체 이미지 사용
    
3. movie / 상세 페이지
    - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
    - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
    - 그 외의 데이터 추가 활용 여부는 자유
    
4. search
    - 제목, 포스터, 별점
    - 포스터 없는 경우, 대체 이미지 사용
    
<br />

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<br />


## Best Practice
### 1. 컴포넌트에서 tSX 파일과 styled-component 파일을 분리했습니다.  
💡 이유 : styled-componet 파일이 길어지면서 한 파일 내에서 JSX 코드와 CSS 코드를 동시에 보기가 어려워져, 가독성을 위해 분리하였습니다. 추가적으로 style 컴포넌트에는 앞에 S.을 포함해 네이밍을 하여, 일반 컴포넌트와 구분하였습니다.

### 2. 공통적으로 쓰는 컴포넌트를 Layout(/src/components/common/layout) 안에서 구성하고 Routes 파일에 적용했습니다. (Navigation, Footer, Header).  
💡 이유 : 최대한 코드 양을 줄이기 위해서 이며, 코드가 많아지면 빌드 속도 및 렌더링 속도가 저하되기 때문입니다. 또한, import의 빈도도 줄일수 있습니다.

### 3. 많은 컴포넌트, 코드를 export 해서 관리해야 하는 경우 index.ts 파일을 만들어 import 경로를 줄였습니다.  
💡 이유 : import 경로가 길어지면 가독성이 떨어지고, 파일 추적이 불편하다는 단점이 있기때문입니다. 이를 줄이기 위해 각 root 폴더에 index.js 파일을 만들어 export default 핸들링을 했습니다.

### 4. 무한스크롤 컴포넌트, useInfiQry 훅 분리로 재사용 가능하도록 추상화 하였습니다.  
💡 이유 : 무한스크롤이 들어가는 페이지들에서 재사용을 위해 컴포넌트화 했고 ,  cache개념이 쓰이는 부분을 커스텀훅으로 만들어서 재사용했습니다.

### 5. 각 라우터에서 공통적으로 쓰일 컴포넌트들을 /src/components 하위 파일로 정리했습니다.  
💡 이유 : HomePage, TopRatedPage, NowPlayingPage, UpComingPage, SearchPage에서, 같은 구조의 카드 컴포넌트 형식으로 영화정보를 구성하여 보여주려고 하기 때문에 분리하여 구성했습니다. 
 - Card(카드)
 - CardContainer(Card를 구성하는 컨태이너)
 - Container(CardContainer를 구성하는 컨태이너)  

## API Response 데이터 캐쉬
### 1. 캐싱 이란?
- 캐싱은 콘솔에서 볼때는 데이터가 업데이트 되고 있으나, 실제로 서버에 요청은 날리지 않는 것 입니다.
- 전에 가져온 데이터나 계산된 결과값의 복사본을 저장하여, 처리속도를 향상시키고 이를 통해 이후 요청을 더 빠르게 처리할 수 있습니다.

### 2. 사용 라이브러리
- 캐싱 기능을 사용하기 위해, React Query 라이브러리의 useInfiniteQuery 훅을 사용했습니다.
- React Query는, 유니크한 키값으로 구분하여 데이터 캐싱이 가능합니다. 문자열과 배열이 사용가능하지만, 컨벤션을 맞추기 위해 보통 배열을 사용합니다.
- useQuery와 useInfiniteQuery는 유니크한 키값, Promise를 리턴하는 함수, 옵션을 사용할 수 있습니다.
- staletime은 캐시 데이터의 신선한 상태에 대한 옵션입니다. 따로 설정해주지 않으면, 캐싱 데이터는 항상 stale 하다고 여겨져 서버에 계속적인 요청을 하게됩니다.
- cachetime은 메모리에 저장되어 있는 캐시 데이터가 언제까지 유지되는지에 대한 옵션입니다.
- 캐싱된 데이터는 QueryClient()를 통해 조회할 수 있습니다. (+ queriesMap)

