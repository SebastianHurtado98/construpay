export interface User {
    id: string;
    email: string;
    created_at: string;
    first_name: string;
    last_name: string;
}

export interface UserCompany {
    id: string;
    user_id: string;
    company_id: string;
    created_at: string;
}