// https://school.programmers.co.kr/learn/courses/30/lessons/120890
// 프로그래머스 0단계 : 가까운 수
function solution(array, n) {
    let minNumber = Math.min(...array.map(item=>Math.abs(item-n)))  // n - array[i] 를 하면서 가장 작은 차의 값
    return array.sort((a,b) => a-b).find(item => Math.abs(item-n) === minNumber)
}

/* 문제 풀이
1. minNumber 라는 변수를 선언하고 Math.min이라는 메소드를 사용해서 array 라는 배열에서 map을 이용해서 n-array[i]의 차가 가장 작은 것을 뽑아낸다
2. array를 오름차순으로 정렬을 시켜주고 find를 사용해서 아까 구한 작은 것과 item-n을 했을때 값이 같은 경우를 찾으면 문제에서 원하는 리턴값을 뽑아낼 수 있다
*/
