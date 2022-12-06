// https://school.programmers.co.kr/learn/courses/30/lessons/120861
// 프로그래머스 0단계 : 캐릭터의 좌표
function solution(keyinput, board) {
  	// 1. x,y 좌표를 선언한다.
    let x = 0;
    let y = 0;
    
  	// 2. board의 범위도 설정한다. 
    const range = 
          [ Math.abs( Math.floor(board[0] / 2) ), 
           Math.abs( Math.floor(board[1] / 2) ) ];
    
  	// 3. keyinput에 방향이 입력된다면 그에 맞게 x 또는 y 좌표를 변경한다.
    for(let k of keyinput){
        switch(k){
            case "left": x--; break;
            case "right": x++; break;
            case "down": y--; break;
            case "up": y++; break;
        }
        
      	// 4. x와 y의 값이 설정 범위를 넘어간다면 설정된 범위의 최댓값을 대입한다.
        if(Math.abs(x)>range[0]){
            x = x > 0 ? range[0] : range[0] * -1;
         }
        if(Math.abs(y)>range[1]){
            y = y > 0 ? range[1] : range[1] * -1;
        }
        
    }
    return [x,y];
}

/* 문제 풀이 (https://velog.io/@hedakim/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-Javascript) 참고
최대값 초과했을때의 조건문을 만드는데 실패해서 위의 블로그를 참고하면서 이해 시켰다
*/