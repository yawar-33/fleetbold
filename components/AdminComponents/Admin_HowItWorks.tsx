"use client"
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { validation } from './Utils/validation';


const Admin_HowItWorks = () => {
    const { toast } = useToast()
    const url = process.env.NEXT_PUBLIC_APP_URL
    const [addnewScreen, setAddnewScreen] = useState(false)
    const [servicesList, setservicesList] = useState([]);
    const [editmode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const requiredFields = ['title', 'description'];
    const [howItWorksModel, sethowItWorksModel] = useState({
        id: 0,
        title: '',
        description: '',
    })
    const token = localStorage.getItem('authToken');
    const options = {
        headers: {
            "Content-Type": "application/json",
            access_Token: `${token}`,
            Accept: "*/*",
        },
    };

    useEffect(() => {
        getData()
    }, []);

    const addBenefit = (flag, mode, row) => {
        console.log('row', row)
        if (mode === 'Edit') {
            sethowItWorksModel({
                ...howItWorksModel,
                id: row._id,
                title: row.title,
                description: row.description,
            })
            setEditMode(true)
            setAddnewScreen(flag)
        }
        else {
            setAddnewScreen(flag)
            setEditMode(false)
            sethowItWorksModel({
                id: 0,
                title: '',
                description: '',
            })
        }

    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        sethowItWorksModel({
            ...howItWorksModel,
            [name]: value
        })
    }

    const handleSaveData = async (e) => {
        e.preventDefault();

        const validationErrors = validation(requiredFields, howItWorksModel);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .post(`${url}/howItWorks`, howItWorksModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Save Successfully",
                    });
                    sethowItWorksModel({
                        id: 0,
                        title: '',
                        description: '',
                    })
                    setAddnewScreen(false)
                    getData()
                }).catch((error) => {
                    toast({
                        title: "error:",
                        description:
                            error.response.data.message,
                    });
                })

        }


    };
    const handleUpdateData = async (e) => {
        e.preventDefault();
        const validationErrors = validation(requiredFields, howItWorksModel);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .put(`${url}/howItWorks`, howItWorksModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Update Successfully",
                    });
                    sethowItWorksModel({
                        id: 0,
                        title: '',
                        description: '',
                    })
                    setAddnewScreen(false)
                    getData()
                }).catch((error) => {
                    toast({
                        title: "error:",
                        description:
                            error.response.data.message,
                    });
                })

        }

    };
    const handleDeleteData = async (id) => {
        axios
            .delete(`${url}/howItWorks/${id}`, options)
            .then((res) => {
                toast({
                    title: "Success:",
                    description:
                        "Record Delete Successfully",
                });
                getData()
            }).catch((error) => {
                toast({
                    title: "error:",
                    description:
                        error.response.data.message
                });
            })
    };
    const getData = async () => {
        axios
            .get(`${url}/howItWorks`, options)
            .then((res) => {
                setservicesList(res.data.data)
            }).catch((error) => {
                toast({
                    title: "error:",
                    description:
                        error.response.data.message
                });
            })

    };
    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">How It Works</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    onClick={() => addBenefit(true, 'New', null)}
                >
                    Add New
                </button>
            </div>

            {
                addnewScreen ?
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">

                        <div className='p-3'>
                            <input
                                type="text"
                                placeholder="Title"
                                name='title'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={howItWorksModel.title}
                            />
                            {errors['title'] && <p style={{ color: 'red' }}>{errors['title']}</p>}
                        </div>
                        <div className='p-3 pt-0'>
                            <input
                                type="textArea"
                                placeholder="Description"
                                name='description'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={howItWorksModel.description}
                            />
                            {errors['description'] && <p style={{ color: 'red' }}>{errors['description']}</p>}
                        </div>
                        <div className='p-3 pt-0'>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                onClick={() => addBenefit(false, 'New', null)}>
                                cancel
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 ml-2 rounded-lg transition-colors duration-200"
                                onClick={editmode ? handleUpdateData : handleSaveData}
                            >
                                {editmode ? 'Update' : 'Add'}
                            </button>

                        </div>

                    </div> :

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        {/* <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            </div> */}
                        <div className="p-6">
                            <div className="space-y-4">
                                {
                                    servicesList && servicesList.length > 0 ? servicesList.map((row, index) => (
                                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                                            <div className="flex items-center space-x-3">
                                                
                                                    <div className="h-5 w-5 text-gray-600 dark:text-gray-400">
                                                        <div className="flex justify-center mb-4 sm:mb-6">
                                                            <div
                                                                className="w-8 h-8 sm:w-6 sm:h-6 lg:w-9 lg:h-9 flex-shrink-0"
                                                                style={{
                                                                    imageRendering: 'pixelated',
                                                                    backgroundSize: '100% 100%',
                                                                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 66"><circle cx="30" cy="30" r="30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/><text x="33" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="bold">${index + 1}</text></svg>')`
                                                                }}
                                                                aria-hidden="true"
                                                            />
                                                        </div>

                                                    </div>
                                                
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{row.title}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{row.description}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <a className="text-orange-600 dark:text-orange-400 hover:underline font-medium "
                                                    onClick={() => addBenefit(true, 'Edit', row)}>
                                                    Edit
                                                </a>
                                                <span className='p-2'>|</span>
                                                <a className="text-red-600 dark:text-red-400 hover:underline font-medium"
                                                    onClick={() => handleDeleteData(row._id)}
                                                >
                                                    Delete
                                                </a>

                                            </div>
                                        </div>
                                    ))
                                        : <span className="text-xs text-gray-500 dark:text-gray-400">No Record Found</span>
                                }
                            </div>
                        </div>
                    </div>
            }


        </div>
    );
};
export default Admin_HowItWorks