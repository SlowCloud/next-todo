# Next.js와 tailwindcss로 투두리스트 만들기
<img src="https://user-images.githubusercontent.com/79568594/221494858-c3186ca7-be22-4cb1-a367-5095401dffd1.png" width="500">
<img src="https://user-images.githubusercontent.com/79568594/221495111-0a787c58-704e-4552-819e-9a5f45164262.png" width="500">

구현 기능
---------
투두 추가/제거 기능
투두 위로 마우스를 올리면 제거 버튼이 보이도록 만듦

배운 것
-------
tailwindcss 설정, prettier/eslint 설정 방법

더 해볼 것
---------
useEffect로 삭제 알람 띄워보기,
useContext로 함수 넘기기

그 외
-------------
투두 제거 시 같은 내용의 투두가 모두 지워졌다. id 값을 따로 매겨서 지우는 작업이 필요하다.<br>
Next를 사용하였으나 거의 React의 기능만을 사용하였다. 그마저도 useState 외엔 사용한 기능이 없다. 다음에 next로 주제를 선정한다면 getStaticProps를 활용할 수 있는 주제를 고를 것이다.<br>
컴포넌트 분리를 거의 사용하지 않았다. Todo 컴포넌트 하나를 제외하고 모두 index에서 구현했다.
