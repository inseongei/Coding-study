// https://school.programmers.co.kr/learn/courses/30/lessons/120892
// 프로그래머스 0단계 : 암호 해독
function solution(cipher, code) {
    let arr = [...cipher]
    let result = [...arr[code-1]]
    for(let i = 2;i<=arr.length;i++){
        if(arr[i] !== null){
            result.push(arr[i * code-1])
        }
    }
    return result.join('')
}

/* 문제 풀이
1. arr 라는 배열에 cipher 라는 문자열을 배열로 넣어준다
2. result 라는 배열에 스프레드 문법을 사용해서 [code-1]의 첫번째 암호문을 넣어준다
넣어주는 이유는 반복문을 돌릴 때 조금 더 편하게 돌리기 위해 사용하였고 
3. 반복문은 처음 시작을 2 arr.length 만큼 돌려줄 것이고
4. 조건문을 사용해서 null이 아니라면 result에 arr[i * code-1]을 해준다 (조건을 null 여부를 하는 이유는 code의 배수만큼 하다가 끝이 났을 경우에는 null 값이 뜨기 때문이다 )
5. 문제가 원하는 리턴문을 만들기 위해 result에 join을 해준다
*/