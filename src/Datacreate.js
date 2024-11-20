import React, { useRef, useEffect } from 'react';

function Datacreate({ mode }) {
  const formRef = useRef(null);

  useEffect(() => {
    if (mode === 'edit') {
      const formData = JSON.parse(localStorage.getItem('formData')) || {};
      formRef.current.username.value = formData.username || '';
      formRef.current.age.value = formData.age || '';
      formRef.current.address.value = formData.address || '';
    } else {
      formRef.current.reset();
    }
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());

    if (mode === 'create') {
      formRef.current.reset(); // Clear the form after submission
      localStorage.setItem('formData', JSON.stringify(data)); // Store the data in localStorage
    }
    else if (mode === 'edit') { formRef.current.reset(); localStorage.removeItem('formData');console.log('Updated data:', data);}
  };

  return (
    <div>
      <h1>{mode === 'edit' ? 'Edit User Information' : 'Create User Information Form'}</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
          />
        </div>
        <button type="submit">{mode === 'edit' ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default Datacreate;