import './App.css';

import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <ul className='navbar-ul'>
          <ListItem title={"About"} />
          <ListItem title={"Contact"} />
          <ListItem title={"Services"} />
          <ListItem title={"Programs"} />
        </ul>
      </nav>
    </div>
  );
}

export default App;
