import * as repository from '@/app/api/(repository)/user.repository';

export const getAllUsers = async (offset: number, limit: number) => {
  return await repository.find(offset, limit);
};
