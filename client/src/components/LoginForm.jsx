import {React,useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


export default function LoginForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        if (!username || !password) {
          setErrorMessage('Please fill in all fields.');
          return;
        }
    
        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            
            const data = await response.json();
            console.log(data);
            if (response.status === 200) {
                navigate('/dashboard');
                console.log('Login successful');
            } else if(response.status === 400){
                setErrorMessage(data.error);
            }
        } catch (error) {
          console.error('Error:', error);
          setErrorMessage('An error occurred. Please try again later.');
        }
      };

    return (
        <div class="min-h-screen bg-purple-400 flex justify-center items-center">
            <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
            </div>
            <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
            </div>
            <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Login into Account</h1>
                    <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="space-y-4">
                        <input type="text"  placeholder="Username"  value={username} onChange={handleUsernameChange}  class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                        <input type="password" placeholder="Password"  value={password} onChange={handlePasswordChange} class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div class="text-center mt-6">
                        <button class="py-3 w-40 text-xl text-white bg-purple-400 rounded-2xl">Login</button>
                    </div>
                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}  
                </form>
            </div>         
	    </div>
          
      
    )
}