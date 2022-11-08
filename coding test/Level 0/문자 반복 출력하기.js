// https://school.programmers.co.kr/learn/courses/30/lessons/120825
// 프로그래머스 0단계 : 문자 반복 출력하기
function solution(my_string, n) {
    let result;
    let res = [];
    result = my_string.split('')
    for(let i = 0; i< result.length;i++){
       res.push(result[i].repeat(n))
    }
    return res.join('')
}

/*
이문제는 문자열 my_string 을 n번 다 반복을 하면 된다
ex ) hello n: 3 이면 hhheeellllllooo 하면된다
1. 문자열을 하나하나 반복할수 있게 split으로 쪼개준다 
2. 반복문을 통해 배열에 들어간 하나하나에 대해서 repeat 메소드를 사용해서 res 라는 새로운 배열에 푸쉬를 해준뒤 
3. 리턴을 할때 res를 join('') 해주게 되면 문제에서 원하는대로 출력값을 표현할 수 있다
*/