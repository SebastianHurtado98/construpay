import { supabase } from '@/lib/supabase';
import { User } from '@/lib/models/user';

export const UserService = {
  async getCompanyUsers(): Promise<User[]> {
    const { data, error } = await supabase
      .from('User')
      .select('*');

    if (error) {
      console.error('Error fetching users:', error);
      throw error;
    }

    return data as User[];
  }
};