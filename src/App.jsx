import { ReactLenis } from "lenis/react"
import gsap from "gsap";
import { useRef, useEffect } from "react"
import  Home  from "./Pages/Home";
import { Layout } from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
   const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
