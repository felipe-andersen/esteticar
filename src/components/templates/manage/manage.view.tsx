import { BottomNavigation } from "@/components/organisms/bottom-navigation/bottom-navigation.view";
import Main from "./manage.main";
import { Header } from "@/components/organisms/header";


export default function Manage () {
    return (
        <div className="w-screen h-screen overflow-hidden">
            {/* <Header/> */}
            <Main/>
            <BottomNavigation/>
        </div>
    )
}