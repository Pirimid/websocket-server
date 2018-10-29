const constants = require("./constants");

const DOUBLE = "double";
const STRING = "string";
const INT = "int";

const clientMasterMetaData = {
  type: constants.FETCH_CLIENT_MASTER_DATA,
  data: [
    {
      key: "login",
      displayValue: "Login",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 1
    },
    {
      key: "symbolGroup",
      displayValue: "Symbol Group",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 2
    },
    {
      key: "name",
      displayValue: "Name",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 3
    },
    {
      key: "broker",
      displayValue: "Broker",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 4
    },
    {
      key: "subBroker",
      displayValue: "Sub Broker",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 5
    },
    {
      key: "extraGroup",
      displayValue: "Extra Group",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 6
    },
    {
      key: "subBrokerPLRatio",
      displayValue: "Sub Broker P&L Ratio",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 7
    },
    {
      key: "brokerPLRatio",
      displayValue: "Broker P&L Ratio",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 8
    },
    {
      key: "companyPLRatio",
      displayValue: "Company P&L Ratio",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 9
    },
    {
      key: "brokageType",
      displayValue: "Brokage Type",
      dataType: STRING,
      size: 8,
      editable: false,
      hidden: false,
      sequence: 10
    },
    {
      key: "clientBrokage",
      displayValue: "Client Brokage",
      dataType: DOUBLE,
      decimalLocator: 5,
      editable: false,
      hidden: false,
      sequence: 11
    },
    {
      key: "subBrokerBrokage",
      displayValue: "Sub Broker Brokage",
      dataType: DOUBLE,
      decimalLocator: 5,
      editable: false,
      hidden: false,
      sequence: 12
    },
    {
      key: "bokerBrokage",
      displayValue: "Broker Brokage",
      dataType: DOUBLE,
      decimalLocator: 5,
      editable: false,
      hidden: false,
      sequence: 13
    },
    {
      key: "companyBrokage",
      displayValue: "Company Brokage",
      dataType: DOUBLE,
      decimalLocator: 5,
      editable: false,
      hidden: false,
      sequence: 14
    },
    {
      key: "symbolWiseBuyLimit",
      displayValue: "Symbol wise Buy Limit",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 15
    },
    {
      key: "symoblWiseSellLimit",
      displayValue: "Symbol wise Sell Limit",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 16
    },
    {
      key: "symbolWisePendingOrderEnableDisable",
      displayValue: "Symbol wise Pending Order Enable/Disable",
      dataType: INT,
      editable: false,
      hidden: false,
      sequence: 17
    },
    {
      key: "symbolPositionLimit",
      displayValue: "Symbol Position Limit (Gateway)",
      dataType: INT,
      editable: false,
      hidden: false,
      sequence: 18
    },
    {
      key: "symbolPendingOrderDiffFromBidAsk",
      displayValue: "Symbol Pending Order Difference From Bid/Ask (Gateway)",
      dataType: DOUBLE,
      decimalLocator: 4,
      editable: false,
      hidden: false,
      sequence: 19
    },
    {
      key: "lossLimit",
      displayValue: "Loss Limit",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 20
    },
    {
      key: "creditLimit",
      displayValue: "Credit Limit",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 21
    },
    {
      key: "comment",
      displayValue: "Comment Y/N",
      dataType: STRING,
      editable: false,
      hidden: false,
      sequence: 22
    },
    {
      key: "qtyLimitMultiplayer",
      displayValue: "Quantity Limit Multiplayer",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 23
    },
    {
      key: "ignoreTrader",
      displayValue: "Ignore Trader Y/N",
      dataType: INT,
      editable: false,
      hidden: false,
      sequence: 24
    },
    {
      key: "colour",
      displayValue: "Colour",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 25
    }
  ]
}

