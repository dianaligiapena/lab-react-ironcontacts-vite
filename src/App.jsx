import './App.css'
import contactsJSON from "./contacts.json"

function App() {
  const firstFive = contactsJSON.slice(0, 5);
  console.log(firstFive);


  return <div className='App'>
    <h1>IronContacts</h1>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>

      <tbody>
        {firstFive.map((element) => {
            return (
              <tr key={element.id} className="table">
                <td>
                    <img src={element.pictureUrl} alt="{element.name}" />
                  </td>
                <td>{element.name}</td>
                <td>{element.popularity}</td>
              </tr>
            )
          })}
        </tbody>

    </table>
  
  </div>
}
export default App