
"use client";

import { useRouter } from 'next/navigation';
import { useFormik } from "formik";

const initialValues = {
  name:"",
  email: "",
  password: "",
  repassword:""
};






function page() {


    const router = useRouter();
  

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const name = values.name;
      const email = values.email;
      const pass = values.password;
      const repass = values.repassword;

      console.log(name);
      console.log(email);
      console.log(pass);
      console.log(repass);
    }
  });

  return (
    <div className='my-40'>
    
      <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
      <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          
          <input
        
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          
          <input
        
            name="email"
            id="email"
            type='email'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder='Enter your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="repassword"
            id="repassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder='Re-enter your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword}
          />
        </div>
    
        <button
          onClick={()=>formik.handleSubmit}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default page