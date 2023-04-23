

 import { 
  NavigationContainer, 
} from '@react-navigation/native'; 

import {ThemeProvider} from './src/theme/ThemeProvider'
import AuthNavigator from './navigation';


 function App() {

   return (
    <ThemeProvider >
              <NavigationContainer>
              <AuthNavigator/>
              </NavigationContainer>
    </ThemeProvider>

   );
 }

 export default App;
 