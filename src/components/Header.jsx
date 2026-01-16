import { useSettings } from "../context/settinsProvider";

const Header = () => {
  const { language } = useSettings();

  // This is the second thing that changes
  const titles = {
    en: 'Welcome',
    th: 'ยินดีต้อนรับ'
  };

  return (
    <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h1>{titles[language]}</h1>
    </header>
  );
};

export default Header;