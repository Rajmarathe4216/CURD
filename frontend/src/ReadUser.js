import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadUser = () => {
    const { id } = useParams()
    //data fetch
    const [userData, setUserData] = useState([]);
    const fetchSingleUser = async () => {
        const res = await axios.get(`http://localhost:5000/readUser/${id}`);
        console.log(res);
        setUserData(res.data);
    };
    useEffect(() => {
        fetchSingleUser();
        // eslint-disable-next-line
    },[]);
    return (
        <div className='w-2/3 mx-auto mt-5'>

            <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-lg text-center text-gray-500">
                    <thead className='text-[17px] text-gray-700 uppercase bg-gray-500'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>S.No.</th>
                            <th scope='col' className='px-6 py-3'>Name</th>
                            <th scope='col' className='px-6 py-3'>Email</th>
                            <th scope='col' className='px-6 py-3'>Password</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-600'>
                            <th
                                scope='row'
                                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50'>
                                1
                            </th>
                            <th
                                scope='row'
                                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50'>
                                {userData.name}</th>
                            <td className='px-6 py-4'>{userData.email}</td>
                            <td className='px-6 py-4'>{userData.password}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReadUser