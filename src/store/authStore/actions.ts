import type { StateCreator } from 'zustand'
import type { AuthState, AuthActions, User, LoginType } from './types'

export const createAuthSlice: StateCreator<
  AuthState & AuthActions,
  [],
  [],
  AuthActions
> = (set, get) => ({
  login: (userData: User) => {
    set({ 
      user: userData, 
      isAuthenticated: true,
      isLoading: false
    })
  },
  
  loginWithProvider: (username: string, loginType: LoginType) => {
    const userData: User = {
      id: Date.now().toString(), 
      username: username,
      loginType: loginType,
      loginTime: new Date().toISOString()
    }
    
    set({ 
      user: userData, 
      isAuthenticated: true,
      isLoading: false
    })
  },
  
  logout: () => {
    set({ 
      user: null, 
      isAuthenticated: false,
      isLoading: false
    })
  },
  
  updateUser: (userData: Partial<User>) => {
    const currentUser = get().user
    if (currentUser) {
      set({ 
        user: { ...currentUser, ...userData } 
      })
    }
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading })
  }
})