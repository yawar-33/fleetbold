'use client'
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { useToast } from "@/hooks/use-toast";
import { validation } from '@/components/AdminComponents/Utils/validation';

const LoginPage = ({ onLogin }) => {
  const { toast } = useToast()
  const url = process.env.NEXT_PUBLIC_APP_URL
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const requiredFields = ['username', 'password'];
  const route = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      headers: {
        "Content-Type": "application/json",
        //Authorization: "Bearer " + TOKEN(),
        Accept: "*/*",
        // 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Origin': '*',
      },
      // responseType: "blob",
    };
    // Simple validation - in real app, you'd validate against backend
   const validationErrors = validation(requiredFields,formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post(`${url}/auth/signin`, formData, options)
        .then((res) => {
          console.log('response1', res.data)

          localStorage.setItem('authToken', res.data.accessToken)
          route.push('/adminPortal')
          toast({
            title: "Success:",
            description:
              "Login Successfully",
          });
          //  toaster('Login Successfully', "success")
        }).catch((error) => {
          toast({
            title: "Error:",
            description:
              error.response.data.message,
          });

        })
    }
  };
  const handleSignup = (e) => {

    route.push('/signup'); // Redirect to dashboard on successful login
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">FleetBold</h1>
          <p className="text-gray-600 dark:text-gray-400">Sign in to your account</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <form>
            <div className="space-y-6">

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  User Name
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="username"
                    name="username"
                    type="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your name"
                    required
                  />
                  
                </div>
                {errors['username'] && <p style={{ color: 'red' }}>{errors['username']}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                   {errors['password'] && <p style={{ color: 'red' }}>{errors['password']}</p>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium" onClick={handleSignup}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage
