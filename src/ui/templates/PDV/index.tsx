import VerticalMenu from "@/ui/organisms/VerticalMenu";
import { TopBar } from "@/ui/organisms/topBar";
import { Main } from "./main";


export function PDV() {
    return (
        <div className="bg-[#f6f8fa]">

            <TopBar pageName="PDV"/>
 
            <Main/>

        </div>
    )
}