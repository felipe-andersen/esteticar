import Dashboard from "@/components/templates/dashboard/dashboard.view";


type Props = {
    params?: any
    searchParams?: any
}
 
export async function generateMetadata({ params }:Props) {
    return {
        title: 'Dashboard',
        description:'Gerencie seu negócio com ferramentas eficazes'
    }
}

export default function InitialPage() {
    return (
        <div className="flex h-screen w-screen flex-col  overflow-hidden ">
            <Dashboard/>
        </div>
    );
}


