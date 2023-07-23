import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const InitialAuthState = {
  isLoggedIn: false,
  user: {},
}

export const AuthStore = create(
  persist(
    (set) => ({
      authState: InitialAuthState,
      updateAuthState: (authState: {
        isLoggedIn: boolean
        user: { name: string; github_user_name: string; id: string; avatar_url: string }
      }) => set(() => ({ authState: authState })),
      resetAuthState: () => set(() => ({ authState: InitialAuthState })),
    }),
    {
      name: "authState",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
