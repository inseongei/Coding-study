// https://school.programmers.co.kr/learn/courses/30/lessons/120853
// 프로그래머스 0단계 : 컨트롤 제트
function solution(s) {
    let sum = 0
    let arr = s.split(' ')
    for(let i = 0 ; i<arr.length;i++){   
        arr[i] === 'Z' ? sum -= arr[i-1] : sum += Number(arr[i])
    }
    return sum;
}

/* 문제 풀이
문제를 한마디로 표현하면 Z를 만나면 이전값을 더한 그 숫자를 더하지 말고 무시하라는 소리다(바로 전에 만난 숫자를 빼라는 것)
1. s.split(' ')을 사용해서 문제에서 주는 s 문자열 하나하나를 배열에 담아준다 split에 조건을 공백으로 두는 이유는 Z와 숫자 앞에 공백으로 있기 때문이다
2. 그렇게 나눈 배열을 가지고 반복문을 돌려서 arr[i]가 만약 Z라면 sum에다 이전 숫자를 빼주고 그렇지 않으면 sum에 그 전에 arr[i]를 더해주면 된다
*/