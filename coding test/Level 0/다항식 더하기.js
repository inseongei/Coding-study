// https://school.programmers.co.kr/learn/courses/30/lessons/120863
// 프로그래머스 0단계 : 다항식 더하기
function solution(polynomial) {
    const polyArr = polynomial.split(" + ");
    
    let xNum = 0;
    let num = 0;
    
    polyArr.forEach((item) => {
        if(item.includes("x")){
            const xArr = item.split("x");
            
            if(xArr[0] === ""){
                xNum += 1;
            }
            
            if(xArr[0] !== ""){
                xNum += Number(xArr[0]);
            }
        }
        
        if(!item.includes("x")){
            num += Number(item);
            console.log(num)
        }
    })
    
    if(xNum !== 0 && num !== 0){
        return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;    
    }
    
    if(xNum !== 0 && num === 0){        
        return xNum === 1 ? "x" : `${xNum}x`;
    }
    
    if(xNum === 0 && num !== 0){
        return `${num}`;
    }
    
    if(xNum === 0 && num === 0){
        return "0";
    }
}
