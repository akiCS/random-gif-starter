import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {

  return (

    <div className="w-[100vw] h-[100vh] flex flex-col background">

      <h1 className="bg-white rounded-lg text-center mt-[40px] ml-[25px] mr-[25px] py-2 text-3xl font-bold ">RANDOM GIFS</h1>

      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">

        <Random></Random>
        <Tag></Tag>

      </div>

    </div>

  )
}
