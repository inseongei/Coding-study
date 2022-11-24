// https://school.programmers.co.kr/learn/courses/30/lessons/120843
// 프로그래머스 0단계 : 공 던지기
function solution(numbers, k) {
    return numbers[(k - 1) * 2 % numbers.length];
}
/* 문제 풀이
1.(k-1)은 공을 받는 사람이 아니라 던진 사람이기 때문에 해준것이고
2. *2 : 한사람을 건너 뛰고 공을 주기때문에
3. numbers의 길이의 나머지 값이 numbers 공을 던진 사람의 인덱스 값
*/
