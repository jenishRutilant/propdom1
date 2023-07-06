import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

const Demo = () => {

  useEffect(() => {
    faltu();
  }, []);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const selectFunction = selectedOptions?.map(option => option.value)
  console.log(selectFunction);

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  var data = JSON.stringify({
    "property": ["64a50925a40450675e115e68"]
  });

  const faltu = (e) => {
    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/property/search',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>Demo</div>
  )
}

export default Demo