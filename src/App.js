import { useTranslation } from "react-i18next";
import "./App.css";
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <button onClick={()=>i18next.changeLanguage('en')}>English</button>
      <button onClick={()=>i18next.changeLanguage('hi')}>Hindi</button>
      <h1>{t("main_head")}</h1>
      <p>{t("main_para")}</p>
    </div>
  );
}

export default App;
