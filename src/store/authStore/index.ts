import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { AuthStore } from './types'
import { initialState } from './initialState'
import { createAuthSlice } from './actions'
import { createSafeStorage } from '@/utils/storage'

export const useAuthStore = create<AuthStore>()(
  persist(
    (...a) => ({
      ...initialState,
      ...createAuthSlice(...a),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => createSafeStorage()),
    }
  )
)