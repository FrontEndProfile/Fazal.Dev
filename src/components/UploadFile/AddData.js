import { useState } from 'react';

function AddDataForm({ db }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAdd = (event) => {
    event.preventDefault();
    db.collection('users')
      .add({
        name,
        age: Number(age),
      })
      .then(() => {
        console.log('Data added successfully!');
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <form onSubmit={handleAdd}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button type="submit">Add Data</button>
    </form>
  );
}

export default AddDataForm;
