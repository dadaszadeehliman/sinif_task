import axios from 'axios'
import { useEffect, useState } from 'react'

const Favoritlerim = () => {

  const [favoritget, setfavoritget] = useState([])
  useEffect((data) => {
    axios.get('http://localhost:8000/favoritler/', data)
      .then(res => setfavoritget(res.data))
  }, [])

  const FovaritDelete=(id)=>{
    axios.delete('http://localhost:8000/favoritler/'+id)
  }

  return (
    <div className='container'>
      <table className='mb-5'>
        <thead>
          <tr>
            <th>ID</th>
            <th>img</th>
            <th>Name</th>
            <th>About</th>
            <th>Money</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {favoritget.map(element => {
            return (
              <tr key={element.id} className='adminget_img'>
                <td>{element.id}</td>
                <td><img src={element.img} alt="adminget" /></td>
                <td>{element.name}</td>
                <td>{element.about}</td>
                <td>${element.money}</td>
                <td><button className='btn btn-primary' onClick={()=>FovaritDelete(element.id)}>Delete</button></td>
              </tr>
            )
          })}


        </tbody>
      </table>
    </div>

  )
}

export default Favoritlerim