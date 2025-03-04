import { BottomNavigation } from "@/layout/organisms/bottom-navigation/bottom-navigation.view";
import Manage from "@/layout/templates/manage/manage.view";
import { Settings } from "lucide-react";

export default function ManagePage() {
    return (
        <>
            {/* <div className="p-0">
                <div className="fixed top-0 bottom-0 let-0 w-12 border bg-red-0 p-0">
                    <div className="w-12 h-16 flex justify-center items-center border-b">
                        <Settings 
                            strokeWidth={1} 
                            size={18}
                        />
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center border-b">
                        <Settings 
                            strokeWidth={1} 
                            size={18}
                        />
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center border-b">
                        <Settings 
                            strokeWidth={1} 
                            size={18}
                        />
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center border-b">
                        <Settings 
                            strokeWidth={1} 
                            size={18}
                        />
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center border-b">
                        <Settings 
                            strokeWidth={1} 
                            size={18}
                        />
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center border-b">
                        <Settings 
                            strokeWidth={1} 
                            size={18}
                        />
                    </div>
                </div>
            </div> */}
            <Manage/>
        </>
    )
}