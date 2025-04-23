import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import SingleMovie from "./pages/SingleMovie"
import NotFound from "./pages/NotFound"
import GlobalContext from "./contexts/GlobalContext"


export default function App() {

  const [isLoading, setIsLoading] = useState(true)

  return (

    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>

            <Route path="/" Component={Home} />
            <Route path="/movies/:id" Component={SingleMovie} />
            <Route path="/*" Component={NotFound} />

          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}


