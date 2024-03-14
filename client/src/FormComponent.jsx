import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        assigner: '',
        price: '',
        image: '' // Ensure this is in the initial state if you're using it
    });

    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5002/append', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Data submitted successfully");
                setFormData({
                    name: '',
                    description: '',
                    assigner: '',
                    price: '',
                    image: ''
                });

                // Redirect to another page, for example '/bounties'
                navigate('/bounties');
            }
        } catch (error) {
            console.error("Error in submitting form data:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <form className="flex flex-col align-middle justify-center w-1/4 border-4 p-5 rounded-xl space-y-3" onSubmit={handleSubmit}>
                <h1 className="flex text-white font-bold justify-center">Submit a Bounty</h1>
                <input type="text" className="rounded-md p-2" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="text" className="rounded-md p-2" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <input type="text" className="rounded-md p-2" name="assigner" value={formData.assigner} onChange={handleChange} placeholder="Assigner" />
                <input type="text" className="rounded-md p-2" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
                <input type="text" className="rounded-md p-2" name="image" value={formData.image} onChange={handleChange} placeholder="Image" />
                <button type="submit" className=" transition ease-in-out text-white border-2 border-white rounded-2xl hover:bg-white hover:text-slate-900" onClick={handleSubmit}>
                        Submit
                </button>
            </form>
        </div>
    );
}

export default FormComponent;
