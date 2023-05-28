import { MantineProvider } from '@mantine/core';
import { Title } from '@mantine/core';
import './App.css';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS 
    theme={{
      fontFamily: 'DM Sans, sans-serif',
    }}>

      <div className="App">
        <Title order={1}>This is h1 title</Title>
      </div>
    </MantineProvider>
    
  );
}

export default App;
