import { CsvToHtmlTable } from "react-csv-to-table";
import {dataCsv} from './assets/data.csv'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Line,Bar } from "react-chartjs-2";
import {ChartsData} from './assets/ChartsData'
import { Chart as ChartJS, Legend, LineElement, Tooltip,Title,CategoryScale,LinearScale,PointElement,Filler } from "chart.js";
ChartJS.register (
    Title, Tooltip,LineElement, Legend,CategoryScale,LinearScale,PointElement,Filler
)
import { useState,useEffect } from "react";
import axios from "axios";

export default function App() {
  console.log(ChartsData)

  const [datas, setDatas] = useState({
    labels:["2004","2008","2012","2016","2020"],
    datasets:[
        {
            label:"Medals",
            data: [1,3,6,2,7,0],
            backgroundColor:'yellow',
            borderColor:"blue",
        }
    ]
})


  return (
    <>
      <CsvToHtmlTable
        data={dataCsv}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />

{/* <div style={{width:"500px",height:"500px"}}>
      <Line  data={datas}></Line>
      </div>*/}
<div> 
      <Line data= {{
        labels: ["SR Tendulkar (INDIA)", "KC Sangakkara (Asia/ICC/SL)", "RT Ponting (AUS/ICC)", "ST Jayasuriya (Asia/SL)", "DPMD Jayawardene (Asia/SL)", "Inzamam-ul-Haq (Asia/PAK)", "V Kohli (INDIA)",
        "JH Kallis (Afr/ICC/SA)","SC Ganguly (Asia/INDIA)","R Dravid (Asia/ICC/INDIA)","MS Dhoni (Asia/INDIA)","CH Gayle (ICC/WI)","BC Lara (ICC/WI)","TM Dilshan (SL)","Mohammad Yousuf (Asia/PAK)","AC Gilchrist (AUS/ICC)","AB de Villiers (Afr/SA)","M Azharuddin (INDIA)","PA de Silva (SL)","RG Sharma (INDIA)","Saeed Anwar (PAK)"],
      datasets: [
        {
          label: "Average",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [44.83, 41.98, 42.03, 32.36, 33.37, 39.52, 59.84,44.36,41.02,39.16,50.57,37.83,40.48,39.27,41.71,35.89,53.5,36.92,34.9,49.14,39.21]
        },
        {
          label: "Runs",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [18426,14234,13704,13430,12650,11739,11609,11579,11363,10889,10773,10480,10405,10290,9720,9619,9577,9378,9284,8944,8824]
        },
        {
          label: "High Score",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 15, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 16, 136)",
          pointBackgroundColor: "rgb(255, 5, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 20, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [200,169,164,189,144,137,183,139,183,153,183,215,169,161,141,172,176,153,145,264,194]
        }
      ]
      }}/>
</div>
    </>
  );
}
