import VerticalMenu from "@/layout/organisms/VerticalMenu";
import { TopBar } from "@/layout/organisms/header";
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