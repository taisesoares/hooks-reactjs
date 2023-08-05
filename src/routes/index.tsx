import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HooksReactJs } from '../pages';
import { HookUseRef } from '../pages/HookUseRef';

export const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HooksReactJs />} />
        <Route path="/useRef" element={<HookUseRef />} />
      </Routes>
    </Router>
  );
};
