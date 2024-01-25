// import { useEffect, useState } from "react";
// import moment from "moment";
// import { Line } from "react-chartjs-2";
// import { Skeleton } from "antd";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Graph = ({ items, offset, setOffset }) => {
//   const [data, setData] = useState(null);
//   const [month, setMonth] = useState(moment().format("MMMM"));

//   useEffect(() => {
//     getMonths(offset);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [offset]);

//   const getMonths = (monthOffset = 0) => {
//     const today = moment().add(monthOffset, "months");
//     setMonth(today.format("MMMM"));
//     const startOfMonth = today.startOf("month").dayOfYear();
//     const endOfMonth = today.endOf("month").dayOfYear();
//     const year = today.year();

//     getData(startOfMonth, endOfMonth, year);
//   };

//   const getData = (startOfMonth, endOfMonth, year) => {
//     const tempData = [0, 0, 0, 0, 0];
//     items.map((item) => {
//       if (moment(item.date).year() === year) {
//         if (
//           moment(item.date).dayOfYear() >= startOfMonth &&
//           moment(item.date).dayOfYear() <= endOfMonth
//         ) {
//           tempData[item.mood] += 1;
//         }
//       }
//     });
//     setData({
//       labels: ["🙁", "😐", "🙂", "😄", "😄"],
//       datasets: [
//         {
//           label: "Monthly Stat",
//           data: tempData,
//           borderWidth: 3,
//           borderColor: "#2FCC9D",
//           yAxisID: "y",
//         },
//       ],
//     });
//   };

//   return (
//     <div className="">
//       <div className="heading">
//         <div className="flex flex-col items-center justify-between mb-4 ">
//           <h3 className="font-bold text-2xl flex ">Monthly Mood Graph</h3>
//         </div>
//       </div>

//       <div className="graph"></div>

//       <div className="w-1/2 mx-auto pb-10">
//         {data !== null ? <Line data={data} /> : <Skeleton active />}
//       </div>
//     </div>
//   );
// };

// export default Graph;
