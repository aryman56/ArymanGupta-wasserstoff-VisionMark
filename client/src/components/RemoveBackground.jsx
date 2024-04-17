import React, { useState } from 'react';

function RemoveBackground() {
    const [carImage, setCarImage] = useState(null);
    const [plateImage, setPlateImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [outputImage, setOutputImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCarImageChange = (event) => {
        setCarImage(event.target.files[0]);
    };

    const handlePlateImageChange = (event) => {
        setPlateImage(event.target.files[0]);
    };

    const uploadImages = () => {
        if (!carImage || !plateImage) {
            setErrorMessage('Please select both images.');
            return;
        }
        // Show loading spinner
        setLoading(true);
        const formData = new FormData();
        formData.append('car_image', carImage);
        formData.append('plate_image', plateImage);
        fetch('https://sarkari.pythonanywhere.com/upload/', {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.error) {
                setErrorMessage(data.error);
            } else {
                setErrorMessage('');
                setOutputImage('data:image/jpeg;base64,' + data.image);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            setErrorMessage('An error occurred while processing the images.');
        })
        .finally(() => {
            // Hide loading spinner
            setLoading(false);
        });
    };

    return (
        
        <div className="container" style={{marginTop:"5rem"}}>
            <h1 className="my-4">License Plate Replacement</h1>
            <div className="form-group">
                <label htmlFor="carImage">Car Image:</label>
                <input type="file" className="form-control-file" id="carImage" name="carImage" accept="image/*" onChange={handleCarImageChange} required />
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="plateImage">Plate Image:</label>
                <input type="file" className="form-control-file" id="plateImage" name="plateImage" accept="image/*" onChange={handlePlateImageChange} required />
            </div>
            <br/>
            <button type="button" className="btn btn-primary" onClick={uploadImages}>Upload Images</button>
           <center>
            <div className="output-container" style={{ display: outputImage ? 'block' : 'none' }}>
                <h2 className="my-4">Replaced License Plate</h2>
                <img className="img-fluid" src={outputImage} alt="Output Image"  style={{"height":"25rem"}}/>
            </div>
            </center>
            <div className="error-message">{errorMessage}</div>
            <div className="spinner-border text-primary mt-3" role="status" style={{ display: loading ? 'block' : 'none' }}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default RemoveBackground;
