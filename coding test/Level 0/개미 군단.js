// https://school.programmers.co.kr/learn/courses/30/lessons/120837
// 프로그래머스 0단계 : 개미 군단
function solution(hp) {
    let one = Math.floor(hp/5)
    let two =  Math.floor((hp - one * 5) / 3)
    let three = hp - one * 5 - two * 3;
    return one+two+three
}

/*
Math.floor 메소드와 함께 문제가 원하는 식을 사용해주면 되는 문제다
1. hp / 5를 하면 장군개미가 몇마리 쓰이는 지 알수 있고
2. 남은 hp를 가지고  Math.floor((hp - one * 5) 를 /3 해주면 병정개미가 몇마리 쓰이는지 알수 있으며
3. hp - one * 5 - two * 3; 장군개미와 병정개미를 제외한 hp를 알면 일개미의 수를 알수 있다
여기서 3의 값은 0~2일것이다
*/