import logo from './logo.svg';
import './App.css';
import './components/ProfilePicture';
import ProfilePicture from './components/ProfilePicture';
import NameAndJobs from './components/Name&Jobs';
import LinkButton from './components/LinkButton';
import About from './components/About';
import Footer from './components/Footer';
import Interest from './components/Interest';

function App() {
  return (
    <div className="business-card">
      <ProfilePicture />
      <NameAndJobs />
      <LinkButton />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
