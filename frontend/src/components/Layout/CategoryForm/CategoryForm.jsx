import React from 'react';
import "../CategoryForm/CategoryForm.css"

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control2"
            placeholder="enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
