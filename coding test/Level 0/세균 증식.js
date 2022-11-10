// https://school.programmers.co.kr/learn/courses/30/lessons/120910
// 프로그래머스 0단계 : 세균 증식
function solution(n, t) {
    for(let i = 0 ; i<t; i++){
        n *= 2
    }
    return n;
}
/*
 처음에는 2마리 1시간 후에 4마리 2시간 후에 8마리 .. 시간당 x2 세균이 증식한다
 반복문을 통해 매개변수 t시간 만큼 반복을 하면서 세균(n)을 x2 배씩 증식해주면 된다
*/