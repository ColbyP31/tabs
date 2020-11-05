import React, { useState } from 'react';
import './App.css';
import TabHeader from './components/TabHeader.jsx'


function App() {
  const [tabs, setTabs] = useState([
    {
      selected: true,
      title: "First Tab",
      content: "Content from tab 1"
    },
    {
      selected: false,
      title: "Second Tab",
      content: "Content from tab 2"
    },
    {
      selected: false,
      title: "Third Tab",
      content: "Content from tab 3"
    },
    {
      selected: false,
      title: "Fourth Tab",
      content: "Content from tab 4"
    },
    {
      selected: false,
      title: "Fifth Tab",
      content: "Content from tab 5"
    }
  ])

  const handleClick = (clickedIndex) => {
    console.log(`You clicked tab ${clickedIndex}`);
    tabs.map((tab, i) =>{
      let t = tab;
      if(clickedIndex === i){
        t.selected = true;
      }
      else{
        t.selected = false;
      }
      setTabs([...tabs.slice(0,i),t,].concat(tabs.slice(i+1)))
    })
  }

  return (
    <div className="App">
        {
          tabs.map((tab, i) => {
            return <TabHeader selected={tab.selected} index={i} title={tab.title} handleClick={handleClick}/>
          })
        }
        {
          tabs.map((tab, i) => {
            if(tab.selected)
              return tab.selected ? <p>{tab.content}</p> : "" 
          })
        }
    </div>
  );
}

export default App;
