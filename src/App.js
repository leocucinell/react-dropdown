import './App.css';

import ListItem from './components/ListItem';

function App() {
  return (
    <div className="App">

      <nav className='navbar'>
        <ul className='navbar-ul'>
          <ListItem title={"About"} items={["Mission", "Team", "Legacy"]} />
          <ListItem title={"Contact"} items={["Mission", "Team", "Legacy"]} />
          <ListItem title={"Services"} items={["Mission", "Team", "Legacy"]} />
          <ListItem title={"Programs"} items={["Mission", "Team", "Legacy"]} />
        </ul>
      </nav>

      <main className='main-content'>
        
      </main>
    </div>
  );
}

export default App;
