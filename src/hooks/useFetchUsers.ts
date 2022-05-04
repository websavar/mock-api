import { useState, useEffect } from 'react';
import api from 'api';
import { UserInterface } from 'interfaces';

const initialUser: UserInterface = {
  userId: '',
  firstName: '',
  lastName: '',
  email: '',
}

export function useFetchUsers() {
  const [user, setUser] = useState<UserInterface>(initialUser);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.getMockData('users');
      if (res)
        setUser(res[0]);
    }

    fetchUser();
  }, []);

  return user;
}