import { useCallback } from 'react';
import { useAuthStore } from '@/store/authStore';

export const useAuth = () => {
  const { user, isAuthenticated, token, setUser, setToken, logout } = useAuthStore();

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const { user, token } = await response.json();
      setUser(user);
      setToken(token);

      localStorage.setItem('token', token);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }, [setUser, setToken]);

  const register = useCallback(async (userData: any) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Registration failed');

      const { user, token } = await response.json();
      setUser(user);
      setToken(token);

      localStorage.setItem('token', token);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }, [setUser, setToken]);

  const logoutUser = useCallback(() => {
    logout();
    localStorage.removeItem('token');
  }, [logout]);

  return {
    user,
    isAuthenticated,
    token,
    login,
    register,
    logout: logoutUser,
  };
};
