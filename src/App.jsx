import './App.css'
import contactsJSON from "./contacts.json"
import { useState } from "react";

function App() {
  const [ contacts, setContacts ] = useState(contactsJSON.slice(0, 5));
  const [ remaining, setRemaining  ] = useState(contactsJSON.slice(5));

  const addRandomContact = () => {
    const random = Math.floor(Math.random() * remaining.length);
    const newContact = remaining.splice(random, 1)[0];
    console.log(remaining.length);
    setContacts( [ ...contacts, newContact ]  );
  }

  const sortByPopularity = () => {
    const popularityList = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(popularityList);
  };

  const sortByName = () => {
    const nameList = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(nameList);
  };

  return <div className='App'>
    <h1>IronContacts</h1>

    <div>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
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
        {contacts.map(( { id, pictureUrl, name, popularity, wonOscar, wonEmmy } ) => {
            return (
              <tr key={id} className="table">
                <td>
                    <img src={pictureUrl} alt="{name}" />
                  </td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar? "🏆":"🙅"}</td>
                <td>{wonEmmy? "🏆":"🙅"}</td>
              </tr>
            )
          })}
        </tbody>

    </table>
  
  </div>
}
export default App