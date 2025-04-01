import { Header } from "@/components/organisms/header";
import { Main } from "./main";
import SideBar from "@/components/organisms/side-bar";


export function Staff() {
    return (
        <div className="w-full h-[100vh] overflow-y-hidden">
            <Header pageName="CRM"/>
            <Main />
        </div>
    )
}