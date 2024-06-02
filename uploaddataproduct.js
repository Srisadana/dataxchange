import React, { useState } from 'react';
import axios from 'axios';

function UploadDataProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('file', file);

        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/data-products/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Data product uploaded successfully');
        } catch (err) {
            alert('Upload failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Upload Data Product</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>File:</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <button type="submit">Upload</button>
        </form>
    );
}

export default UploadDataProduct;