const symbolWisePositionPanelMetaData = {
  type: constants.SCRIPT_WISE_POSITION_META_DATA,
  data: [
    {
      key: "id",
      displayValue: "Id",
      dataType: INT,
      decimalLocator: 0,
      editable: false,
      hidden: true,
      sequence: 0
    },
    {
      key: "symbol",
      displayValue: "Symbol",
      dataType: STRING,
      size: 30,
      decimalLocator: 0,
      editable: false,
      hidden: false,
      sequence: 1
    },
    {
      key: "clientQty",
      displayValue: "Client Quantity",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 2
    },
    {
      key: "clientAvg",
      displayValue: "Client Average",
      dataType: DOUBLE,
      decimalLocator: 4,
      editable: false,
      hidden: false,
      sequence: 3
    },
    {
      key: "clientGrossExposure",
      displayValue: "Client Gross Exposure",
      dataType: DOUBLE,
      decimalLocator: 4,
      editable: false,
      hidden: false,
      sequence: 4
    },
    {
      key: "profit",
      displayValue: "Profit",
      dataType: DOUBLE,
      decimalLocator: 0,
      editable: false,
      hidden: false,
      sequence: 5
    },
    {
      key: "companyQty",
      displayValue: "Company Quantity",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 6
    },
    {
      key: "companyAvg",
      displayValue: "Company Average",
      dataType: DOUBLE,
      decimalLocator: 0,
      editable: false,
      hidden: false,
      sequence: 7
    },
    {
      key: "lastRate",
      displayValue: "Last Rate",
      dataType: DOUBLE,
      decimalLocator: 4,
      editable: false,
      hidden: false,
      sequence: 8
    },
    {
      key: "companyBrokarage",
      displayValue: "Company Brokarage",
      dataType: DOUBLE,
      decimalLocator: 0,
      editable: false,
      hidden: false,
      sequence: 9
    },
    {
      key: "companyPL",
      displayValue: "Company P&L",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 10
    },
    {
      key: "companyExposure",
      displayValue: "Company Exposure",
      dataType: DOUBLE,
      decimalLocator: 0,
      editable: false,
      hidden: false,
      sequence: 11
    },
    {
      key: "multiplayer",
      displayValue: "Multiplayer",
      dataType: INT,
      decimalLocator: 0,
      editable: false,
      hidden: false,
      sequence: 12
    }
  ]
};

