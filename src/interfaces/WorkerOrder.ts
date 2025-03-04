export interface WorkerOrder {
    id: number;

    publicId: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}