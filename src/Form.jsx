import React, { useState, useEffect } from 'react';
import './Form.css'; // Import CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    selectValue: '',
    dateValue: '',
    textInput1: '',
    textInput2: '',
    textInput3: ''
  });

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('myDataArray'));
    if (savedData) {
      setDataArray(savedData);
    }
  }, []);

  const handleForm1Change = (e) => {
    setFormData({ ...formData, selectValue: e.target.value });
  };

  const handleForm2Change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveToLocalStorage = () => {
    const newObj = { ...formData };
    const newArray = [...dataArray, newObj];
    localStorage.setItem('myDataArray', JSON.stringify(newArray));
    setDataArray(newArray);
  };

  return (
    <div>
      <div className="my-component">
        <div className="form-container">
          <form>
            <select className="select-input" value={formData.selectValue} onChange={handleForm1Change}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </form>
        </div>
        <div className="form-container">
          <form>
            <input className="date-input" type="date" name="dateValue" value={formData.dateValue} onChange={handleForm2Change} />
            <input className="text-input" type="text" name="textInput1" value={formData.textInput1} onChange={handleForm2Change} placeholder="Text input 1" />
            <input className="text-input" type="text" name="textInput2" value={formData.textInput2} onChange={handleForm2Change} placeholder="Text input 2" />
            <input className="text-input" type="text" name="textInput3" value={formData.textInput3} onChange={handleForm2Change} placeholder="Text input 3" />
          </form>
        </div>
        <button className="save-button" onClick={saveToLocalStorage}>Save to localStorage</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Select Value</th>
              <th>Date Value</th>
              <th>Text Input 1</th>
              <th>Text Input 2</th>
              <th>Text Input 3</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((data, index) => (
              <tr key={index}>
                <td>{data.selectValue}</td>
                <td>{data.dateValue}</td>
                <td>{data.textInput1}</td>
                <td>{data.textInput2}</td>
                <td>{data.textInput3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
