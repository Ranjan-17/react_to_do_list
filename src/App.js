import { useState} from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import "./index.css"
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [newItem,setNewItem]=useState("")
  const[items,setItems]=useState(JSON.parse(localStorage.getItem("todo_list")))
  const[search,setSearch]=useState("")


const handleCheck=(id)=>{
  const listItems = items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))

}
const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))

}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem) return;
  console.log(newItem)
  addItem(newItem) 
  setNewItem("")

        
}


const addItem=(item)=>{
  const id =items.length? items[items.length-1].id+1:1
  const addNewItem={id,checked:false,item}
  const listItems=[...items,addNewItem]
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}
  return (
   <div className='App'>     
      <Header/>
      <AddItem
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}     
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      
      />
      <Content 
        items={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}

      
      />
      <Footer/>

   </div>
   
  );
}

export default App;
