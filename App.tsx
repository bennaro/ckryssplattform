import React from "react";
import { 
  Roboto_700Bold,
  Roboto_400Regular, 
  useFonts,
} from "@expo-google-fonts/roboto";
import WelcomeRoutes from "./src/Routes/Welcome.Routes";


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if(!fontsLoaded) {
    return null;
  }

  //return <WelcomeRoutes/>
return ( 
  
    <WelcomeRoutes/>
  
);


}
