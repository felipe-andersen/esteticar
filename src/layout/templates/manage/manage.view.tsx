import { BottomNavigation } from "@/layout/organisms/bottom-navigation/bottom-navigation.view";
import Main from "./manage.main";
import { Header } from "@/layout/organisms/header";


export default function Manage () {
    return (
        <div>
            {/* <Header/> */}
            <Main/>
            <BottomNavigation/>
        </div>
    )
}