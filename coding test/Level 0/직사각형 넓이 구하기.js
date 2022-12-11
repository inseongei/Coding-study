// https://school.programmers.co.kr/learn/courses/30/lessons/120860
// 프로그래머스 0단계 : 직사각형 넓이 구하기
function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    let one = dots[0][1] - dots[1][1]  // 가로 
    let two = dots[0][0] - dots[3][0]  // 세로 
    
    return Math.abs(one * two)
}

/* 문제 풀이
1. sort를 이용해서 	무작위로 주는 dots 배열을 정렬을 한다
2. one은 가로의 길이 two는 세로의 길이
3. Math.abs를 이용해서 가로 세로의 길이를 곱하므로써 넓이를 구해준다
*/