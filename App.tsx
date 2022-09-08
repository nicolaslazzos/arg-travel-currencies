import ThemeProvider from './src/theme';

import Main from './src';

const App = () => {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
};

export default App;
