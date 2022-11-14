// https://school.programmers.co.kr/learn/courses/30/lessons/120893
// 프로그래머스 0단계 : 대문자와 소문자
function solution(my_string) {
    let result =  my_string.split('')
    let array = [];
    for(let i = 0; i < result.length;i++){
        if(result[i] === result[i].toUpperCase()){
            array.push(result[i].toLowerCase())
        } else {
            array.push(result[i].toUpperCase())
        }
    }
    return array.join('')
}

/* 문제 풀이
대문자는 소문자로 / 소문자는 대문자로 나타내면 된다 
1. 매개변수로 주어지는 my_string을 split을 이용해서 자를것이다 (하나하나 비교해서 바꿔주어야 하기 때문에)
2. 새로운 array라는 배열도 만들어준다 (변환 값을 받을 것이다)
3. 조건문을 통해서 result[i] === result[i].toUpperCase() 
	result의 i 번째가 result[i]의 대문자로 반환한 값과 같다면 ? 소문자로 그렇지 않다면 대문자로 해주고 아까 만든 array 배열에 push 해주면된다
4. 그 배열을 문자열로 표현해야 하니 join 해주면 끝
*/

// 조건이 1 아니면 2 이기 때문에 삼항 연산자를 이용해서 표현해도 깔끔하다

function solution(my_string) {
    let result =  my_string.split('')
    let array = [];
    for(let i = 0; i < result.length;i++){
    result[i] === result[i].toUpperCase() ? array.push(result[i].toLowerCase()) : 
    array.push(result[i].toUpperCase())
    }
    return array.join('')
    }