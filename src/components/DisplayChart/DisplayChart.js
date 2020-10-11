import React, { useState, useEffect } from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import service from "../../services/service";

function DisplayChart(){
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    getCountryCovid();
  }, []);

  const getCountryCovid = () => {
    service
      .getDetailByCountry()
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

    return (
      <div>
        <HorizontalBar data={data} />
      </div>
    );
  
}

export default DisplayChart;