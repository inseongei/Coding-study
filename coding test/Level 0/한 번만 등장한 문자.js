// https://school.programmers.co.kr/learn/courses/30/lessons/120896
// 프로그래머스 0단계 : 한 번만 등장한 문자
function solution(s) {
    const dict = {}
    // dict에 각 스펠링 별 등장 횟수 정리
    s.split("").forEach((i)=> dict[i] = (dict[i] || 0) +1 )
    return Object.entries(dict).map(a => a[1] === 1 ? a[0] : null).filter(a => a !== null).sort().join("")
}

/* 문제 풀이
1. 매개변수 s를 split를 사용해서 배열로 만들어 준다음 forEach문을 사용해서 dict[i]요소에 같은 요소가 있으면 1를 더하는 식을 적었다
2. object.entries를 사용하고 map을 돌리면서 a[1] (즉 a:3) 개수를 뜻하는 a[1]이 1이라면 우리는 그것을 빼오고 아니면 null로 처리한다
3. filter를 사용해서 그 빼온 알파벳들을 오름차순 정렬을 하고 join('')으로 문자열 처리를 해주면 끝
*/
