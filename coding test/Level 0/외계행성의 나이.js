// https://school.programmers.co.kr/learn/courses/30/lessons/120834
// 프로그래머스 0단계 : 외계행성의 나이
function solution(age) {
    let arr = ['a','b','c','d','e','f','g','h','i','j']
    let result = [];
    let new_age = (age+'').split('')
    for(let i = 0; i<new_age.length;i++){
       result.push(arr[Number(new_age[i])])  
    }
    return result.join('')
}

/* 문제 풀이
1. 알파벳을 배열의 인덱스 번호대로 나열을 해준뒤
2. age를 split 메소드를 사용해서 문자열 시킨뒤 쪼개 준다
3. 반복문을 통해서 result 라는 새로운 배열을 만든뒤 push를 이용해서 알파벳을 나열해준 arr의 숫자형으로 new_age[i]을 해주게 되면
a 는 0 b 는 1 이런식으로 인덱스 번호를 뽑아쓸수 있다
4. 문제에서 원하는 리턴값을 나타내기 위해 result를 마지막으로 join('') 해주면 된다
*/