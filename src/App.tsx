import './App.css';
import { AutosizeTextarea } from './components/exemples/AutosizingTextarea';
import { WindowResizeTracker } from './components/exemples/TrackingWindowResize';
import { AutoFocusInput } from './components/exemples/FocusOnMount';

function App() {
  return (
    <>
      <h1>Hook useRef</h1>

      <h2>Exemplo 1: Referenciando um Elemento Textarea</h2>
      <AutosizeTextarea />

      <h2>Exemplo 2: Acompanhamento do Redimensionamento da Janela</h2>
      <WindowResizeTracker />

      <h2>Exemplo 3: Foco no Carregamento</h2>
      <AutoFocusInput />
    </>
  );
}

export default App;
