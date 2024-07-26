import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./components/ui/navigation-menu"
import { NavigationMenuDemo }   from "./components/ui/navigation-test"

function App() {
  //const [count, setCount] = useState(0)

  return (
    
    <NavigationMenuDemo/>
    //<h1 className='text-3xl font-bold underline'>Hello world!</h1>
    
  )
}

export default App
