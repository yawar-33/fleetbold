"use client"
import LottieAnimation from '@/components/MemberShipBenefits/LottieAnimation';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import React, { useState, useEffect } from 'react'


const MembershipBenefitContent = () => {
  const { toast } = useToast()
  const url = process.env.NEXT_PUBLIC_APP_URL

  const [addnewScreen, setAddnewScreen] = useState(false)
  const [file, setFile] = useState(null);
  const [benefitsList, setBenefitsList] = useState([]);
  const [editmode, setEditMode] = useState(false);
  const [benefitsModel, setBenefitsModel] = useState({
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
  const features = [
    {
      title: "Unlimited Request",
      description: "Make as many design requests as you need without any limits.",
      src: "https://framerusercontent.com/assets/vgOkoU9rwLT1K2cxGl0cOK8yiXQ.json"
    },
    {
      title: "Unique Designs",
      description: "Stand out with custom, one-of-a-kind designs tailored specifically for your brand.",
      src: "https://framerusercontent.com/assets/I9xlhPU99WGrb5js2m2QFzYN4.json"
    },
    {
      title: "Fast Delivery",
      description: "Get your designs quickly and efficiently, ensuring your projects stay on track.",
      src: "https://framerusercontent.com/assets/PzwKVkOPz3y9ZMjmapEb7adQGU.json"
    },
    {
      title: "Conversion Friendly",
      description: "Our designs are optimized to drive engagement and boost conversions.",
      src: "https://framerusercontent.com/assets/5p3Xq0b1Hhp3NsQeSF1FaopYWI.json"
    },
    {
      title: "Full Solution",
      description: "From concept to completion, we provide design solutions to cover all your needs.",
      src: "https://framerusercontent.com/assets/kuYQckJlc62KSjyDl7yOTLwzzo.json"
    },
    {
      title: "Full Satisfaction",
      description: "Your satisfaction is our top priority. We'll revise the designs until you're 100% satisfied.",
      src: "https://framerusercontent.com/assets/BJ4F7Sz38tbwXHxmoCjePRCKk.json"
    }
  ];
  useEffect(() => {
    getData()
  }, []);

  const addBenefit = (flag, mode, row) => {
    console.log('row', row)
    if (mode === 'Edit') {
      setBenefitsModel({
        ...benefitsModel,
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
      setBenefitsModel({
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
        setBenefitsModel({
          ...benefitsModel,
          icon: base64String
        })
        console.log("Base64:", base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setBenefitsModel({
      ...benefitsModel,
      [name]: value
    })
  }

  const handleSaveData = async (e) => {
    e.preventDefault();

    if (benefitsModel.title && benefitsModel.description && benefitsModel.icon) {
      axios
        .post(`${url}/services`, benefitsModel, options)
        .then((res) => {
          console.log('response1', res)
          toast({
            title: "Success:",
            description:
              "Record Save Successfully",
          });
          setBenefitsModel({
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
    if (benefitsModel.title && benefitsModel.description && benefitsModel.icon) {
      axios
        .put(`${url}/services`, benefitsModel, options)
        .then((res) => {
          console.log('response1', res)
          toast({
            title: "Success:",
            description:
              "Record Update Successfully",
          });
          setBenefitsModel({
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
        setBenefitsList(res.data.data)
      }).catch((error) => {
        setBenefitsList(features)
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Membership Benefits</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          onClick={() => addBenefit(true, 'New', null)}
        >
          Add Benefit
        </button>
      </div>

      {
        addnewScreen ?
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className='ml-2'>
              <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mt-2">
                <div className="h-15 w-15 text-gray-600 dark:text-gray-400">
                  <img
                    src={`data:image/png;base64,${benefitsModel.icon}`}
                  />
                </div>
              </div>

              <label className='pl-1' htmlFor="upload-input" style={{ cursor: 'pointer' }}>
                upload icon
                {/* <img src={uploadIcon} alt="Upload" width={48} /> */}
              </label>
              <input
                id="upload-input"
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>

            <div className='p-3'>

              <input
                type="text"
                placeholder="Title"
                name='title'
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                onChange={handleInputChange}
                value={benefitsModel.title}
              />
            </div>
            <div className='p-3 pt-0'>
              <input
                type="textArea"
                placeholder="Description"
                name='description'
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                onChange={handleInputChange}
                value={benefitsModel.description}
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
                  benefitsList && benefitsList.length > 0 ? benefitsList.map((row, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <div className="h-5 w-5 text-gray-600 dark:text-gray-400">
                            {
                              row.src ? <LottieAnimation
                                src={row.src}
                                className="w-full h-full max-w-20 max-h-20 sm:max-w-24 sm:max-h-24"
                              /> : <img
                                src={`data:image/png;base64,${row.icon}`}
                              />
                            }

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
export default MembershipBenefitContent