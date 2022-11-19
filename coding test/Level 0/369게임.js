// https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 프로그래머스 0단계 : 369게임
function solution(order) {
    let arr = [...(order+'')]
    let result = 0;
    for(let i = 0 ; i<arr.length;i++){
        if(Number(arr[i]) % 3 === 0 && Number(arr[i]) !== 0){
           result++ 
        }
    }
    return result
}

/* 문제풀이
369 게임을 하고 order 라는 매개변수는 머쓱이 차례에 있는 숫자를 의미한다
1. 우리는 order를 배열로 만들어준다음 각 숫자열 하나하나를 보면서 박수를 몇번 쳐야하는지 (result)를 알수 있어야 한다
2. 반복문을 통해서 배열로 만든 길이만큼 반복을 시키고
3. 조건문을 통해서 arr[i] 번째가 % 3 === 0 이면  369 중에 하나이니까 result(박수)를 ++ 하면된다
4. 하지만 0일때의 조건도 걸어주어야 문제가 원하는 모든 테스트 케이스에 통과할 수 있다
*/