import React, { useState, useEffect } from "react";
import service from "../../services/service";

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
        </header>
        {/* <p>Date : {dataCovid.updated}</p>
        <p>All Case : {dataCovid.cases}</p>
        <p>Today Case : {dataCovid.todayCases}</p>
        <p>Today Death : {dataCovid.todayDeaths}</p>
        <p>Todat Recover : {dataCovid.todayRecovered}</p> */}

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
