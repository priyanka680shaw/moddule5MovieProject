import { useEffect } from "react"
import { fetchDataFromApi } from "./Utilities/api"
import { useDispatch , useSelector} from "react-redux"
import { getApiConfiguration , getGrners } from "./Slice/HomeSlice"
import { RouterProvider, Route, createBrowserRouter } from "react-router-dom"
//pages
import { Home } from "./Pages/Home/Home"
import { PageNotFound } from "./Pages/404/PageNotFound"
import { Details } from "./Pages/Details/Details"
import { Explore } from "./Pages/Explore/Explore"
import { SearchReasult } from "./Pages/SearchReasult/SearchReasult"
//components
import { Navbar } from "./Components/Navbar/Navbar"
import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"

function App() {
  //getting data from store
  const {url} = useSelector((state)=>state.home
  );
  console.log("url" , url)
  //using dispatch to store data in store 
  const dispatch = useDispatch();
  
  //api fetch
  const apiTesting = ()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=>{
      dispatch(getApiConfiguration(res))
    })
    //console.log(fetchDataFromAPI)
  }
  useEffect(()=>{
    apiTesting()
  } , [])


//routing path decleration
const routs  = createBrowserRouter([
  {
    path : "/",
    Component  : Home ,
  },
  {
    path : "/:mediaType/:id", //dynamic data based on meddia  type and  id
    Component  : Details,
  },
  {
    path : "/search/:query",
    Component  : SearchReasult ,
  },
  {
    path : "/explore/:mediaType",
    Component  : Explore ,
  },
  {
    path : "*",
    Component  : PageNotFound ,
  },
])

  return (
    <>
      {/* <Header/> */}
      <RouterProvider router={routs}></RouterProvider>
      {/* <Footer/> */}
    </>
  )
}

export default App
