import {useState} from 'react'

const Login = () => {
    // State for email and password
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!name || !password) {
        setError('Please enter both email and password');
        return;
      }
      else{
        fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: name,
              password: password,
              expiresInMins: 30, // optional, defaults to 60
            }),
          })
          .then(res => res.json())
          
          .then((result)=>{
            console.log(result);
            localStorage.setItem("Auth",result.accessToken)
          });
         
      }
  
    //   // Simulate login logic or API call here
    //   console.log('Logged in with:', { email, password });
  
    //   // Clear error message if login is successful
    //   setError('');
    };
  
    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
    );
  };
  
  export default Login;