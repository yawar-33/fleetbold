"use client"
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { validation } from './Utils/validation';
import ListInput from './Utils/ListInput';
import { features } from 'process';


const Admin_Pricing = () => {
    const { toast } = useToast()
    const url = process.env.NEXT_PUBLIC_APP_URL

    const [addnewScreen, setAddnewScreen] = useState(false)
    const [pricingPlanList, setPricingPlanList] = useState([]);
    const [editmode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const requiredFields = ['name', 'description'];
    const [pricingModel, setPricingModel] = useState({
        id: 0,
        name: '',
        description: '',
        price: '',
        features: [],
    })
    const [headerData, setHeaderData] = useState({
        headerTitle: "Pricing with No Hidden Fees",
        headerDescription: "Our modern design, real-time insights, and seamless tools deliver the control and confidence you need to scale. No long-term commitments, surprise charges, or setup costs—just clarity and performance.",

    });
    const [headerModel, setHeaderModel] = useState({
        headerDescription: '',
        headerTitle: ''
    });
    const [headerEditmode, setHeaderEditMode] = useState(false);
    const [headerErrors, setHeaderErrors] = useState({});
    const headerRequiredFields = ['headerTitle', 'headerDescription'];
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
            image: "https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
        },
        {
            id: 2,
            name: "Michael C.",
            content:
                "The combination of Advertizip leads and its chatbot appointment setter makes it my preferred tool for my business. I have been immersed in other activities when I receive a notification of a new appointment without even having interacted with the leads, because the chatbot has done all the hard work.",
            image: "https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
        },
        {
            id: 3,
            name: "Linda H.",
            content:
                "I was skeptical at first, but the increase in our lead pipeline has been phenomenal. The platform is user-friendly, efficient, and delivers on its promises.",
            image: "https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
        },
        {
            id: 4,
            name: "John Abraham",
            content:
                "This is the secret weapon for any real estate professional's arsenal. The lead quality and seamless marketing tools have transformed our approach and results.",
            image: "https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg"
        },
    ];
    useEffect(() => {
        getData()
    }, []);

    const addPricingPlan = (flag, mode, row) => {
        console.log('row', row)
        if (mode === 'Edit') {
            setPricingModel({
                ...pricingModel,
                id: row._id,
                name: row.name,
                description: row.description,
                price: row.price,
                features: row.features,
            })
            setEditMode(true)
            setAddnewScreen(flag)
        }
        else {
            setAddnewScreen(flag)
            setEditMode(false)
            setPricingModel({
                id: 0,
                name: '',
                description: '',
                price: '',
                features: [],
            })
        }

    }
    // const handleFileChange = (e) => {

    //     const file = e.target.files[0];

    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {

    //             const base64String = reader.result.toString().split(',')[1] // remove data:image/...;base64,
    //             setPricingModel({
    //                 ...pricingModel,
    //                 image: base64String
    //             })
    //             console.log("Base64:", base64String);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setPricingModel({
            ...pricingModel,
            [name]: value
        })
    }
    const handleFeatureChange = (features) => {
        setPricingModel({ ...pricingModel, features });
    };
    const handleSaveData = async (e) => {
        e.preventDefault();

        const validationErrors = validation(requiredFields, pricingModel);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .post(`${url}/pricingPlan`, pricingModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Save Successfully",
                    });
                    setPricingModel({
                        id: 0,
                        name: '',
                        description: '',
                        price: '',
                        features: [],
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
        const validationErrors = validation(requiredFields, pricingModel);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .put(`${url}/pricingPlan`, pricingModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Update Successfully",
                    });
                    setPricingModel({
                        id: 0,
                        name: '',
                        description: '',
                        price: '',
                        features: [],
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
            .delete(`${url}/pricingPlan/${id}`, options)
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
            .get(`${url}/pricingPlan`, options)
            .then((res) => {
                setPricingPlanList(res.data.data)
            }).catch((error) => {
                setPricingPlanList(services)
                toast({
                    title: "error:",
                    description:
                        error.response.data.message
                });
            })

    };
    const handleHeaderInputChange = (event) => {
        const { name, value } = event.target
        setHeaderModel({
            ...headerModel,
            [name]: value
        })
    }
    const getHeaderData = async () => {
        axios
            .get(`${url}/pricingHeader/pricing-header`)
            .then((res) => {
                setHeaderData(res.data.data)
            }).catch((error) => {
                toast({
                    title: "error:",
                    description:
                        error.response.data.message
                });
            })

    };
    const updateHeader = async () => {
        const validationErrors = validation(headerRequiredFields, headerModel);
        setHeaderErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .put(`${url}/pricingHeader/pricing-header`, headerModel)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Update Successfully",
                    });
                    setHeaderEditMode(false)
                    getHeaderData()
                }).catch((error) => {
                    toast({
                        title: "error:",
                        description:
                            error.response.data.message,
                    });
                })

        }

    };
    return (
        <div className="p-6 space-y-6">
            {
                headerEditmode ? <>
                    <div className="flex items-center justify-between">
                        <div className='p-3 '>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Header Title:<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                placeholder="Enter Title"
                                name='headerTitle'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleHeaderInputChange}
                                value={headerModel.headerTitle}
                            />
                            {headerErrors['headerTitle'] && <p style={{ color: 'red' }}>{headerErrors['headerTitle']}</p>}
                        </div>
                        <div>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mr-2"
                                onClick={() => updateHeader()}
                            >
                                Update
                            </button> <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                onClick={() => setHeaderEditMode(false)}
                            >
                                Cancel
                            </button>

                        </div>

                    </div>
                    <div className='p-3 pt-0'>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Header Description:<span style={{ color: 'red' }}>*</span></label>
                        <input
                            type="text"
                            placeholder="Enter Description"
                            name='headerDescription'
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            onChange={handleHeaderInputChange}
                            value={headerModel.headerDescription}
                        />
                        {headerErrors['headerDescription'] && <p style={{ color: 'red' }}>{headerErrors['headerDescription']}</p>}
                    </div>
                </> : <>
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{headerData.headerTitle}</h1>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                            onClick={() => {
                                setHeaderEditMode(true)
                                setHeaderModel({ ...headerData })
                            }}
                        >
                            Edit
                        </button>
                    </div>
                    <p className="text-s text-gray-500 dark:text-gray-400">{headerData.headerDescription}</p>
                </>
            }

            {
                addnewScreen ?
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">

                        <div className='p-3'>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Plan:<span style={{ color: 'red' }}>*</span></label>
                            <div>
                                <select
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                    name='name' value={pricingModel.name} onChange={handleInputChange}>
                                    <option value="">-- Choose a Plan --</option>
                                    <option value="Starter Plan">Starter Plan</option>
                                    <option value="Premium Plan">Premium Plan</option>
                                    <option value="Enterprise Plan">Enterprise Plan</option>
                                </select>
                            </div>


                            {errors['name'] && <p style={{ color: 'red' }}>{errors['name']}</p>}
                        </div>
                        <div className='p-3 pt-0'>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description:<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="textArea"
                                placeholder="Enter Description"
                                name='description'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={pricingModel.description}
                            />
                            {errors['description'] && <p style={{ color: 'red' }}>{errors['description']}</p>}
                        </div>
                        <div className='p-3 pt-0'>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price:</label>
                            <input
                                type="text"
                                placeholder="Enter Price"
                                name='price'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={pricingModel.price}
                            />

                        </div>
                        <div className='p-3 pt-0'>
                            <ListInput label="Features" onChange={handleFeatureChange} list={pricingModel.features} />
                        </div>
                        <div className='p-3 pt-0'>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                onClick={() => addPricingPlan(false, 'New', null)}>
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
                        <div className="flex items-center justify-between p-2 space-y-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Pricing List</h1>

                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                onClick={() => addPricingPlan(true, 'New', null)}
                            >
                                Add New
                            </button>
                        </div>
                        <div className="p-3">
                            <div className="space-y-4">
                                {
                                    pricingPlanList && pricingPlanList.length > 0 ? pricingPlanList.map((row, index) => (
                                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{row.name}</p>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{row.price}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{row.description}</p>
                                                    <div className="framer-1bv5bwc"></div>
                                                    <div className="framer-fcdxhq">
                                                        {
                                                            row.features && row.features.map((feature, index) => (
                                                                <div className="framer-1jmzubo flex align-center">
                                                                    <div className="framer-1pdthz " aria-hidden="true"> <svg
                                                                        className="w-5 h-5 text-white-500 flex-shrink-0"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        viewBox="0 0 24 24"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                        ></path>
                                                                    </svg></div>
                                                                    <div className="framer-8wl8wq">
                                                                        <p className="framer-text">{feature}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                    </div>



                                                    {/* <ul>
                                                {
                                                    row.features && row.features.map((feature,index)=>(
                                                    <li key={index}>{feature}</li>
                                                    ))
                                                }
                                               </ul> */}
                                                </div>

                                            </div>
                                            <div>
                                                <a className="text-orange-600 dark:text-orange-400 hover:underline font-medium "
                                                    onClick={() => addPricingPlan(true, 'Edit', row)}>
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
export default Admin_Pricing