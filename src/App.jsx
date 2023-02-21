import './App.css'
import contactsJSON from "./contacts.json"
import { useState } from "react";

function App() {
  const [ contacts, setContacts ] = useState(contactsJSON.slice(0, 2));

  const [ remaining, setRemaining  ] = useState(contactsJSON.slice(6));

  const addRandomContact = () => {
    const random = Math.floor(Math.random() * remaining.length);

    const newContact = remaining.splice(random, 1)[0];
    
    console.log(remaining.length);
    setContacts( [ ...contacts, newContact ]  );
  }

  return <div className='App'>
    <h1>IronContacts</h1>

    <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((element) => {
            return (
              <tr key={element.id} className="table">
                <td>
                    <img src={element.pictureUrl} alt="{element.name}" />
                  </td>
                <td>{element.name}</td>
                <td>{element.popularity}</td>
                <td>{element.wonOscar? "🏆":""}</td>
                <td>{element.wonEmmy? "🏆":""}</td>
              </tr>
            )
          })}
        </tbody>

    </table>
  
  </div>
}
export default App