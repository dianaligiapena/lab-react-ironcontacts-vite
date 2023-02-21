import './App.css'
import contactsJSON from "./contacts.json"

function App() {
  const firstSix = contactsJSON.slice(0, 6);
  console.log(firstSix);


  return <div className='App'>
    <h1>IronContacts</h1>

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
        {firstSix.map((element) => {
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