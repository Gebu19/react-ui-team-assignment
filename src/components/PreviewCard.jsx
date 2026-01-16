import { useSettings } from "../context/settinsProvider";

const PreviewCard = () => {
  const { theme, language } = useSettings();

  const messages = {
    en: 'This is your preference preview.',
    th: 'นี่คือหน้าตัวอย่างการตั้งค่า'
  };

  return (
    <div className={`card ${theme}`} style={{ 
      padding: '20px', 
      marginTop: '20px', 
      borderRadius: '8px',
      border: '1px solid',
      backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      borderColor: theme === 'light' ? '#ddd' : '#555'
    }}>
      {/* ALWAYS ENGLISH */}
      <h2>Preference Preview</h2>
      
      {/* DYNAMIC (Changes based on language) */}
      <p>{messages[language]}</p>
      
      <hr />
      
      {/* ALWAYS ENGLISH */}
      <small>Current Theme: {theme.toUpperCase()}</small> <br/>
      <small>Current Language: {language.toUpperCase()}</small>
    </div>
  );
};

export default PreviewCard;