import VerticalMenu from "@/components/organisms/VerticalMenu";
import { TopBar } from "@/components/organisms/topBar";
import { Main } from "./main";



export function Staff() {
    return (
        <>

            <TopBar pageName="CRM"/>
 
            <VerticalMenu/>

            <Main/>

        </>
    )
}