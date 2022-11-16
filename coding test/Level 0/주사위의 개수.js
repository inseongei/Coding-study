// https://school.programmers.co.kr/learn/courses/30/lessons/120845
// 프로그래머스 0단계 : 주사위의 개수
function solution(box, n) {
    let result = 1;
    for(let i = 0; i<box.length;i++){
       result *=  Math.floor(box[i] / n)
    }
   return result
}

/* 문제 풀이
이 문제는 문제가 원하는 방향만 이해해주면 된다
1. box 배열의 각각 요소들을 n으로 나눈뒤 Math.floor를 사용해서 정수만 뽑아낸다 (소수점은 하나의 주사위가 될수 없기 때문이다 ) 
2. 그렇게 뽑아낸 각각의 정수를 곱하면 그것이 직육면체 들어갈수 있는 주사위다
3. result라는 변수에다 * 로 저장해주면 된다
*/