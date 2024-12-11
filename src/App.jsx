import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URI } from "./config"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import DefaultLayout from "./layouts/DefaultLayout"
import PostsPage from "./pages/PostsPage"
import PostsShow from './pages/Posts/Show'
import PostCreate from './pages/Posts/Create'
import NotFound from "./pages/NotFound"
import GlobalContext from './contexts/GlobalContext'


function App() {
  const [posts, setPosts] = useState([])
  function fetchPosts() {
    axios.get(`${BASE_URI}/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => fetchPosts(), [])

  return (
    <>
      <GlobalContext.Provider value={{ posts }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/posts">
                <Route index Component={PostsPage}></Route>
                <Route path=":id" Component={PostsShow}></Route>
                <Route path="create" Component={PostCreate}></Route>
              </Route>
              <Route path="/about" element={<About />}></Route>
            </Route>
            <Route path="*" Component={NotFound}></Route>
          </Routes>
        </BrowserRouter >
      </GlobalContext.Provider>
    </>
  )
}

export default App
