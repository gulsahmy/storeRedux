import AppRouter from "./router/AppRouter"
import themeContextProvider from "./context/themeContextProvider"

function App() {
  return (
    <div className="App">
      <themeContextProvider>
        <AppRouter />
      </themeContextProvider>
      
    </div>
  );
}

export default App;
