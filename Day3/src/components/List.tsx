import { listProp } from "../types/type"



const List = <T,>({items, render}: listProp<T>) => {
  return (
    <div>
        <h1>This is list</h1>
        <ul>
            
                {items.map((item, index) => <li key={index}>{ render(item)}</li>)}
           
        </ul>
    </div>
  )
}

export default List