import { SettingsProvider,useSettings } from './context/settinsProvider';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewCard from './components/PreviewCard';
import './App.css'; 

const MainContent = () => {
  const { theme } = useSettings();

  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <SettingsPanel />
        <PreviewCard />
      </main>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <MainContent />
    </SettingsProvider>
  );
}

export default App;