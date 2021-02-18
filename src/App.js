import Header from './components/header/header';
import Info from './components/info/info';
import Me from './components/me/me';
import MyWorks from './components/myWorks/myWorks';
import './scss/App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='wrapper'>  
        <Header />
        <Me />
        <Info />
        <MyWorks />
      </div>
    </div>
  );
}

export default App;
