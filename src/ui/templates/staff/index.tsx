import VerticalMenu from "@/ui/organisms/VerticalMenu";
import { TopBar } from "@/ui/organisms/topBar";
import { Main } from "./main";
import { worker } from "./utils";



export function Staff() {
    return (
        <div className="w-full h-[100vh] overflow-y-hidden">

            <TopBar pageName="CRM"/>
 
            <VerticalMenu/>

            <Main />

        </div>
    )
}