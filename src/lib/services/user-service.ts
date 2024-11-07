import { supabase } from '@/lib/supabase';
import { User } from '@/lib/models/user';
import { AuthService } from './auth-service';

export const UserService = {
  async getUserCompanyIds(): Promise<number[]> {
    try {
      const currentUser = await AuthService.getCurrentUser();
      if (!currentUser) {
        throw new Error('No user authenticated');
      }

      const { data, error } = await supabase
        .from('UserCompany')
        .select('company_id')
        .eq('user_id', currentUser.id);

      if (error) {
        console.error('Error fetching company ids: ', error);
        throw error;
      }
      return data.map(item => item.company_id);
    } catch (error) {
      console.error('Error in getUserCompanyIds: ', error);
      throw error;
    }
  },

  async getCompanyUserIds(): Promise<number[]> {
    try {
      const companyIds = await this.getUserCompanyIds();
      const {data, error} = await supabase
        .from('UserCompany')
        .select('user_id')
        .in('company_id', companyIds);
      if (error) {
        console.error('Error fetching user ids: ', error);
        throw error;
      }
      return data.map(item => item.user_id);
    } catch (error) {
      console.log('Error in getCompanyUserIds: ', error);
      throw error;
    }
  },
  
  async getCompanyUsers(): Promise<User[]> {
    try {
      const userIds = await this.getCompanyUserIds();
      const {data, error} = await supabase
        .from('User')
        .select('*')
        .in('id', userIds);
      if (error) {
        console.error('Error fetching users', error);
        throw error;
      }
      return data as User[];
    } catch (error) {
      console.log('Error in getCompanyUsers: ', error);
      throw error;
    }
  },
};