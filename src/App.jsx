// importo il globalcontext per avere dati glovbali accenssibili da ogni componente discendente di esso
import GlobalContext from './contexts/GlobalContext'
// importo i componenti per impostare le rotte
import { BrowserRouter, Route, Routes } from "react-router-dom"
// importo gli hooks custom per fetch posts e category
import usePosts from "./hooks/usePosts"
import useCategory from "./hooks/useCategory"

// importo il componente layout per vaere un layout di fefault per tutte le rotte che sono al suo interno 
import DefaultLayout from "./layouts/DefaultLayout"
// importo tutti i componenti che costituiscono le pagine del mio applicativo
import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import PostsShow from './pages/Posts/Show'
import PostCreate from './pages/Posts/Create'
import About from "./pages/About"
import NotFound from "./pages/NotFound"



function App() {
  const posts = usePosts()
  const category = useCategory()
  console.log(category)

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
