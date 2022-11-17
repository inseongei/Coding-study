// https://school.programmers.co.kr/learn/courses/30/lessons/120904
// 프로그래머스 0단계 : 숫자 찾기
function solution(num, k) {
    let arr = (num + '')
    if(arr.indexOf(k) === -1){
        return -1
    } else{
        return arr.indexOf(k) + 1
    }
}

/* 문제 풀이
1. 숫자열을 문자열로 만들고 조건문을 통해서 arr.indexOf가 k가 === -1 : 문자열에 그 k 라는 숫자가 없다면 리턴을 -1
2. 그렇지 않다면 arr.indexOf(k) + 1 을 해주는데 +1을 해주는 이유는 처음이 0 이고 하나씩 세는데 문제에선 바로 1부터 세기 때문에 1을 더해준것이다
*/