// https://school.programmers.co.kr/learn/courses/30/lessons/120847
// 프로그래머스 0단계 : 최댓값 만들기(1)
function solution(numbers) {
     numbers.sort((a,b)=>a-b)
    return numbers[numbers.length-1] * numbers[numbers.length-2]
}

/*
주어진 배열에 최대값 2개를 곱해서 제일 큰 수를 만들어 내면 된다
그렇기 때문에 
1. 숫자가 섞여 있는 배열에서 오름차순 정렬 (sort)를 해준다
2. 정렬이 된 배열에서 마지막 수와 그 마지막 수의 앞 숫자를 곱해주면 배열에서 제일 높은 값이 된다
*/