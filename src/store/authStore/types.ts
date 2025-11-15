export type LoginType = 'email' | 'google' | 'facebook' | 'apple' | 'tiktok' | 'phone'

export type User = {
  id: string
  username: string
  email?: string
  phone?: string
  avatar?: string
  loginType: LoginType
  loginTime: string
}

export type AuthState = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export type AuthActions = {
  login: (userData: User) => void
  loginWithProvider: (username: string, loginType: LoginType) => void
  logout: () => void
  updateUser: (userData: Partial<User>) => void
  setLoading: (loading: boolean) => void
}

export type AuthStore = AuthState & AuthActions