import { ChartData } from "chart.js";
import React from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  box-shadow: 0 0 20px var(--shadow-color);
  border-style: hidden;
  border-radius: 12px;
  overflow: hidden;
  margin: 8px 0;

  & > thead > tr {
      background-color: var(--point-color);
      color: white;
      text-align: center;
    }
  }

  td,
  th {
    border: 1px solid var(--shadow-color);
    padding: 12px 20px;
  }
`;

const TdTitle = styled.td`
  font-weight: bold;
`;

const Table = ({ data }: { data: ChartData<"line", any[], any> }) => {
  const chartData = data.datasets[0].data;

  const getAverage = () => {
    return (
      (chartData.reduce((a, b) => a + b) / chartData.length).toFixed(1) + "km"
    );
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
          <th>Altitude</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TdTitle>Current</TdTitle>
          <td data-testid="current-td">{chartData[chartData.length - 1].toFixed(1)}km</td>
          <td>{data.labels![data.labels!.length - 1]}</td>
        </tr>
        <tr>
          <TdTitle>Average</TdTitle>
          <td>{getAverage()}</td>
          <td>
            {data.labels![0]} - {data.labels![data.labels!.length - 1]}
          </td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default Table;
