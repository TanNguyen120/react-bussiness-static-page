import logo from './logo.svg';
import './App.css';
import './components/ProfilePicture';
import ProfilePicture from './components/ProfilePicture';
import NameAndJobs from './components/Name&Jobs';
import LinkButton from './components/LinkButton';

function App() {
  return (
    <div className="business-card">
      <ProfilePicture />
      <NameAndJobs />
      <LinkButton />
    </div>
  );
}

export default App;
