import React from 'react'

const App = () => {
  const [keyword,setkeyword] = React.useState(localStorage.getItem("keyword"))

  console.log('화면 다시 그리는중')

  React.useEffect(()=>{
    localStorage.setItem("keyword",keyword)
    console.log('안녕 나 이펙트')
  },[keyword])
// useEffect에 대한 설명만 하기위해 뷰 코드는 생략했음 
 
/*
 1. 검색창 input에 입력을 하면 keyword 라는 state값에 값이 들어가고 그 값은 로컬 스토리지에 저장이 된다
 2. 불필요한 변화감지로 인해 화면을 다시 그리는 작업을 방지하기 위해서 useEffect로 해당 [] 배열에 있는 값이 변화할때만 화면을 다시 그린다
	★ 디펜던시 어레이가 없으면 모든 변화에 반응을 하는것
	★ 디펜던시 어레이를 빈배열 넣어주면 처음에만 동작 
	★ 디펜던시 어레이에 변화할때 동작하는 값을 넣어주게 되면 그 어레이 안에 있는 요소가 바뀔때마다 동작을 한다
	ex ) 지금 위에 코드는 keyword가 변화할때 useEffect 안에 코드가 실행이 되는 것이다
*/