import React, { useState, useEffect } from "react";
import service from "../../services/service";
// import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

function Case() {
  const [cases, setCases] = useState([]);
  // const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCase = () => {
      service
        .getCaseAll()
        .then((response) => {
          setCases(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getCase();

    // const fetchData = async () => {
    //   const result = await axios("https://disease.sh/v3/covid-19/historical");
    //   setCountry(result.data);
    // };

    // async function fetchData() {
    //   const response = await fetch("https://disease.sh/v3/covid-19/historical");
    //   response.json().then((response) => setCountry(response));
    // }
    // fetchData();
  }, [cases]);

  //useEffect Fetch data
  // useEffect(() => {
  //   getData().then(res => setData(res)
  //  }, [data])

  const data = {
    labels: cases.map((history) => history.country),
    datasets: [
      {
        label: "Count of Case(s)",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        // data:
      },
    ],
  };
  return (
    <>
      <div>
        <header style={{ textAlign: "center" }}>
          <h1>Covid Global Cases</h1>

          {/* <h2>show Country: {JSON.stringify(country)}</h2> */}

          {/* <p key={index}>Country :{history.timeline}</p> */}
          {cases.map((history, index) => (
            <p key={index}>
              Country :
              {Object.keys(history.timeline).map((timeline, index) => (
                <>
                <p key={index}>{`${timeline}`}</p>
                
                {/* {history.timeline[timeline].map((cases, index) => (
                  <p key={index}>{`${cases}`}</p>
                    ))} */}
                    </>
              ))}
            </p>
          ))}
        </header>
        <body>
          <HorizontalBar data={data} />
        </body>
      </div>
    </>
  );
}

export default Case;
