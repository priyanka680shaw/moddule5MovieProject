
import { useSelector  } from "react-redux"

function HomePage(){

    const data  =  useSelector((state)=>state)
    console.log(data.
        contentSlice.count[0])

    return(
        <>
            <h1>HomePage</h1>
        </>
    )
}
export default HomePage