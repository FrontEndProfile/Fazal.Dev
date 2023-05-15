import { useState } from 'react';
import { storage } from './firebase';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file)
      .then(() => {
        console.log('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <form onSubmit={handleUpload}>
      <label>
        File:
        <input type="file" onChange={handleFileChange} />
      </label>
      <button type="submit" disabled={!file}>Upload</button>
    </form>
  );
}

export default UploadFile;
