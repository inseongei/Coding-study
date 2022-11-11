// https://school.programmers.co.kr/learn/courses/30/lessons/120851
// 프로그래머스 0단계 : 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    let sum = 0;
   let result = my_string.split('')
   for(let i = 0 ; i<result.length;i++){
    if(isNaN(result[i]) === false )
        sum = sum + Number(result[i])
   }
    return sum;
}

/*
이 문제는 주어진 문자열에서 중간에 껴있는 숫자를 뽑아서 더해주는 result를 리턴해주면 된다
1. sum이라는 변수와 result라는 문자열을 split으로 쪼갠 배열을 담는 변수를 생성
2. 반복문을 통해서 result의 길이만큼 돌면서 조건을 걸어준다
3. 그 조건은 isNaN이라는 메소드를 사용해서 result[i]가 문자열일 경우에 true가 뜰 것이고 숫자형이면 false 라는 반환값을 나타낸다
4. 우리는 sum라는 아까 만든 변수에서 false면 안에 숫자가 있다는 소리니까 ex) '4' << 그것을 숫자형 Number(result[i])로 바꿔주고 더해줌
*/