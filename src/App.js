import {useState} from 'react';
import Header from './components/Header';
import Items from './components/Items';
import AddItem from './components/AddItem';
import './App.css';

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Desarrollando proyecto en laravel',
      category: 'Desarrollo y Programación',
      day:'Lun',
      time: '18:00'
    },
    {
        id: 2,
        title: 'Aprendiendo React',
        category: 'Desarrollo y Programación',
        day:'Lun',
        time: '03/05/2021'
    },
    {
        id: 3,
        title: 'Intr. a Data Science con Python',
        category: 'Desarrollo y Programación',
        day:'Lun',
        time: '04/05/2021'
    },
    {
        id: 4,
        title: 'Aprendiendo Algoritmia con Python',
        category: 'Desarrollo y Programación',
        day:'Lun',
        time: '05/05/2021'
    }
  ]);

  const addItem = (item) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newItem = {id, ...item};
    console.log(newItem);
    setItems([...items, newItem]);
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Header/>
        <AddItem addItem={addItem}/>
        <Items items={items} deleteItem={deleteItem}/>
      </div>
    </div>
  );

}

export default App;
