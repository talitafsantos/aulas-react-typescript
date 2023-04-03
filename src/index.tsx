import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

// export const Routes = () => {
//   return (
//     <BrowserRouter>
//     <Switch>
//       <Route path="/entrar" element={<Login />} />
//       <Route path="/entrar" element={<Dashboard />} />

//       <Route path="*" element={<Navigate to="/pagina-inicial" />} />


//     </Switch>
//     </BrowserRouter>
//   )
// }