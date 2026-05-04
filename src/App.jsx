import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import SiteLayout from "./layouts/SiteLayout.jsx";

import Home from "./pages/Home/Home.jsx";
import Servicos from "./pages/Servicos/Servicos.jsx";
import Sistemas from "./pages/Sistemas/Sistemas.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Drawback from "./pages/Drawback/Drawback.jsx";
import Timeline from "./pages/Timeline/Timeline.jsx"; // IMPORTAÇÃO DA TIMELINE

import Reintegra from "./pages/Reintegra/Reintegra.jsx";
import Sped from "./pages/Sped/Sped.jsx";
import Catalogo from "./pages/Catalogo/Catalogo.jsx";
import Gespro from "./pages/Gespro/Gespro.jsx";
import VisoDue from "./pages/VisoDue/VisoDue.jsx";
import VisoImport from "./pages/VisoImport/VisoImport.jsx";
import Educacional from "./pages/Educacional/Educacional.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="sistemas" element={<Sistemas />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="drawback" element={<Drawback />} />
          
          <Route path="historico" element={<Timeline />} />

          <Route path="reintegra" element={<Reintegra />} />
          <Route path="sped" element={<Sped />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="gespro" element={<Gespro />} />
          <Route path="visodue" element={<VisoDue />} />
          <Route path="visoimport" element={<VisoImport />} />
          <Route path="educacional" element={<Educacional />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}