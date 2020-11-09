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
    aggregatorName: "Sum",
    vals: ["Total Sales"],
  });

  const TableComponent = hideConstructor ? PivotTable : PivotTableUI;

  return (
    <div>
      <button onClick={() => setHideConstructor(!hideConstructor)}>
        Constructor
      </button>

      <TableComponent
        data={KPIsData}
        onChange={s => setPivotTable(s)}
        {...pivotTable}
      />
    </div>
  );
};

export default Table;
