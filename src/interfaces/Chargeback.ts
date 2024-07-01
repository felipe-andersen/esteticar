export interface Chargebacks {
    salesID: string
    chargebackID: string
    chargebackDate: string
    chargebackAmount: number
    chargebackReason: string
    chargebackStatus: "pending" | "rejected" | "completed"
    chargebackType: {
        type: 'currency' | "financial transaction"
        
    }
   
}