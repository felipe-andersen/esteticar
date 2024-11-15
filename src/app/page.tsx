import type { Metadata } from 'next'


type Props = {
    params?: any
    searchParams?: any
}
 
export async function generateMetadata({ params }:Props) {
    return {
        title: 'Esteticar',
        description:'CRV para negócio de estética automotiva'
    }
}   

export default function InitialPage() {
    return (
        <div className="flex  h-screen w-screen flex-col  overflow-hidden ">
            dffdfd
        </div>
    );
}
