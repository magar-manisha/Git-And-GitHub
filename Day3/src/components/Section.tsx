import {sectionProps} from '../types/type'
import List from './List'

const Section = ({title= "Hii this is section", children}: sectionProps) => {

  return (
    <div style={{border:"2px solid", width: "50%", justifyItems:"center"}}>
      <h1>{title}</h1>
      <p>{children}</p>
      < List  items={["coffee ☕️", 23, 56, "cake 🎂"]} render={(item: (string| number)) =><p>{item}</p> }/>
    </div>
  )
}

export default Section