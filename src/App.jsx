import { NextUIProvider } from "@nextui-org/react";
import Popup from './components/Popup';

function App() {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <Popup />
      </main>
    </NextUIProvider>
  );
}

export default App;