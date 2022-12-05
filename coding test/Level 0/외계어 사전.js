// https://school.programmers.co.kr/learn/courses/30/lessons/120869
// 프로그래머스 0단계 : 외계어 사전

function solution(spell, dic) {
    let sum = 0
    let res = 0
    for(let i = 0 ; i<dic.length;i++){
        let check = dic[i].split('')
        for(let i = 0 ; i<spell.length;i++){
            check.includes(spell[i]) === true ? sum+=1 : sum    
        }
        if(sum === spell.length){
            return 1
        }else{
            sum = 0
        }
    }
    return sum === 0 ? 2 : null
}

/* 문제 풀이
문제를 보면 우리는 spell 이라는 단어가 dic[i]에 있는 단어들에 모두 들어가 있는지를 보면된다
1. 우리는 반복문을 통해서 dic[i] 있는 단어들을 split을 사용해서 쪼개준다
2. 중첩 반복문을 하나 만들어서 그 쪼개준 단어들과 spell 에 있는 요소들을 비교를 하면서 sum에 +1 을 계속 더해갔다 
3. 하나의 단어의 검사가 끝났을때 spell의 길이와 sum에 길이가 같다면 모든 요소가 다 있다는 소리니까 return 1 을 해주고 그렇지 않으면 sum을 다시 초기화 해서 다른 단어 검사를 시작한다
4. 마지막으로 모든 단어가 검사가 끝났을때 sum이 0이라면 한개도 없는 것이므로 return 2 를 해준다 (뒤에 null을 해준 이유는 그냥 저 삼항연산자의 false 조건문 까지 절대로 코드가 실행되지 않는다)
왜냐? 저 false 이 될려면 앞에 if문의 리턴 1로 빠졌어야 되기 때문에
*/