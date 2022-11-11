// https://school.programmers.co.kr/learn/courses/30/lessons/120811
// 프로그래머스 0단계 : 중앙값 구하기
function solution(array) {
   array.sort((a,b)=>a-b)
    return array[Math.floor(array.length/2)]
}

/*
1. 주어진 배열의 값을 오름차순으로 sort를 이용해서 정렬을 시켜준다
2. 중앙값을 구하기 위해서는 length/2를 해야하며 array의 길이가 홀수라면 소숫점이 나오게 된다 하지만 우리는 그 소수점만 버려주면 배열의 길이가 홀수더라도 중앙값을 찾을수 있다
3. Math.floor를 이용해주면 결과값을 찾을수 있다
*/