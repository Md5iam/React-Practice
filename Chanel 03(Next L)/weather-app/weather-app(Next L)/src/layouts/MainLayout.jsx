import { Outlet } from "react-router"

export default function MainLayout(){
  return (
    // <div>
    //   <div>This is Header </div>
    //   <div> <Outlet /> </div>
    //   <div>This is Footer </div>
    // </div>

      <div>
      <div className="min-h-screen flex justify-center items-center"> 
        <Outlet />
      </div>
    </div>
  )
}