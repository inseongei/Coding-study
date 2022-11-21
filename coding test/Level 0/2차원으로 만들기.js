//https://school.programmers.co.kr/learn/courses/30/lessons/120842
// 프로그래머스 0단계 : 2차원으로 만들기
function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }
  return result;
}

/* 문제 풀이 
1. 2차원 배열을 만들기 위해 반복문을 돌려준다. 반복문의 횟수를 /n을 하는 이유는 그만큼 쪼갤 꺼니 쪼갠만큼 횟수가 줄어든다
2. result 라는 아까 만든 배열에 스프레드 문법을 사용해서 이전 것을 저장하고 num_list의 slice 메소드를 사용해서 (i * n, i * n + n) 식을 사용해서 i가 증가하면서 다음 배열이 저장되도록 한다

*/