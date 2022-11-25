// https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 프로그래머스 0단계 : 잘라서 배열로 저장하기
function solution(my_str, n) {
    let result = [];
    let array = my_str.split('')
    for(let i = 0 ; i<my_str.length;i++){
        let one = array.splice(0,n)
        one.length === 0 ? null : result.push(one.join(''))
    }
    return result
}

/* 문제 풀이
splice와 slice라는 배열 자르기 메소드가 있는데 나는 원본 배열을 건드는 splice를 사용하였다
1. result라는 빈배열과 array라는 my_str이라는 문자열을 배열로 만든 하나의 새로운 배열을 만들었다
2. 반복문을 통해서 my_str의 길이 만큼 반복을 시켜주고
3. one이라는 변수에 문자열을 배열로 만든 array의 splice를 하였다 0,n 만큼 그러면 반복을 하면서 array라는 배열에 0번째부터 n까지 잘려 나갈 것이고
4. 삼항 연산자를 통해서 one의 길이가 0 이면 끝난거니까 null 그렇지 않으면 아까 만든 result에 push해준다 one.join('') 해준것을
그러면 문제에서 원하는 리턴 값을 뽑아낼 수 있다
*/