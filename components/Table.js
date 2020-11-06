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
    rows: KPIsData[0],
    // cols: [""],
    aggregatorsName: "Sum",
    vals: ["Total Sales"],

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
