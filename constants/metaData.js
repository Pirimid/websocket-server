const DOUBLE = "double";
const STRING = "string";
const INT = "int";

const symbolWisePositionPanelMetaData = [
  {
    name: "id",
    displayValue: "Id",
    dataType: INT,
    decimalLocator: 0,
    editable: false,
    hidden: true,
    sequence: 1
  },
  {
    name: "symbol",
    displayValue: "Symbol",
    dataType: STRING,
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
  },
  {
    name: "multiplayer",
    displayValue: "Multiplayer",
    dataType: INT,
    decimalLocator: 0,
    editable: false,
    hidden: false,
    sequence: 12
  }
];

const netsymbolWisePositionPanelMetaData = [
  {
    "name": "id",
    "displayValue": "Id",
    "dataType": DOUBLE,
    "decimalLocator": null,
    "editable": false,
    "hidden": true,
    "sequence": 0
  },
  {
    "name": "login",
    "displayValue": "Login",
    "dataType": STRING,
    "size": 15,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 1
  },
  {
    "name": "name",
    "displayValue": "Name",
    "dataType": STRING,
    "size": 30,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 2
  },
  {
    "name": "symbol",
    "displayValue": "Symbol",
    "dataType": STRING,
    "size": 30,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 3
  },
  {
    "name": "prevVol",
    "displayValue": "Previous Volume",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 4
  },
  {
    "name": "volDiff",
    "displayValue": "Volume Diff",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 5
  },
  {
    "name": "volume",
    "displayValue": "Volume",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 6
  },
  {
    "name": "avgMt5",
    "displayValue": "Average MT5",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 7
  },
  {
    "name": "lastRate",
    "displayValue": "Last Rate",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 8
  },
  {
    "name": "profLoss",
    "displayValue": "Profit & Loss",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 9
  },
  {
    "name": "clientBal",
    "displayValue": "Client Balance",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 10
  },
  {
    "name": "brokerBal",
    "displayValue": "Broker Balance",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 11
  },
  {
    "name": "subBrokerBal",
    "displayValue": "Sub Broker Balance",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 12
  },
  {
    "name": "compBal",
    "displayValue": "Company Balance",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 13
  },
  {
    "name": "lastUpdated",
    "displayValue": "Last Updated",
    "dataType": INT,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 14
  },
  {
    "name": "groupMt5",
    "displayValue": "Group MT5",
    "dataType": STRING,
    "size": 30,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 15
  },
  {
    "name": "groupExtra",
    "displayValue": "Group Extra",
    "dataType": STRING,
    "size": 30,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 16
  },
  {
    "name": "checkedStatus",
    "displayValue": "Checked Status",
    "dataType": STRING,
    "size": 30,
    "decimalLocator": null,
    "editable": false,
    "hidden": false,
    "sequence": 17
  },
  {
    "name": "allotedLimit",
    "displayValue": "Alloted Limit",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 18
  },
  {
    "name": "lossLimit",
    "displayValue": "Loss Limit",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": true,
    "hidden": false,
    "sequence": 19
  },
  {
    "name": "avgRateAccounting",
    "displayValue": "Average Rate Accounting",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 20
  },
  {
    "name": "balMt5",
    "displayValue": "Balance MT5",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 21
  },
  {
    "name": "settledTradeVol",
    "displayValue": "Settled Trade volume",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 22
  },
  {
    "name": "marginLive",
    "displayValue": "Margin Live",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 23
  },
  {
    "name": "creditLimit",
    "displayValue": "Credit Limit ",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": true,
    "hidden": false,
    "sequence": 24
  },
  {
    "name": "clientBrokaragePercentage",
    "displayValue": "Client Brokage %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 25
  },
  {
    "name": "subBrokaragePercentage",
    "displayValue": "Sub Brokarage %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 26
  },
  {
    "name": "brokerBrokaragePercentage",
    "displayValue": "Broker Brokarage %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 27
  },
  {
    "name": "compBrokaragePercentage",
    "displayValue": "Company Brokarage %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 28
  },
  {
    "name": "clientProfLossPercentage",
    "displayValue": "Client P&L %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 29
  },
  {
    "name": "subProfLossPercentage",
    "displayValue": "Sub P&L %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 30
  },
  {
    "name": "brokerProfLossPercentage",
    "displayValue": "Broker P&L %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 31
  },
  {
    "name": "compProfLossPercentage",
    "displayValue": "Company P&L %",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": true,
    "hidden": false,
    "sequence": 32
  },
  {
    "name": "clientBrokarageTotal",
    "displayValue": "Client Brokage Total",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 33
  },
  {
    "name": "subBrokarageTotal",
    "displayValue": "Sub Brokarage Total",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 34
  },
  {
    "name": "brokerBrokarageTotal",
    "displayValue": "Broker Brokarage Total",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 35
  },
  {
    "name": "companyBrokarageTotal",
    "displayValue": "Company Brokarage Total",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 36
  },
  {
    "name": "grossExposure",
    "displayValue": "Gross Exposure",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 37
  },
  {
    "name": "brokerExosure",
    "displayValue": "Broker Exosure",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 38
  },
  {
    "name": "subBrokerExposure",
    "displayValue": "Sub Broker Exposure",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 39
  },
  {
    "name": "companyExposure",
    "displayValue": "Company Exposure",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 40
  },
  {
    "name": "expectedProfLoss",
    "displayValue": "Expected PL",
    "dataType": DOUBLE,
    "decimalLocator": 0,
    "editable": false,
    "hidden": false,
    "sequence": 41
  },
  {
    "name": "totalQtyByExchange",
    "displayValue": "Total Lot qty According to Exchange",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 42
  },
  {
    "name": "compLotQtyByExchange",
    "displayValue": "Company Lot qty According to Exchange",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 43
  },
  {
    "name": "extraLot",
    "displayValue": "Extra Lot",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 44
  }
];

const orderDataMetaData = [
  {
    "name": "login",
    "displayValue": "Login",
    "dataType": STRING,
    "editable": false,
    "hidden": false,
    "sequence": 1
  },
  {
    "name": "name",
    "displayValue": "Name",
    "dataType": STRING,
    "editable": false,
    "hidden": false,
    "sequence": 2
  },
  {
    "name": "symbol",
    "displayValue": "Symbol",
    "dataType": STRING,
    "size": 30,
    "editable": false,
    "hidden": false,
    "sequence": 3
  },
  {
    "name": "netQuantity",
    "displayValue": "Net Quantity",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 4
  },
  {
    "name": "clientBrokarage",
    "displayValue": "Client Brokarage",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 5
  },
  {
    "name": "subBroker",
    "displayValue": "Sub Broker",
    "dataType": STRING,
    "size": 30,
    "editable": false,
    "hidden": false,
    "sequence": 6
  },
  {
    "name": "brokarage",
    "displayValue": "Brokarage",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 7
  },
  {
    "name": "brokerBrokarage",
    "displayValue": "Broker Brokarage",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 8
  },
  {
    "name": "compBrokarage",
    "displayValue": "Company Brokarage",
    "dataType": DOUBLE,
    "decimalLocator": 2,
    "editable": false,
    "hidden": false,
    "sequence": 9
  },
];

module.exports = { symbolWisePositionPanelMetaData, netsymbolWisePositionPanelMetaData, orderDataMetaData };