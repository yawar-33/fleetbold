"use client"
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { validation } from './Utils/validation';


const Admin_NavItems = () => {
    const { toast } = useToast()
    const url = process.env.NEXT_PUBLIC_APP_URL

    const [addnewScreen, setAddnewScreen] = useState(false)
    const [faqList, setfaqList] = useState([]);
    const [editmode, setEditMode] = useState(false);
    const [errors, setErrors] = useState({});
    const requiredFields = ['label'];
    const [faqModel, setfaqModel] = useState({
        id: 0,
        label: '',
        url: '',
        order: ''
    })
    const token = localStorage.getItem('authToken');
    const options = {
        headers: {
            "Content-Type": "application/json",
            access_Token: `${token}`,
            Accept: "*/*",
        },
    };
    const faqs = [
        {
            question: "What is FleetBold and how does it work?",
            answer: "FleetBold is an advanced fleet management platform designed to help businesses track vehicles in real time, optimize operations, and enhance security. Our platform connects with GPS tracking devices, including Moovetrax, Bouncie, and Tesla, to provide live vehicle location, performance insights, and operational analytics in one seamless interface."
        },
        {
            question: "What GPS tracking devices are compatible with FleetBold?",
            answer: "FleetBold supports a wide range of GPS devices, including Moovetrax, Bouncie and more. Additionally, our Tesla API integration allows for advanced real-time tracking and data analysis."
        },
        {
            question: "What makes FleetBold better than other fleet management platforms?",
            answer: "FleetBold stands out with cutting-edge AI technology, Tesla integration, and an intuitive user experience that simplifies fleet tracking. Our platform is built for flexibility, offering businesses cost-effective solutions, real-time insights, and superior customer support to streamline operations."
        },
        {
            question: "Can I use Moovetrax or Bouncie with FleetBold?",
            answer: "Yes! FleetBold is fully compatible with Moovetrax and Bouncie GPS devices. We ensure seamless integration so users can continue using their existing devices while benefiting from FleetBold’s advanced fleet tracking and management features."
        },
        {
            question: "How much does FleetBold cost?",
            answer: "FleetBold offers flexible pricing plans based on the number of vehicles and required features. Contact us to get a custom quote tailored to your fleet’s needs."
        },
        {
            question: "Does FleetBold integrate with Tesla vehicles?",
            answer: "Yes! FleetBold provides one of the most advanced Tesla integrations, offering real-time tracking, battery status updates, trip history, and more. Plus, our platform is a cost-effective alternative to Tesla’s high-priced API access."
        },
        {
            question: "How do I access the FleetBold platform?",
            answer: "You can access FleetBold via any web browser or mobile device, with no additional software installation required. Simply log in to our secure platform and start tracking your fleet instantly."
        },
        {
            question: "How does FleetBold protect my data?",
            answer: "At FleetBold, data security is our top priority. We follow strict data protection protocols, ensuring that all fleet information is encrypted and stored securely. We never share your data with third parties without authorization."
        },
        {
            question: "Does FleetBold offer customer support?",
            answer: "For now, we offer support exclusively via email. If you need assistance, feel free to contact us at support@fleetbold.com."
        },
        {
            question: "How can I start using FleetBold?",
            answer: "FleetBold is currently in beta, and early access is available exclusively to users who sign up for our waiting list. By joining, you’ll get priority access to FleetBold before its official launch in mid-to-late March. Don’t miss out—sign up now to be among the first to experience the future of fleet management!"
        }
    ];
    useEffect(() => {
        getData()
    }, []);

    const addBenefit = (flag, mode, row) => {
        console.log('row', row)
        if (mode === 'Edit') {
            setfaqModel({
                ...faqModel,
                id: row._id,
                label: row.label,
                url: row.url,
                order: row.order
            })
            setEditMode(true)
            setAddnewScreen(flag)
        }
        else {
            setAddnewScreen(flag)
            setEditMode(false)
            setfaqModel({
                id: 0,
                label: '',
                url: '',
                order: ''
            })
        }

    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setfaqModel({
            ...faqModel,
            [name]: value
        })
    }

    const handleSaveData = async (e) => {
        e.preventDefault();

        const validationErrors = validation(requiredFields, faqModel);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .post(`${url}/navItem`, faqModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Save Successfully",
                    });
                    setfaqModel({
                        id: 0,
                        label: '',
                        url: '',
                        order: ''
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
        const validationErrors = validation(requiredFields, faqModel);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .put(`${url}/navItem`, faqModel, options)
                .then((res) => {
                    console.log('response1', res)
                    toast({
                        title: "Success:",
                        description:
                            "Record Update Successfully",
                    });
                    setfaqModel({
                        id: 0,
                        label: '',
                        url: '',
                        order: ''

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
            .delete(`${url}/navItem/${id}`, options)
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
            .get(`${url}/navItem`, options)
            .then((res) => {
                setfaqList(res.data.data)
            }).catch((error) => {
                setfaqList(faqs)
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
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Navbar Items</h1>
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
 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Label:<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="text"
                                placeholder="Enter Label"
                                name='label'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={faqModel.label}
                            />
                            {errors['label'] && <p style={{ color: 'red' }}>{errors['label']}</p>}
                        </div>

                        <div className='p-3 pt-0'>
                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL (Navigate Link):</label>
                            <input
                                type="text"
                                placeholder="Enter url"
                                name='url'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={faqModel.url}
                            />
                        </div>
                        {/* <div className='p-3 pt-0'>
                                                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL (Navigate Link):</label>
                            <input
                                type="text"
                                placeholder="Enter order"
                                name='order'
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                onChange={handleInputChange}
                                value={faqModel.order}
                            />
                        </div> */}
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
                                    faqList && faqList.length > 0 ? faqList.map((row, index) => (
                                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                                            <div className="flex items-center space-x-3">

                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{row.label}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{row.url}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{row.order}</p>
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
export default Admin_NavItems