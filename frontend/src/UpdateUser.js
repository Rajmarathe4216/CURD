import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [inputUser, setInputUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { id } = useParams()
    //data fetch single
    const fetchSingleUser = async () => {
        const res = await axios.get(`http://localhost:5000/readUser/${id}`);
        console.log(res);
        setInputUser({
            name: res.data.name,
            email: res.data.email,
            password: res.data.password,
        });
    };
    useEffect(() => {
        fetchSingleUser();
        // eslint-disable-next-line
    },[]);

    const handleChange = (event) => {
        setInputUser({
            ...inputUser,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(inputUser);
        const res=await axios.put(`http://localhost:5000/updateUser/${id}`,inputUser);
        console.log(res);
        if(res.status===200)
        {
            window.location="/"
        }
        // fetchAllUser();
    }
    
  return (
    <div className='w-2/3 mx-auto mt-5'>
            {/* Update form */}
            <form onSubmit={handleSubmit}>
    <h1 className='pb-6 text-2xl text-center underline'>Update User</h1>
    <div className="pb-4">
        <label className='text-sm text-gray-500 px-6'>Name</label>
        <input type="text" name='name' className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-full'
            placeholder='Enter Name' required
            value={inputUser.name}
            onChange={handleChange} />
    </div>
    <div className="pb-4">
        <label className='text-sm text-gray-500 px-6'>Email</label>
        <input type="text" name='email' className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-full'
            placeholder='Enter Email' required
            value={inputUser.email}
            onChange={handleChange}/>
    </div>
    <div className="pb-4">
        <label className='text-sm text-gray-500 px-6'>Password</label>
        <input type="password" name='password' className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-full'
            placeholder='Enter Password' required
            value={inputUser.password}
            onChange={handleChange} />
    </div>
    <div className="flex justify-center my-4">
        <button type="submit" className='px-4 py-2 bg-yellow-500 rounded-sm'>Update User</button>
    </div>
</form>
</div>
  )
}

export default UpdateUser