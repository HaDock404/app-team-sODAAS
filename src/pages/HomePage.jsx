import Header from '../components/Header.jsx'
import TextComponent from '../components/TextComponent.jsx';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <>
      <Header />
      <TextComponent />
      <Link  to="/bis"> click me</Link>
    </>
  );
}

export default HomePage;
