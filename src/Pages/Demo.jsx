import Select from 'react-select';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Demo = () => {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    allthelist();
  }, []);

  const allthelist = () => {
    axios.get('http://localhost:5000/property/list')
      .then(response => {
        // Assuming the API response is an array of objects with 'value' and 'label' properties
        const fetchedOptions = response.data.property.map(item => ({
          value: item._id,
          label: item.name
        }));
        setOptions(fetchedOptions);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }

  return (
    <Select options={options} isMulti />
  );

}

export default Demo