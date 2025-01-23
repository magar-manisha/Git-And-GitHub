import { useState } from "react"


const Home = () => {
  console.log("this is home")
  const [count, setCount] = useState<number>(0)
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [sumval, setSum] = useState<number>(0)

  const sum = () =>{
    if(num1 === '' && num2 === ''){
      setSum(0);
    }
    const a: number = parseInt(num1);
    const b: number = parseInt(num2);
    setSum(a+b) ;
  }

  return (
    <div>
      <h1>Day 3 - Ts/Js</h1>

      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)} style={{ margin: "6px" }}>Increment</button>
      <button onClick={()=>setCount(count - 1)} style={{ margin: "6px" }}>Decrement</button>
      <button onClick={()=>setCount(0)} style={{ margin: "6px" }}>Restart</button>

      <br/>
      <hr/>
      <br/>

      Num1: <input type="text" placeholder="Enter number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
      <br/>
      <br/>
      Num2: <input type="text" placeholder="Enter number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={sum}>Sum number</button>
      <p>Sum: {sumval} </p>
    </div>
  )
}

export default Home