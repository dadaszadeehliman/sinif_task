import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"




export default function App() {
    const [imgdata, setimgdata] = useState(null)
    const imgDataAdd=(file)=>{
        if(!file) return;
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=(e)=>setimgdata(reader.result)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()


    const onSubmit = (data) => {
        axios.post('http://localhost:8000/restoran/',{...data, img: imgdata})
        reset();
    }
    return (
        <div className="admin_add_esas p-5">
            <h1 className="text-center mb-3">Add  Etmek</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="admin_add m-5 mt-0">
                <input type="file"  onChange={(e)=>imgDataAdd(e.target.files[0])}/>
                <input placeholder="Name" {...register("name")} />
                <input placeholder="About" {...register("about")} />
                <input type="number" placeholder="Money" {...register("money", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="add_sub_geri">
                    <input type="submit" className="btn btn-primary" />
                    <Link to='/Admin' className="btn btn-primary">Geri</Link>
                </div>

            </form>
        </div>

    )
}
