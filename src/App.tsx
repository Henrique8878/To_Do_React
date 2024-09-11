import './App.css'
import { Header } from './components/header'
import { Section } from './components/section'
export function App() {
  

  return (
    <div className='grid grid-rows-[1fr_3fr] h-screen' id="app">
      <Header/>
      <Section/>
    </div>
  )
}


