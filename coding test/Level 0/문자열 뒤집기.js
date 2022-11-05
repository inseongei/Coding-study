// https://school.programmers.co.kr/learn/courses/30/lessons/120822
// 프로그래머스 0단계 : 문자열 뒤집기
function solution(my_string) {
    return my_string.split('').reverse().join('')
}
/*
이 문제는 메소드 split , reverse , join 메소드를 알고 있으면 금방 해결하는 문제는
split : 문자열을 ('')을 기준으로 하나하나 쪼개서 배열로 만들어준다 (배열로 만들어주는 이유 : reverse라는 메소드는 배열 메소드 이기때문에)
reverse : 배열을 뒤집어 주는 것 ex ) ['a','p','p','l','e'] => ['e','l','p','p','a']
join : 배열을 풀어주는 메소드 이다 join('')을 하게 되면 배열을 다 풀고 문자열로 다시 만들어주어서 문제가 원하는 리턴값을 뽑아낼 수 있다
*/
