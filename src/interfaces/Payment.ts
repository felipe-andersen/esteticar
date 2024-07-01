export interface Payment {
    id: number;
    name: string;
    description: string;
    amount: number;
    date: Date;
    status: string;
    paymentType: string;
    paymentMethod: string;
    paymentStatus: string;
    paymentDate: Date;
    paymentAmount: number;
    // paymentCurrency: string;
    // paymentDescription: string;
    paymentReference: string;
    
}