import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";

/**
 * Страницы подгружаются по маршруту. Статические импорты складывали код всех
 * четырёх в один бандл: открывая /lider, телефон качал 458 КБ JS, включая
 * GroupsPage, Programs и AxonPage, которые на этом маршруте не отрисуются.
 *
 * `.then` с переименованием нужен из-за именованных экспортов: React.lazy
 * ждёт модуль с полем `default`.
 */
const GroupsPage = lazy(() =>
  import("./components/pages/groups/page").then((m) => ({ default: m.GroupsPage }))
);
const Programs = lazy(() =>
  import("./components/pages/programs").then((m) => ({ default: m.Programs }))
);
const AxonPage = lazy(() =>
  import("./components/pages/axon/AxonPage").then((m) => ({ default: m.AxonPage }))
);
const LiderDarkPage = lazy(() =>
  import("./components/pages/liderDark/LiderDarkPage").then((m) => ({ default: m.LiderDarkPage }))
);

/**
 * Заглушка без своего фона: у html уже задан #02010a, на нём же стоят все три
 * страницы, поэтому просвет не мигает другим цветом. `min-h-screen` держит
 * высоту, чтобы подстановка страницы не давала сдвига layout.
 */
const Fallback = <div className="min-h-screen" aria-busy="true" />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={Fallback}>
        <Routes>
          <Route path="/axon" element={<AxonPage />} />
          <Route path="/lider" element={<LiderDarkPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<GroupsPage />} />
            <Route path="programs" element={<Programs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
