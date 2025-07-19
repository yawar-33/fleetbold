"use client"
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { validation } from './Utils/validation';


const Admin_Testimonial = () => {
    const { toast } = useToast()
    const url = process.env.NEXT_PUBLIC_APP_URL

    const [addnewScreen, setAddnewScreen] = useState(false)
    const [testimonialList, settestimonialList] = useState([]);
    const [editmode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const requiredFields = ['name', 'content'];
    const [testimonialModel, settestimonialModel] = useState({
        id: 0,
        name: '',
        content: '',
        image: '',
        designation:'',
    })
    const token = localStorage.getItem('authToken');
    const options = {
        headers: {
            "Content-Type": "application/json",
            access_Token: `${token}`,
            Accept: "*/*",
        },
    };
    const services = [
         {
    id: 1,
    name: "Ava Martinez",
    content:
      "I have tried most of the lead generation services in the industry, and none compare to the Advertizip Prime Bundle Leads. The mere fact of calling your leads and having them recognize you and await your call significantly changes and eases the entire process from the start.",
    image:"https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
    },
  {
    id: 2,
    name: "Michael C.",
    content:
      "The combination of Advertizip leads and its chatbot appointment setter makes it my preferred tool for my business. I have been immersed in other activities when I receive a notification of a new appointment without even having interacted with the leads, because the chatbot has done all the hard work.",
    image:"https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
    },
  {
    id: 3,
    name: "Linda H.",
    content:
      "I was skeptical at first, but the increase in our lead pipeline has been phenomenal. The platform is user-friendly, efficient, and delivers on its promises.",
   image:"https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
    },
  {
    id: 4,
    name: "John Abraham",
    content:
      "This is the secret weapon for any real estate professional's arsenal. The lead quality and seamless marketing tools have transformed our approach and results.",
   image:"https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
    },
];
    useEffect(() => {
        getData()
    }, []);

    const addBenefit = (flag, mode, row) => {
        console.log('row', row)
        if (mode === 'Edit') {
            settestimonialModel({
                ...testimonialModel,
                 id: 0,
                name: '',
                content: '',
                image: '',
                designation:'',
            })
            setEditMode(true)
            setAddnewScreen(flag)
        }
        else {
            setAddnewScreen(flag)
            setEditMode(false)
            settestimonialModel({
                id: 0,
                name: '',
                content: '',
                image: '',
                designation:'',
            })
        }

    }
    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {

                const base64String = reader.result.toString().split(',')[1] // remove data:image/...;base64,
                settestimonialModel({
                    ...testimonialModel,
                    image: base64String
                })
                console.log("Base64:", base64String);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target
        settestimonialModel({
            ...testimonialModel,
            [name]: value
        })
    }

    const handleSaveData = async (e) => {
        e.preventDefault();

       const validationErrors = validation(requiredFields,testimonialModel);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
            axios
                .post(`${url}/testimonial`, testimonialModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Save Successfully",
                    });
                    settestimonialModel({
                         id: 0,
                        name: '',
                        content: '',
                        image: '',
                        designation:'',
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
        const validationErrors = validation(requiredFields,testimonialModel);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
            axios
                .put(`${url}/testimonial`, testimonialModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Update Successfully",
                    });
                    settestimonialModel({
                         id: 0,
                        name: '',
                        content: '',
                        image: '',
                        designation:'',
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
            .delete(`${url}/testimonial/${id}`, options)
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
            .get(`${url}/testimonial`, options)
            .then((res) => {
                settestimonialList(res.data.data)
            }).catch((error) => {
                settestimonialList(services)
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Testimonial</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    onClick={() => addBenefit(true, 'New', null)}
                >
                    Add New
                </button>
            </div>

            {
                addnewScreen ?
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className='ml-2'>
              <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mt-2">
                <div className="h-15 w-15 text-gray-600 dark:text-gray-400">
                  <img
                    src={`data:image/png;base64,${testimonialModel.image}`}
                  />
                </div>
              </div>

              <label className='pl-1' htmlFor="upload-input" style={{ cursor: 'pointer' }}>
                upload icon
               
              </label>
              <input
                id="upload-input"
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>
                       
                        <div className='p-3 pt-0'>
                            <input
                                type="text"
                                placeholder="Name"
                                name='name'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={testimonialModel.name}
                            />
                              {errors['name'] && <p style={{ color: 'red' }}>{errors['name']}</p>}
                        </div>
                        <div className='p-3 pt-0'>
                            <input
                                type="textArea"
                                placeholder="Enter Content"
                                name='content'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={testimonialModel.content}
                            />
                             {errors['review'] && <p style={{ color: 'red' }}>{errors['review']}</p>}
                        </div>
                          <div className='p-3 pt-0'>
                            <input
                                type="text"
                                placeholder="Enter Designation"
                                name='designation'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={testimonialModel.designation}
                            />
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
                                    testimonialList && testimonialList.length > 0 ? testimonialList.map((row, index) => (
                                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                                    <div className="h-5 w-5 text-gray-600 dark:text-gray-400">
                                                        <img
                                                                src={row.image}
                                                            />
                                                        

                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{row.name}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{row.content}</p>
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
export default Admin_Testimonial