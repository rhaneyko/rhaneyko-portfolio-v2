import React from 'react';
import { ThemeProvider } from 'styled-components';



import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';

 const App = () => {
   
  return (
    <ThemeProvider theme={theme}>
       {/* <Navbar/> */}
       <Layout />
       <GlobalStyles/>
    </ThemeProvider>
    );
}

export default App;
