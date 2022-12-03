// https://school.programmers.co.kr/learn/courses/30/lessons/120894
// 프로그래머스 0단계 : 영어가 싫어요
function solution(numbers) {
    let array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let num = [0,1,2,3,4,5,6,7,8,9]
    
    for(let i = 0; i<array.length;i++){
        if(numbers.includes(array[i]) === true ){
            numbers = numbers.replaceAll(array[i],num[i])
        }
    }
    return +numbers
}

/* 문제 풀이
문자열 numbers의 영어단어 처럼 영어를 숫자로 바꿔야 하는 문제이다
1. array num 배열을 만들어준다
2. 반복문을 돌려주면서 조건문을 사용해서 numbers 문자열에 array 안에 있는 숫자영어단어들이 있는지 체크를 한다 includes를 사용해서
3. 있을경우 ( true ) 일때 numbers 라는 문자열은 치환을 해준다 (replaceAll) 
4. array[i] 는 지금 num[i] 랑 같은 영어 == 숫자 이니까 바꿔준다음
5. 문자열은 numbers를 숫자열로 바꿔준다 ( 바꾸는 방법 : + , Number(numbers) 등등)
*/
