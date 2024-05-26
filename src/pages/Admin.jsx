import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    const [adminget, setadminget] = useState([])
    const [search, setsearch] = useState("")
    const [filter, setfilter] = useState("normal")


    useEffect(() => {
        axios.get('http://localhost:8000/restoran/')
            .then(res => setadminget(res.data))
    }, [])

    const adminDelete = (id) => {
        axios.delete('http://localhost:8000/restoran/' + id)
    }

    const favoritlerGet=(id)=>{
        axios.get('http://localhost:8000/restoran/' + id).then(res=>axios.post('http://localhost:8000/favoritler/',res.data))
    }

    const serachdata = () => {
        let cardFiltered;
        if(filter =='artan'){
            cardFiltered=dataget.toSorted((a,b)=>Number(a.money)-Number(b.money))
        }else if(filter=='azalan'){
            cardFiltered=dataget.toSorted((a,b)=>b.money-a.money)
        }else{
            cardFiltered=[...adminget]
        }
        return cardFiltered.filter(inf => inf.name.toUpperCase().startsWith(search.toUpperCase()))
    }
    let cards=serachdata()

    return (
        <div className='container'>
            <Link to='/Add' className='btn btn-primary mt-4'>Add</Link>
            <div>
                <input type="text" placeholder='Searc Name'className='admin_search' onInput={(e) => setsearch(e.target.value)}/>
                <select className='admin_sort'>
                    <option value="normal">Normal</option>
                    <option value="artan">A-Z</option>
                    <option value="azalan">Z-A</option>
                </select>
            </div>
            <table className='mb-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>About</th>
                        <th>Money</th>
                        <th>Favoritlere ekle</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(element => {
                        return (
                            <tr key={element.id} className='adminget_img'>
                                <td>{element.id}</td>
                                <td><img src={element.img} alt="adminget" /></td>
                                <td>{element.name}</td>
                                <td>{element.about}</td>
                                <td>${element.money}</td>
                                <td><button className='btn btn-danger' onClick={()=>favoritlerGet(element.id)}>Like</button></td>
                                <td><Link to={'/Edit/'+element.id} className='btn btn-primary mt-4 mb-4'>Edit</Link></td>
                                <td><button className='btn btn-primary' onClick={() => adminDelete(element.id)}>Delete</button></td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>

    )
}

export default Admin