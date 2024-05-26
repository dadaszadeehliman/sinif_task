import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useParams } from "react-router-dom"




export default function Edit() {
    const {id} = useParams();
    const [editdata, seteditdata] = useState({})
    const [postget, setpostget] = useState(null)
    useEffect(() => {
      fetch('http://localhost:8000/restoran/'+id)
     .then(res=>res.json())
     .then((editdata)=>{seteditdata(editdata); setpostget(editdata.img)})
    }, [])
    
    const imgDataAdd=(file)=>{
        if(!file) return;
        console.log(file);
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=(e)=>setimgdata(reader.result)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({defaultValues : async ()=>axios.get('http://localhost:8000/restoran/'+id)})


    const onSubmit = (data) => {
        axios.patch('http://localhost:8000/restoran/'+id,{...data, img: postget})
    }
    return (
        <div className="admin_add_esas p-5">
            <h1 className="text-center mb-3">Add  Etmek</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="admin_add m-5 mt-0">
                <input type="file" name="img"  onInput={(e)=>imgDataAdd(e.target.files[0])} />
                {postget && <img src={postget} width='80px' height='80px' className="data_add_img"/>}
                <input placeholder="Name" {...register("name")} defaultValue={editdata.name} />
                <input placeholder="About" {...register("about")}  defaultValue={editdata.about}/>
                <input type="number" placeholder="Money" {...register("money", { required: true })} defaultValue={editdata.money} />
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="add_sub_geri">
                    <input type="submit" className="btn btn-primary" />
                    <Link to='/Admin' className="btn btn-primary">Geri</Link>
                </div>

            </form>
        </div>

    )
}
