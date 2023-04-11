import { Provider } from "react-redux"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"
import { store } from "./store"

export const JournalApp = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </Provider>
  )
}
