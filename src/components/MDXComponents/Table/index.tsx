import * as React from "react";

export interface IBlogTableProps {
  headers?: string[];
  rows?: Array<string[]>;
}

export default function BlogTable(props: IBlogTableProps) {
  return (
    <table style={{ borderSpacing: 0 }}>
      <thead>
        <tr>
          {props.headers?.map((header, index) => (
            <th
              key={index}
              style={{
                textAlign: "left",
                padding: "10px 20px 10px 0",
                borderBottom: "2px solid",
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.rows?.map((row, index) => (
          <tr key={index}>
            {row.map((item, index) => {
              return (
                <td key={index} style={{ padding: "10px 20px 10px 0", borderBottom: "2px solid", }}>
                  {item}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
