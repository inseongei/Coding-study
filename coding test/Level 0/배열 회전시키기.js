// https://school.programmers.co.kr/learn/courses/30/lessons/120844
// 프로그래머스 0단계 : 배열 회전시키기
function solution(numbers, direction) {
    let rig = [...numbers]
    let lef = [...numbers]
    
    if(direction === "right"){
		let last = rig.splice(numbers.length-1,1)    
		rig.unshift(last[0])
		return rig    
    }else{
		let first = lef.splice(0,1)
		lef.push(first[0])
		return lef
    }
}

/* 문제풀이
조건문과 배열 메소드 unshift , splice, push 를 사용하였다
1. 조건문을 통해서 right 인지 left인지를 판별한뒤
2. 하나의 변수 선언시키고 right면 마지막요소를 left면은 첫번째 요소를 잘라준다
3. 그 자른 변수를 가지고 원본 numbers 배열에 right 면 뒤로 붙여주고 left 면 앞으로 붙여주면 끝 
*/