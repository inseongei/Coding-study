// https://school.programmers.co.kr/learn/courses/30/lessons/120835
// 프로그래머스 0단계 : 진료순서 정하기
function solution(emergency) {
    let array = [...emergency]
    array.sort((a,b)=>b-a)
    let result = [];
    for(let i = 0; i<array.length;i++){
        result.push(array.indexOf(emergency[i])+1)
    }
    return result
}

/* 문제 풀이
응급퍼센트에 따라서 result(진료 순서)를 리턴하는 문제이다
1. array 라는 새로운 배열에 스프레드 문법을 사용해서 복사를 해준다
2. array를 내림차순으로 정렬을한다 (이말은 즉 응급률이 높은 순서대로 정렬을 한것)
3. 반복문을 통해서 result 라는 새로운 배열에 array의 indexOf(emergency[i])를 찾아내주면 된다
4. +1 을 해준 이유는 배열이기 때문에 0번째가 있기때문에 0번째는 즉 1번째 라는 뜻으로 +1을 해주고 리턴해주면 문제에서 원하는 리턴값을 뽑아낼 수 있다 
*/