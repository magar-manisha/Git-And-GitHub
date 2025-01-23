import Home from "./components/Home"
import Section from "./components/section"

function App() {
  return (
    <>
    <div style={{display:"flex"}}>
      <Home />
      <Section>
        <p>This is my children</p>
      </Section>
    </div>
      
    </>
  )
}

export default App
