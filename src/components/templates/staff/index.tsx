import VerticalMenu from "@/components/organisms/VerticalMenu";
import { TopBar } from "@/components/organisms/topBar";
import { Main } from "./main";


export function Staff() {
    return (
        <div className="w-full h-[100vh] overflow-y-hidden">

            <TopBar pageName="CRM"/>
 
            <VerticalMenu/>

            <Main />

        </div>
    )
}