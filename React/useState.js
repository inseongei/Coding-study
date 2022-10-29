// UseState 와 이벤트를 통한 검색창 
import React from 'react'

const App = () => {
  const [keyword,setkeyword] = React.useState('')
  const [typing, settyping] = React.useState(false)
  const [result, setResult] = React.useState('')

// onChanage , 사용자가 해당 input태그의 변화를 주는걸 감지해서 keyword의 state 값과 typing 값을 변경
  const handleChange = (event) =>{
    setkeyword(event.target.value)
    settyping(true)
  }

// onClick , 사용자가 버튼을 눌렀을 때 typing 값과 Result 값을 변경
  const handleClick = ()=>{
    settyping(false)
    setResult(`We find results of${keyword}`)
  }
  
  return (
    <div>
    <input type="text" onChange={handleChange}/>
    <button onClick={handleClick}>검색</button>
    <p>{typing ? `Loading...${keyword}` : result}</p> // 삼항 연산자를 통해 typing 값의 참과 거짓 여부를 판단하여 해당 값을 출력함
    </div>
  )
}

export default App