'use client'
import { useRouter } from "next/navigation"


export default function Cart() {
    const router = useRouter()
    return (
        <>
            <button onClick={() => router.push('/payment')}>
                Pagamento
            </button>
        </>
    )
}