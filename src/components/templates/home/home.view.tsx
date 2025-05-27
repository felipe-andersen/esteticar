import { Header } from "./header.view"
import { Main } from "./main.view"



export const Home = () => {
    return (
        <div className="w-full h-screen">
            <Header/>
            <Main />
        </div>
    )
}