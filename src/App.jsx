import { Routes, Route } from "react-router-dom";
import Layout from "./komponenter/Layout";
import Hjem from "./sider/hjem";
import PersonProfil from "./sider/medlemprofil";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/medlem/:id" element={<PersonProfil />} />
      </Routes>
    </Layout>
  );
}

export default App;
