import { AutosizeTextarea } from '../../components/exemples/HookUseRef/AutosizingTextarea';
import { AutoFocusInput } from '../../components/exemples/HookUseRef/FocusOnMount';
import { WindowResizeTracker } from '../../components/exemples/HookUseRef/TrackingWindowResize';

export const HookUseRef = () => {
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
};
