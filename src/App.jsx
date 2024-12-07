import { NextUIProvider } from "@nextui-org/react";
import Popup from './components/Popup';

function App() {
  return (
    <NextUIProvider>
      <div className="dark text-foreground bg-background">
        <Popup />
      </div>
    </NextUIProvider>
  );
}

export default App;