import React ,{useState,useEffect} from 'react'


const MembershipBenefitContent = () => {
  const [addnewScreen, setAddnewScreen]=useState(false)
  const [file, setFile] = useState(null);
  const [benefitsModel, setBenefitsModel]=useState({
    title:'',
    description:'',
    file:''
  })

const addBenefit=(flag)=>{
setAddnewScreen(flag)
}

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    console.log('Uploaded:', uploadedFile);
  };
  const handleInputChange=(event)=>{
  const {name,value}=event.target
  setBenefitsModel({
    ...benefitsModel,
    [name]:value
  })
    }

    const handleSaveData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(benefitsModel),
      });

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Membership Benefits</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        onClick={()=>addBenefit(true)}
        >
          Add Benefit
        </button>
      </div>
 
   {
    addnewScreen?
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
       <div className='ml-2'>
        <div className="w-30 h-30 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mt-2">
                    <div className="h-15 w-15 text-gray-600 dark:text-gray-400"></div>
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
              onClick={handleInputChange}
           />
            </div>
            <div className='p-3 pt-0'>
         <input
              type="textArea"
              placeholder="Description"
              name='description'
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              onClick={handleInputChange}
            />
       </div>
            <div className='p-3 pt-0'>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={()=>addBenefit(false)}>
          cancel
        </button>
               <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 ml-2 rounded-lg transition-colors duration-200"
               onClick={handleSaveData}
               >
          Add 
        </button>
        
            </div>
        
      </div>:
 
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { vehicle: 'Vehicle #001', driver: 'John Smith', action: 'Started trip', time: '2 mins ago' },
              { vehicle: 'Vehicle #045', driver: 'Sarah Johnson', action: 'Completed maintenance', time: '15 mins ago' },
              { vehicle: 'Vehicle #023', driver: 'Mike Davis', action: 'Fuel refill', time: '1 hour ago' },
              { vehicle: 'Vehicle #067', driver: 'Emma Wilson', action: 'Route completed', time: '2 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="h-5 w-5 text-gray-600 dark:text-gray-400"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.vehicle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.driver} • {activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Edit</span>
              </div>
            ))}
          </div>
        </div>
      </div>
   }
 

    </div>
  );
};
export default MembershipBenefitContent