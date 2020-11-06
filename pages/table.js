import React, { useState } from "react";
import data, { KPIsData } from "../data";

import PivotTableUI from "react-pivottable/PivotTableUI";
import PivotTable from "react-pivottable/PivotTable";
import { sortAs } from "react-pivottable/Utilities";

import "react-pivottable/pivottable.css";

const Table = () => {
  const [hideConstructor, setHideConstructor] = useState(true);
  const [pivotTable, setPivotTable] = useState({
    data: KPIsData,
    rows: [
      "Retailer",
      "Stores Available",
      "Stores Available VS",
      "Wkly Avg Sales/Store",
      "Wkly Avg Sales/Store VS",
      "Wkly Avg Sales Total",
      "Wkly Avg Sales Total VS",
      "Total Sales",
      "Total Sales VS",
      "Total Sales Difference",
      "Source",
    ],
    // cols: [""],
    aggregatorsName: "Sum over Sum",
    vals: ["Total Sales", "Total Sales VS"],

    plotlyOptions: { width: 900, height: 500 },
  });

  const TableComponent = hideConstructor ? PivotTable : PivotTableUI;

  return (
    <div>
      <button onClick={() => setHideConstructor(!hideConstructor)}>
        Constructor
      </button>

      <TableComponent onChange={s => setPivotTable(s)} {...pivotTable} />
    </div>
  );
};

export default Table;
