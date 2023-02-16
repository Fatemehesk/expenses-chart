import "./Charts.css";
import ChartBar from "./ChartsBar";
const Charts = (props) => {
    const dataPointValue= props.dataPoints.map(data=>data.value);
    const totalMaximum=Math.max(...dataPointValue);
 
  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => {
          return(<ChartBar
            value={dataPoint.value}
            key={dataPoint.label}
            label={dataPoint.label}
            maxValue={totalMaximum}
          />)
        ;
      })}
    </div>
  );
};
export default Charts;
