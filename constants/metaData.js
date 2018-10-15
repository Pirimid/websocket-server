const DOUBLE = "double";
const PositionPanelMetaData = [
  {
    name: "id",
    displayValue: "Id",
    dataType: "int",
    decimalLocator: 0,
    editable: false,
    hidden: true,
    sequence: 1
  },
  {
    name: "symbol",
    displayValue: "Symbol",
    dataType: "string",
    size: 30,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 1
  },
  {
    name: "volumeCompany",
    displayValue: "Volume (Company)",
    dataType: DOUBLE,
    decimalLocator: 2,
    editable: false,
    hidden: false,
    sequence: 2
  },
  {
    name: "avgPrice",
    displayValue: "Average Price",
    dataType: DOUBLE,
    decimalLocator: 4,
    editable: false,
    hidden: false,
    sequence: 3
  },
  {
    name: "lastRate",
    displayValue: "Last Rate",
    dataType: DOUBLE,
    decimalLocator: 4,
    editable: false,
    hidden: false,
    sequence: 4
  },
  {
    name: "profitLoss",
    displayValue: "Profit & Loss",
    dataType: DOUBLE,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 5
  },
  {
    name: "compVolume",
    displayValue: "Company Volume",
    dataType: DOUBLE,
    decimalLocator: 2,
    editable: false,
    hidden: false,
    sequence: 6
  },
  {
    name: "compProfLoss",
    displayValue: "Company P&L",
    dataType: DOUBLE,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 7
  },
  {
    name: "compExposure",
    displayValue: "Company Exposure",
    dataType: DOUBLE,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 8
  },
  {
    name: "grossExposure",
    displayValue: "Gross Exposure",
    dataType: DOUBLE,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 9
  },
  {
    name: "grossVolume",
    displayValue: "Gross Volume",
    dataType: DOUBLE,
    decimalLocator: 2,
    editable: false,
    hidden: false,
    sequence: 10
  },
  {
    name: "grossProfLoss",
    displayValue: "Gross P&L",
    dataType: DOUBLE,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 11
  }
];

module.exports = PositionPanelMetaData;