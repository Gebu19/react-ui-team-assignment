import { useSettings } from "../context/settinsProvider";

const SettingsPanel = () => {
  const { theme, setTheme, language, setLanguage, resetSettings } = useSettings();

  return (
    <div className="panel" style={{ padding: '20px', border: '1px solid #ccc', margin: '10px 0' }}>
      {/* ALWAYS ENGLISH */}
      <h3>Settings</h3>
      
      {/* Theme Selector */}
      <div style={{ marginBottom: '10px' }}>
        <strong>Theme: </strong>
        <button 
          onClick={() => setTheme('light')} 
          disabled={theme === 'light'}
        >
          Light
        </button>
        <button 
          onClick={() => setTheme('dark')} 
          disabled={theme === 'dark'}
          style={{ marginLeft: '5px' }}
        >
          Dark
        </button>
      </div>

      {/* Language Selector */}
      <div style={{ marginBottom: '10px' }}>
        <strong>Language: </strong>
        <button 
          onClick={() => setLanguage('en')} 
          disabled={language === 'en'}
        >
          EN
        </button>
        <button 
          onClick={() => setLanguage('th')} 
          disabled={language === 'th'}
          style={{ marginLeft: '5px' }}
        >
          TH
        </button>
      </div>

      {/* ALWAYS ENGLISH */}
      <button onClick={resetSettings} style={{ marginTop: '10px', color: 'red' }}>
        Reset Defaults
      </button>
    </div>
  );
};

export default SettingsPanel;