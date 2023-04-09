import { AuthProvider } from "./Auth"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    
    </AuthProvider>
  )
}
