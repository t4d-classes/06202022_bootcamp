import React from "react";


export const CarTool = () => {

  return (
    <>
      <header>
        <h2>Car Tool</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>        
        <tbody>
          <tr>
            <td>1</td>
            <td>Dodge</td>
            <td>Challenger</td>
            <td>2019</td>
            <td>red</td>
            <td>50000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Chevrolet</td>
            <td>Geo Metro</td>
            <td>1998</td>
            <td>blue</td>
            <td>8000</td>
          </tr>
        </tbody>
      </table>
    </>
  );


};

