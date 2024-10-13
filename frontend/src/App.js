
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Students from './students';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';





function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Students />}></Route>
        <Route path='/create' element={<CreateStudent />}></Route>
        <Route path='/update/:id' element={<UpdateStudent />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
/*import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/student')
      .then(res => res.json())
      .then(data => {
        setData(data);  // Update the state with the fetched data
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {data.map(d => (
        <div key={d.id}> {/* Ensure each child has a unique key prop }
          <p>{d.Name}</p>
          <p>{d.email}</p>
        </div>
      ))}
    </div>
  );
}*/

export default App;
