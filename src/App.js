
import './styles/Aboutsec.css';
import './styles/Welcomesec.css'; 
import './styles/Tilecomponent.css';
import './styles/Projectssec.css'; 
import './styles/Contactsec.css';
import './styles/Portfolio.css';
import Welcomesec from './components/Welcomesec'; 
import Aboutsec from './components/Aboutsec';
import Projectssec from './components/Projectssec'; 
import Contactsec from './components/Contactsec';

function App() { 
    return (
        <div className="App">
            <Welcomesec></Welcomesec> 
            <Aboutsec></Aboutsec>
            <Projectssec></Projectssec>
            <Contactsec></Contactsec>
        </div>
    );
}

export default App;