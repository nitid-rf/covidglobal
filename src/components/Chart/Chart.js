import React, { useState, useEffect } from "react";
import service from "../../services/service";
import { HorizontalBar } from "react-chartjs-2";
import Moment from "react-moment";

function Chart() {
  const [dataCovid, setDataCovid] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllDataCovid();
    getCountryCovid();
  }, []);

  const getAllDataCovid = () => {
    service
      .getAll()
      .then((response) => {
        setDataCovid(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
    labels: countries.map((list) => list.country),
    datasets: [
      {
        label: "Count of Case(s)",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: countries.map((list) => list.cases),
      },
    ],
  };

  return (
    <>
      <div>
        <header style={{ textAlign: "center" }}>
          <h1>Covid Global Cases By SGN</h1>
          <p>
            Date : <Moment format="MM/DD/YYYY">{dataCovid.updated}</Moment>
          </p>
        </header>

        <body>
          <HorizontalBar data={data} />
          {/* {countries.map(function (list, index) {
            return (
              <div key={index}>
                <p>
                  {list.country} {list.cases}
                </p>
              </div>
            );
          })} */}
        </body>
      </div>
    </>
  );
}

export default Chart;
