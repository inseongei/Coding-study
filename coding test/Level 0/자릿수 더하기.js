// https://school.programmers.co.kr/learn/courses/30/lessons/120906
// 프로그래머스 0단계 : 자릿수 더하기
function solution(n) {
    let sum = 0;
    let result =  (n+'').split('')
    for(let i = 0; i< result.length;i++){
        sum += Number(result[i])
    }
    return sum
}

/*
문제에서 주어진 매개변수 n의 한자리 자리 수마다 더해주면 된다
1. 하나의 숫자열을 문자열로 만든뒤 split으로 쪼개주면 배열에 차곡차곡 저장이 된다
2. 반복문을 통해서 문자열을 배열로 만들어준 그 길이 만큼 반복문을 돌린뒤 
3. sum이라는 변수를 하나 만들고 그 변수에  배열에 들어있는 위치위치마다 숫자형으로 바꾼다음 더해주면 된다 
*/