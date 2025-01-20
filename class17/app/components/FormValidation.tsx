'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const CustomSubmit = (data: any) => {
        console.log(data)
    }
    console.log(errors)
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Contact Us
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit(CustomSubmit)}>
                        {/* Name Input */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name
                            </label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                                placeholder="Enter your name"
                            />
                            {errors.name && errors.name.type === 'required' && (
                                <p className='text-red-600 font-bold pt-1'>Name is Required</p>
                            )}

                        </div>

                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                id="email"
                                name="email"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                                placeholder="Enter your email"
                            />
                            {errors.email && errors.email.type === 'required' && (
                                <p className='text-red-600 font-bold pt-1'>Email is Required</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormValidation
