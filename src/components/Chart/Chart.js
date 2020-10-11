import React, { useState, useEffect } from "react";
import service from "../../services/service";
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
          {countries.map(function (list, index) {
            return (
              <div key={index}>
                <p>
                  {list.country} {list.cases}
                </p>
              </div>
            );
          })}
        </body>
      </div>
    </>
  );
}

export default Chart;
