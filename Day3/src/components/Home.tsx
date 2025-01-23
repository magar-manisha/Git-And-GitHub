import { useState } from "react"
import { student, employe, actor, Transactionobj, Transactionname } from "../types/type";

const Home = () => {
  console.log("this is home")
  const [count, setCount] = useState<number>(0)
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [sumval, setSum] = useState<number>(0)

  const age: number | string = 32;
  
  const numList : number[] = [1, 4, 1, 2];

  const student : student = {
    "name":"manisha",
    "roll":"23",
    "age": 22
  }
  
  const employe : employe = {
    "name":"manisha",
    "phoneNo":"977777",
    "salary": 220
  }

  const leeYoung : actor = {
    "name":"leeYoung",
    "phoneNo":"9779877001",
    "equipment": ['guitar', 45, "makeup"]
  }

  const todayTransaction: Transactionobj = {
    "pizza": 5,
    "book": 6,
    "job": 2
  }

  const transactionname: Transactionname = {
    "name": "manisha",
    "pizza": 5,
    "book": 6,
    "job": 2
  }

  const sum = () =>{
    if(typeof num1 == "string" && typeof num2 == 'string'){
      setSum(0);
      return;
    }
    const a: number = parseInt(num1);
    const b: number = parseInt(num2);
    setSum(a+b) ;
  }

  const sub = (num1: number, num2: number): number =>{
    return num1 - num2

  }

  const actor = ( ac: actor) : boolean =>{
    if(ac.name != 'leeYoung'){
      return false;
    }
    return true;

  }

  const addorconcat = (a: number, b: number, c: "add" | "concat"):(number | string) =>{
    if(c == "add") return a+b;
    return ' '+a+b;
  }

  const conc: string = addorconcat(5, 7, "concat") as string

  // const isTrue = <T>(arg: T): BoolCheck<T> => {
  //   if (Array.isArray(arg) && arg.length === 0) {
  //     return { arg, is: false };
  //   }
  //   return { arg, is: true };
  // };

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

      <hr/>

      <p>Age: {age}</p>
      <p>Sub: {sub(7,4)}</p>

      <hr/>

      {numList.map((item)=> <p>This is List of number {item + 2}</p>)}

      <hr/>
      <p>Age from object: {student.age}</p>
      <p>phoneNo from object: {employe.phoneNo}</p>
      <p>Boolean: {actor(leeYoung) ? "It is true" : "It is false"}</p>
      <p>Add or concat(assertion eg): Lets do concat{conc}</p>
      <p>Today Transaction(index eg): {todayTransaction.pizza}</p>
      
      <hr/>
      {Object.keys(transactionname).map((key) => <p>it is an {key} of value {transactionname[key as keyof Transactionname]}</p>)}
    </div>
  )
}

export default Home