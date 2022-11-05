﻿// https://school.programmers.co.kr/learn/courses/30/lessons/120833
// 프로그래머스 0단계 : 배열 자르기
function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1)
}

/*
배열 자르기 라는 말을 보자마자 splice와 slice 2가지의 방법이 떠올랐다 
위의 문제는 slice 라는 배열 메소드를 사용해서 풀었다
*/

/*
slice(시작idx,끝idx)를 인자로 받고 시작 인덱스부터 종료 인덱스까지 값을 복사해서 새로운 배열을 반환한다
주의할 점 : 첫번째 인자인 시작idx는 가리키는 값을 그대로 포함하지만 두번째 인자인 종료 idx는 가리키는 값을 포함하지 않는다 
이말은 즉 배열.slice(1,4) 라면 배열의 1번째부터 4번째가 아닌 3번째 배열1,2,3번째을 뽑는다
*/ 

/*
splice(시작idx,삭제할갯수,추가할 값)을 인자로 받고 삭제된 값을 담고 있는 배열을 반환한다
예시를 보면 확실하게 이해가 간다
 let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] 이러한 배열이 있고
 nums.splice(5, 3) : 5번째부터 3개를 삭제한다
 : [5,6,7] 삭제된 배열이 반환되고
 nums를 찍으면 [5,6,7]을 제외한 나머지 배열이 찍히게 된다
*/