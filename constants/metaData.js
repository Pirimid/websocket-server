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
};

const symbolMasterMetaData = {
  type: constants.FETCH_SYMBOL_MASTER_META_DATA,
  data: [
    {
      key: "symbol",
      displayValue: "Symbol",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 1
    },
    {
      key: "lastPrice",
      displayValue: "Last Price",
      dataType: DOUBLE,
      decimalLocator: 4,
      editable: false,
      hidden: false,
      sequence: 2
    },
    {
      key: "multiplayer",
      displayValue: "Multiplayer",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 3
    },
    {
      key: "symbolMargin",
      displayValue: "Symbol Margin",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 4
    },
    {
      key: "symbolLimitPerPrice",
      displayValue: "Symbol Limit Per Price (Gateway)",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 5
    },
    {
      key: "symbolPendingOrderDiffFromBidOrAsk",
      displayValue: "Symbol Pending Order Difference From Bid / Ask (Gateway)",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 6
    },
    {
      key: "symbolLTPMapping",
      displayValue: "Symbol LTP Mapping",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 7
    },
    {
      key: "upperCircuit",
      displayValue: "Upper Circuit",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 8
    },
    {
      key: "lowerCircuit",
      displayValue: "Lower Circuit",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 9
    },
    {
      key: "exchangeSymbol",
      displayValue: "Exchange Symbol",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 10
    },
    {
      key: "nextSymbol",
      displayValue: "Next Symbol",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 11
    },
    {
      key: "nseLotSize",
      displayValue: "NSE Lot Size",
      dataType: INT,
      editable: false,
      hidden: false,
      sequence: 12
    },
    {
      key: "mtLotSize",
      displayValue: "MT Lot Size",
      dataType: INT,
      editable: false,
      hidden: false,
      sequence: 13
    },
    {
      key: "maxAllowedVolume",
      displayValue: "Max Allowed Volumne",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 14
    },
    {
      key: "allowedLimitPerClient",
      displayValue: "Allowed Limit Per Client",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 15
    },
    {
      key: "symbolMaxPositionAllowed",
      displayValue: "Symbol Max Position Allowed",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 16
    },
    {
      key: "symbolGroup",
      displayValue: "Symbol Group",
      dataType: STRING,
      size: 20,
      editable: false,
      hidden: false,
      sequence: 17
    },
    {
      key: "binSize",
      displayValue: "Bin Size",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 18
    },
    {
      key: "pocketNumbers",
      displayValue: "Pocket Numbers",
      dataType: DOUBLE,
      decimalLocator: 2,
      editable: false,
      hidden: false,
      sequence: 19
    }
  ]
};

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
    // {
    //   "key": "id",
    //   "displayValue": "Id",
    //   "dataType": DOUBLE,
    //   "decimalLocator": null,
    //   "editable": false,
    //   "hidden": true,
    //   "sequence": 0
    // },
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
      "key": "volume",
      "displayValue": "Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 4
    },
    {
      "key": "prevVol",
      "displayValue": "Previous Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 5
    },
    {
      "key": "volDiff",
      "displayValue": "Difference Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 6
    },
    {
      "key": "avg",
      "displayValue": "Average",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 7
    },
    {
      "key": "balance",
      "displayValue": "Balance",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 8
    },
    {
      "key": "lastRate",
      "displayValue": "Last Rate",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 9
    },
    {
      "key": "clientBrokTotal",
      "displayValue": "Client Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 10
    },
    {
      "key": "lastUpdated",
      "displayValue": "Last Update Time",
      "dataType": INT,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 11
    },
    {
      "key": "subBrokerBrokTotal",
      "displayValue": "Sub Broker Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 12
    },
    {
      "key": "brokerBrokTotal",
      "displayValue": "Broker Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 13
    },
    {
      "key": "compBal",
      "displayValue": "Company Brokarage Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 14
    },
    {
      "key": "extraVolume",
      "displayValue": "Extra Volume",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 15
    },
    {
      "key": "subBrokerVolume",
      "displayValue": "Sub Broker Volume",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 16
    },
    {
      "key": "brokerVolume",
      "displayValue": "Broker Volume",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 17
    },
    {
      "key": "companyVolume",
      "displayValue": "Company Volume",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 18
    },
    {
      "key": "clientLots",
      "displayValue": "Client Lots",
      "dataType": DOUBLE,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 19
    },
    {
      "key": "subBrokerLots",
      "displayValue": "Sub Broker Lots",
      "dataType": DOUBLE,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 20
    },
    {
      "key": "brokerLots",
      "displayValue": "Broker Lots",
      "dataType": DOUBLE,
      "size": 30,
      "decimalLocator": null,
      "editable": false,
      "hidden": false,
      "sequence": 20
    },
    {
      "key": "companyLots",
      "displayValue": "Company Lots",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 21
    },
    {
      "key": "clientP&L",
      "displayValue": "Client P&L",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": true,
      "hidden": false,
      "sequence": 22
    },
    {
      "key": "subBrokerP&L",
      "displayValue": "SubBroker P&L",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 23
    },
    {
      "key": "brokerP&L",
      "displayValue": "Broker P&L",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 24
    },
    {
      "key": "companyP&L",
      "displayValue": "Company P&L",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 25
    },
    {
      "key": "clientTotal",
      "displayValue": "Client Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 26
    },
    {
      "key": "subBrokerTotal",
      "displayValue": "Sub Broker Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 27
    },
    {
      "key": "brokerTotal",
      "displayValue": "Broker Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 28
    },
    {
      "key": "companyTotal",
      "displayValue": "Company Total",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 29
    },
    {
      "key": "grossExposure",
      "displayValue": "Gross Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 30
    },
    {
      "key": "subBrokerExposure",
      "displayValue": "Sub Broker Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 31
    },
    {
      "key": "brokerExposure",
      "displayValue": "Broker Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 32
    },
    {
      "key": "companyExposure",
      "displayValue": "Company Exposure",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 33
    },
    {
      "key": "multiplayer",
      "displayValue": "Multiplayer",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 34
    },
    {
      "key": "Broker Name",
      "displayValue": "Broker Name",
      "dataType": STRING,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 35
    },
    {
      "key": "subBrokerName",
      "displayValue": "Sub Broker Name",
      "dataType": STRING,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 36
    },
    {
      "key": "extraGroup",
      "displayValue": "Extra Group",
      "dataType": STRING,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 37
    },
    {
      "key": "subbrokerRatio",
      "displayValue": "Subbroker Ratio",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 38
    },
    {
      "key": "brokerRatio",
      "displayValue": "Broker Ratio",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 39
    },
    {
      "key": "companyRation",
      "displayValue": "Company Ration",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 40
    },
    {
      "key": "clientBrokerageType",
      "displayValue": "Client Brokerage Type",
      "dataType": STRING,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 41
    },
    {
      "key": "clientBrokerage",
      "displayValue": "Client Brokerage",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 42
    },
    {
      "key": "subBrokerBrokerage",
      "displayValue": "Sub Broker Brokerage",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false,
      "sequence": 43
    },
    {
      "key": "brokerBrokerage",
      "displayValue": "Broker Brokerage",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": false,
      "hidden": false,
      "sequence": 44
    },
    {
      "key": "companyBrokerage",
      "displayValue": "Company Brokerage",
      "dataType": DOUBLE,
      "decimalLocator": 0,
      "editable": true,
      "hidden": false,
      "sequence": 45
    },
    {
      "key": "maxAllowedVolume",
      "displayValue": "Max Allowed Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": true,
      "hidden": false,
      "sequence": 46
    }
  ]
};

