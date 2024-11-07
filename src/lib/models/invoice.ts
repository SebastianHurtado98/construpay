import { Company } from "./company"

export interface Invoice {
    id: string;
    created_at: string;
    amount: number;
    due_date: string;
    client_id: string;
    provider_id: string;
    client: Company;
    provider: Company;
}