import { supabase } from '../supabase';
import { Invoice } from '../models/invoice';
import { UserService } from '@/lib/services/user-service'

export const InvoiceService = {
  async getPayableInvoices(): Promise<Invoice[]> {
    try {
      const companyIds = await UserService.getUserCompanyIds();
      
      const { data, error } = await supabase
        .from('Invoice')
        .select(`
          *,
          client:client_id (
            id,
            razon_social,
            ruc,
            created_at
          ),
          provider:provider_id (
            id,
            razon_social,
            ruc,
            created_at
          )
        `)
        .in('client_id', companyIds);

      if (error) {
        console.error('Error fetching payable invoices:', error);
        throw error;
      }

      return data as Invoice[];
    } catch (error) {
      console.error('Error in getPayableInvoices:', error);
      throw error;
    }
  },

  async getReceivableInvoices(): Promise<Invoice[]> {
    try {
      const companyIds = await UserService.getUserCompanyIds();
      
      const { data, error } = await supabase
        .from('Invoice')
        .select(`
          *,
          client:client_id (
            id,
            razon_social,
            ruc,
            created_at
          ),
          provider:provider_id (
            id,
            razon_social,
            ruc,
            created_at
          )
        `)
        .in('provider_id', companyIds);

      if (error) {
        console.error('Error fetching receivable invoices:', error);
        throw error;
      }

      return data as Invoice[];
    } catch (error) {
      console.error('Error in getReceivableInvoices:', error);
      throw error;
    }
  }
};