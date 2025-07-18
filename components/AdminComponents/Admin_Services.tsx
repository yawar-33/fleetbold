"use client"
import LottieAnimation from '@/components/MemberShipBenefits/LottieAnimation';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { validation } from './Utils/validation';


const Admin_Services = () => {
    const { toast } = useToast()
    const url = process.env.NEXT_PUBLIC_APP_URL

    const [addnewScreen, setAddnewScreen] = useState(false)
    const [file, setFile] = useState(null);
    const [servicesList, setservicesList] = useState([]);
    const [editmode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const requiredFields = ['title', 'description','icon'];
    const [servicesModel, setservicesModel] = useState({
        id: 0,
        title: '',
        description: '',
        icon: ''
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
            title: "3D Design",
            description: "Explore new dimensions with our 3D design services. From product mockups to immersive environments, we deliver high-quality 3D visuals that stand out.",
            icon: "https://framerusercontent.com/images/W7gQ3A9LHL4JFP7XIJtRlK910.svg"
        },
        {
            title: "Logo Design",
            description: "Create a memorable and impactful logo that embodies your brand's identity. Our designers work closely with you to deliver a logo that stands out.",
            icon: "https://framerusercontent.com/images/mshk40AyxRtRxKPbTzFZMsXE.svg"
        },
        {
            title: "Branding",
            description: "Build a strong and cohesive brand identity with our comprehensive branding services. We help you create a consistent and recognizable brand image.",
            icon: "https://framerusercontent.com/images/9heQGaBkz9r5Qd2tkiZZgUcJNY.svg"
        },
        {
            title: "UI/UX Design",
            description: "Improve user experience and interface design with our expert UI/UX services. We focus on creating intuitive and engaging digital experiences for your users.",
            icon: "https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg"
        },
        {
            title: "Website Design",
            description: "Craft stunning, user-friendly websites tailored to your brand's needs. Our design team ensures your online presence is both visually appealing and highly functional.",
            icon: "https://framerusercontent.com/images/Ip5ahIvRsk4Ed8a48qeM3w5q2g.svg"
        },
        {
            title: "Graphics Design",
            description: "Enhance your brand's visual communication with custom graphics. From marketing materials to social media content, our designers bring your ideas to life.",
            icon: "https://framerusercontent.com/images/Z7axBOVLm2D91xX6F83ZPkRmis.svg"
        },
        {
            title: "Illustration",
            description: "Add a unique touch to your projects with custom illustrations. Our talented illustrators can create artwork that perfectly complements your brand.",
            icon: "https://framerusercontent.com/images/xYSEo8npvPP95FSFG7F9dp23rhI.svg"
        },
        {
            title: "Motion Design",
            description: "Bring your ideas to life with dynamic motion designs. Our team creates compelling animations and videos that captivate your audience.",
            icon: "https://framerusercontent.com/images/hSsxTIt1F188CnKmQRlEEJlEXI.svg"
        }
    ];
    useEffect(() => {
        getData()
    }, []);

    const addBenefit = (flag, mode, row) => {
        console.log('row', row)
        if (mode === 'Edit') {
            setservicesModel({
                ...servicesModel,
                id: row._id,
                title: row.title,
                description: row.description,
                icon: row.icon
            })
            setEditMode(true)
            setAddnewScreen(flag)
        }
        else {
            setAddnewScreen(flag)
            setEditMode(false)
            setservicesModel({
                id: 0,
                title: '',
                description: '',
                icon: ''
            })
        }

    }
    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {

                const base64String = reader.result.toString().split(',')[1] // remove data:image/...;base64,
                setFile(base64String);
                setservicesModel({
                    ...servicesModel,
                    icon: base64String
                })
                console.log("Base64:", base64String);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setservicesModel({
            ...servicesModel,
            [name]: value
        })
    }

    const handleSaveData = async (e) => {
        e.preventDefault();

       const validationErrors = validation(requiredFields,servicesModel);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
            axios
                .post(`${url}/services`, servicesModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Save Successfully",
                    });
                    setservicesModel({
                        id: 0,
                        title: '',
                        description: '',
                        icon: ''
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
        const validationErrors = validation(requiredFields,servicesModel);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
            axios
                .put(`${url}/services`, servicesModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Update Successfully",
                    });
                    setservicesModel({
                        id: 0,
                        title: '',
                        description: '',
                        icon: ''
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
            .delete(`${url}/services/${id}`, options)
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
            .get(`${url}/services`, options)
            .then((res) => {
                setservicesList(res.data.data)
            }).catch((error) => {
                setservicesList(services)
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    onClick={() => addBenefit(true, 'New', null)}
                >
                    Add New
                </button>
            </div>

            {
                addnewScreen ?
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        {/* <div className='ml-2'>
              <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mt-2">
                <div className="h-15 w-15 text-gray-600 dark:text-gray-400">
                  <img
                    src={`data:image/png;base64,${servicesModel.icon}`}
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
            </div> */}
                        <div className='p-3'>

                            <input
                                type="text"
                                placeholder="Enter Icon Link"
                                name='icon'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={servicesModel.icon}
                            />
                              {errors['icon'] && <p style={{ color: 'red' }}>{errors['icon']}</p>}
                        </div>

                        <div className='p-3 pt-0'>
                            <input
                                type="text"
                                placeholder="Title"
                                name='title'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={servicesModel.title}
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
                                value={servicesModel.description}
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
                                                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                                    <div className="h-5 w-5 text-gray-600 dark:text-gray-400">
                                                        <img
                                                                src={row.icon}
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
export default Admin_Services