netPositionPanelMetaData.data = netPositionPanelMetaData.data.map((item, index) => { return {...item, sequence : index} })

const orderDataMetaData = {
  type: constants.ORDER_META_DATA,
  data: [
    {
      "key": "login",
      "displayValue": "Login",
      "dataType": STRING,
      "editable": false,
      "hidden": false
    },
    {
      "key": "time",
      "displayValue": "Time",
      "dataType": INT,
      "editable": false,
      "hidden": false
    },
    {
      "key": "order",
      "displayValue": "Order",
      "dataType": INT,
      "editable": false,
      "hidden": false
    },
    {
      "key": "symbol",
      "displayValue": "Symbol",
      "dataType": STRING,
      "size": 30,
      "editable": false,
      "hidden": false
    },
    {
      "key": "type",
      "displayValue": "Type",
      "dataType": INT,
      "editable": false,
      "hidden": false
    },
    {
      "key": "volume",
      "displayValue": "Volume",
      "dataType": DOUBLE,
      "decimalLocator": 2,
      "editable": false,
      "hidden": false
    },
    {
      "key": "price",
      "displayValue": "Price",
      "dataType": DOUBLE,
      "decimalLocator": 4,
      "editable": false,
      "hidden": false
    },
    {
      "key": "comment",
      "displayValue": "Comment",
      "dataType": STRING,
      "editable": false,
      "hidden": false
    },
    {
      "key": "status",
      "displayValue": "Status",
      "dataType": STRING,
      "editable": false,
      "hidden": false
    },
    {
      "key": "select",
      "displayValue": "Select",
      "dataType": STRING,
      "editable": true,
      "hidden": false
    },
    {
      "key": "statusSubtype",
      "displayValue": "Status Subtype",
      "dataType": STRING,
      "editable": true,
      "hidden": false
    },
    {
      "key": "relatedOrder",
      "displayValue": "Related Order",
      "dataType": STRING,
      "editable": true,
      "hidden": false
    },
    {
      "key": "tradeHappenTime",
      "displayValue": "Trade Happen Time",
      "dataType": INT,
      "editable": true,
      "hidden": false
    },
    {
      "key": "ourComment",
      "displayValue": "Our Comment",
      "dataType": STRING,
      "editable": true,
      "hidden": false
    }
  ]
};

orderDataMetaData.data = orderDataMetaData.data.map((data, index) => ({ ...data, sequence: index }));

module.exports = { clientMasterMetaData, symbolMasterMetaData, symbolWisePositionPanelMetaData, netPositionPanelMetaData, orderDataMetaData };