const netPositionPanelMetaData = {
  type: constants.NET_POSITION_META_DATA,
  data: [
    {
      "key": "id",
      "displayValue": "Id",
      "dataType": DOUBLE,
      "decimalLocator": null,
      "editable": false,
      "hidden": true,
      "sequence": 0
    },
    {
      "key": "login",
      "displayValue": "Login",
      "dataType": STRING,
      "size": 15,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 1
    },
    {
      "key": "name",
      "displayValue": "Name",
      "dataType": STRING,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 2
    },
    {
      "key": "symbol",
      "displayValue": "Symbol",
      "dataType": STRING,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 3
    },
    {
      "key": "prevVol",
      "displayValue": "Previous Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 4
    },
    {
      "key": "volDiff",
      "displayValue": "Volume Diff",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 5
    },
    {
      "key": "volume",
      "displayValue": "Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 6
    },
    {
      "key": "avgMt5",
      "displayValue": "Average MT5",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 7
    },
    {
      "key": "lastRate",
      "displayValue": "Last Rate",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 8
    },
    {
      "key": "profLoss",
      "displayValue": "Profit & Loss",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 9
    },
    {
      "key": "clientBal",
      "displayValue": "Client Balance",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 10
    },
    {
      "key": "brokerBal",
      "displayValue": "Broker Balance",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 11
    },
    {
      "key": "subBrokerBal",
      "displayValue": "Sub Broker Balance",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 12
    },
    {
      "key": "compBal",
      "displayValue": "Company Balance",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 13
    },
    {
      "key": "lastUpdated",
      "displayValue": "Last Updated",
      "dataType": INT,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 14
    },
    {
      "key": "groupMt5",
      "displayValue": "Group MT5",
      "dataType": STRING,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 15
    },
    {
      "key": "groupExtra",
      "displayValue": "Group Extra",
      "dataType": STRING,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 16
    },
    {
      "key": "checkedStatus",
      "displayValue": "Checked Status",
      "dataType": STRING,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 17
    },
    {
      "key": "allotedLimit",
      "displayValue": "Alloted Limit",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 18
    },
    {
      "key": "lossLimit",
      "displayValue": "Loss Limit",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": true,
      "hidden": false,
      "sequence": 19
    },
    {
      "key": "avgRateAccounting",
      "displayValue": "Average Rate Accounting",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 20
    },
    {
      "key": "balMt5",
      "displayValue": "Balance MT5",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 21
    },
    {
      "key": "settledTradeVol",
      "displayValue": "Settled Trade volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 22
    },
    {
      "key": "marginLive",
      "displayValue": "Margin Live",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 23
    },
    {
      "key": "creditLimit",
      "displayValue": "Credit Limit ",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": true,
      "hidden": false,
      "sequence": 24
    },
    {
      "key": "clientBrokaragePercentage",
      "displayValue": "Client Brokage %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 25
    },
    {
      "key": "subBrokaragePercentage",
      "displayValue": "Sub Brokarage %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 26
    },
    {
      "key": "brokerBrokaragePercentage",
      "displayValue": "Broker Brokarage %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 27
    },
    {
      "key": "compBrokaragePercentage",
      "displayValue": "Company Brokarage %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 28
    },
    {
      "key": "clientProfLossPercentage",
      "displayValue": "Client P&L %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 29
    },
    {
      "key": "subProfLossPercentage",
      "displayValue": "Sub P&L %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 30
    },
    {
      "key": "brokerProfLossPercentage",
      "displayValue": "Broker P&L %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 31
    },
    {
      "key": "compProfLossPercentage",
      "displayValue": "Company P&L %",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 32
    },
    {
      "key": "clientBrokarageTotal",
      "displayValue": "Client Brokage Total",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 33
    },
    {
      "key": "subBrokarageTotal",
      "displayValue": "Sub Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 34
    },
    {
      "key": "brokerBrokarageTotal",
      "displayValue": "Broker Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 35
    },
    {
      "key": "companyBrokarageTotal",
      "displayValue": "Company Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 36
    },
    {
      "key": "grossExposure",
      "displayValue": "Gross Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 37
    },
    {
      "key": "brokerExosure",
      "displayValue": "Broker Exosure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 38
    },
    {
      "key": "subBrokerExposure",
      "displayValue": "Sub Broker Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 39
    },
    {
      "key": "companyExposure",
      "displayValue": "Company Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 40
    },
    {
      "key": "expectedProfLoss",
      "displayValue": "Expected PL",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 41
    },
    {
      "key": "totalQtyByExchange",
      "displayValue": "Total Lot qty According to Exchange",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 42
    },
    {
      "key": "compLotQtyByExchange",
      "displayValue": "Company Lot qty According to Exchange",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 43
    },
    {
      "key": "extraLot",
      "displayValue": "Extra Lot",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 44
    }
  ]
};

const orderDataMetaData = {
  type: constants.ORDER_META_DATA,
  data: [
    {
      "key": "login",
      "displayValue": "Login",
      "dataType": STRING,
      "editable": false,
      "hidden": false,
      "sequence": 1
    },
    {
      "key": "name",
      "displayValue": "Name",
      "dataType": STRING,
      "editable": false,
      "hidden": false,
      "sequence": 2
    },
    {
      "key": "symbol",
      "displayValue": "Symbol",
      "dataType": STRING,
      "size": 30,
      "editable": false,
      "hidden": false,
      "sequence": 3
    },
    {
      "key": "netQuantity",
      "displayValue": "Net Quantity",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 4
    },
    {
      "key": "clientBrokarage",
      "displayValue": "Client Brokarage",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 5
    },
    {
      "key": "subBroker",
      "displayValue": "Sub Broker",
      "dataType": STRING,
      "size": 30,
      "editable": false,
      "hidden": false,
      "sequence": 6
    },
    {
      "key": "brokarage",
      "displayValue": "Brokarage",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 7
    },
    {
      "key": "brokerBrokarage",
      "displayValue": "Broker Brokarage",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 8
    },
    {
      "key": "compBrokarage",
      "displayValue": "Company Brokarage",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 9
    },
  ]
};

module.exports = { clientMasterMetaData, symbolWisePositionPanelMetaData, netPositionPanelMetaData, orderDataMetaData };