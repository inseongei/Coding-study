// https://school.programmers.co.kr/learn/courses/30/lessons/120850
// 프로그래머스 0단계 : 문자열 정렬하기(1)
function solution(my_string) {
    let res = [];
    let result = my_string.split('')
    for(let i = 0; i<result.length;i++){
        if(isNaN(result[i]) === false){
            res.push(Number(result[i]))
        }
    }
    return res.sort((a,b)=> a-b)
}

/* 풀이 방법
1. 숫자열을 담을 배열과 문자열을 배열로 만든 변수를 선언해준다
2. 반복문을 통해 문자열을 배열로 만든 길이만큼 반복을 시켜주고
3. isNaN이라는 메소드를 사용해서 배열을 돌면서 검사를 한다 ( 배열안에 요소가 숫자인지 문자인지를 )
4. if문을 걸어 맞을 경우에 숫자열을 담을 배열(res)에 push를 해준다 result[i] 값을 숫자형으로 
5. 최종 res 값은 오름차순으로 정렬해준다
*/

// isNaN 이란 ? 
/*
배열안에 문자열이 숫자인지 문자인지를 검사해주는 메소드라고 생각한다.
*/