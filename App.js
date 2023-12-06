import { SafeAreaProvider } from "react-native-safe-area-context";
import ShoppingScreen from "./src/screens/ShoppingScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ShoppingScreen />
    </SafeAreaProvider>
  );
}
