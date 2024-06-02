import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataCatalog() {
    const [dataProducts, setDataProducts] = useState([]);

    useEffect(() => {
        const fetchDataProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/data-products');
                setDataProducts(response.data);
            } catch (err) {
                console.error('Error fetching data products:', err);
            }
        };

        fetchDataProducts();
    }, []);

    return (
        <div>
            <h2>Data Catalog</h2>
            <ul>
                {dataProducts.map((product) => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Uploaded by: {product.uploadedBy.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataCatalog;
