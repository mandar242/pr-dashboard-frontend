import { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Table from './components/Table';

function App() {
  const [activeCollectionName, setActiveCollectionName] = useState('amazon.aws');

  const handleCollectionChange = (collectionName) => {
    setActiveCollectionName(collectionName);
  };

  return (
    <>
      <div className='w-full flex'>
        < NavigationBar setActiveCollection={handleCollectionChange} />
        <main className="grow">
          <Table activeCollection={activeCollectionName} />
        </main>
      </div>
    </>
  );
}

export default App;
