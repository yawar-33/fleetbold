 

 
import { useMutation, useQuery } from "@tanstack/react-query";
 
import { API_BASE_URL } from "../app/(others)/config";
 
 

export const usePostCaptureUser = () => {
   
    const API_ENDPOINT = `${API_BASE_URL}/landing/user-redirect-flow`;
  
    const postCaptureUser:any = async (params:any) => {

        console.log('post')
    
        const response = await fetch(`${API_ENDPOINT}`, {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
            // 'Content-Type': 'multipart/form-data'
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        const data = await response.json();
        console.log('signup', data)
        return data;
        
        };


    
    const {isLoading, mutate, mutateAsync, isSuccess, data} = useMutation(postCaptureUser);
    return {mutate, isLoading, data};
};
