const constants = require("./constants");

const DOUBLE = "double";
const STRING = "string";
const INT = "int";

const clientMasterMetaData = {
  type: constants.CLIENT_MASTER_META_DATA,
  data: [
    { "key": "login", "displayValue": "Login", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "symbolGroup", "displayValue": "Symbol Group", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "name", "displayValue": "Name", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "broker", "displayValue": "Broker", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "subBroker", "displayValue": "Sub Broker", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "extraGroup", "displayValue": "Extra Group", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "subBrokerPLRatio", "displayValue": "Sub Broker P&L Ratio", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "brokerPLRatio", "displayValue": "Broker P&L Ratio", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "companyPLRatio", "displayValue": "Company P&L Ratio", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "brokageType", "displayValue": "Brokage Type", "dataType": STRING, "size": 8, "editable": false, "hidden": false },
    { "key": "clientBrokage", "displayValue": "Client Brokage", "dataType": DOUBLE, "decimalLocator": 5, "editable": false, "hidden": false },
    { "key": "subBrokerBrokage", "displayValue": "Sub Broker Brokage", "dataType": DOUBLE, "decimalLocator": 5, "editable": false, "hidden": false },
    { "key": "bokerBrokage", "displayValue": "Broker Brokage", "dataType": DOUBLE, "decimalLocator": 5, "editable": false, "hidden": false },
    { "key": "companyBrokage", "displayValue": "Company Brokage", "dataType": DOUBLE, "decimalLocator": 5, "editable": false, "hidden": false },
    { "key": "symbolWiseBuyLimit", "displayValue": "Symbol wise Buy Limit", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symoblWiseSellLimit", "displayValue": "Symbol wise Sell Limit", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolWisePendingOrderEnableDisable", "displayValue": "Symbol wise Pending Order Enable/Disable", "dataType": INT, "editable": false, "hidden": false },
    { "key": "symbolPositionLimit", "displayValue": "Symbol Position Limit (Gateway)", "dataType": INT, "editable": false, "hidden": false },
    { "key": "symbolPendingOrderDiffFromBidAsk", "displayValue": "Symbol Pending Order Difference From Bid/Ask (Gateway)", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "lossLimit", "displayValue": "Loss Limit", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "creditLimit", "displayValue": "Credit Limit", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "comment", "displayValue": "Comment Y/N", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "qtyLimitMultiplayer", "displayValue": "Quantity Limit Multiplayer", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "ignoreTrader", "displayValue": "Ignore Trader Y/N", "dataType": INT, "editable": false, "hidden": false },
    { "key": "colour", "displayValue": "Colour", "dataType": STRING, "size": 20, "editable": false, "hidden": false }
  ]
};
clientMasterMetaData.data = clientMasterMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const symbolMasterMetaData = {
  type: constants.SYMBOL_MASTER_META_DATA,
  data: [
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "lastPrice", "displayValue": "Last Price", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "multiplayer", "displayValue": "Multiplayer", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolMargin", "displayValue": "Symbol Margin", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolLimitPerPrice", "displayValue": "Symbol Limit Per Price (Gateway)", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolPendingOrderDiffFromBidOrAsk", "displayValue": "Symbol Pending Order Difference From Bid / Ask (Gateway)", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolLTPMapping", "displayValue": "Symbol LTP Mapping", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "upperCircuit", "displayValue": "Upper Circuit", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "lowerCircuit", "displayValue": "Lower Circuit", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "exchangeSymbol", "displayValue": "Exchange Symbol", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "nextSymbol", "displayValue": "Next Symbol", "dataType": STRING, "size": 20, "editable": false, "hidden": false },
    { "key": "nseLotSize", "displayValue": "NSE Lot Size", "dataType": INT, "editable": false, "hidden": false },
    { "key": "mtLotSize", "displayValue": "MT Lot Size", "dataType": INT, "editable": false, "hidden": false },
    { "key": "maxAllowedVolume", "displayValue": "Max Allowed Volumne", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "allowedLimitPerClient", "displayValue": "Allowed Limit Per Client", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolMaxPositionAllowed", "displayValue": "Symbol Max Position Allowed", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "symbolGroup", "displayValue": "Symbol Group", "dataType": STRING, "size": 20, "editable": false, "hidden": false, sequence: 17 },
    { "key": "binSize", "displayValue": "Bin Size", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false, sequence: 18 },
    { "key": "pocketNumbers", "displayValue": "Pocket Numbers", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false, sequence: 19 }
  ]
};
symbolMasterMetaData.data = symbolMasterMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const symbolWisePositionPanelMetaData = {
  type: constants.SCRIPT_WISE_POSITION_META_DATA,
  data: [
    { "key": "id", "displayValue": "Id", "dataType": INT, "decimalLocator": 0, "editable": false, "hidden": true },
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "size": 30, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientQty", "displayValue": "Client Quantity", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "clientAvg", "displayValue": "Client Average", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "clientGrossExposure", "displayValue": "Client Gross Exposure", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "profit", "displayValue": "Profit", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyQty", "displayValue": "Company Quantity", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "companyAvg", "displayValue": "Company Average", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "lastRate", "displayValue": "Last Rate", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "companyBrokarage", "displayValue": "Company Brokarage", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyPL", "displayValue": "Company P&L", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "companyExposure", "displayValue": "Company Exposure", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "multiplayer", "displayValue": "Multiplayer", "dataType": INT, "decimalLocator": 0, "editable": false, "hidden": false }
  ]
};
symbolWisePositionPanelMetaData.data = symbolWisePositionPanelMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const netPositionPanelMetaData = {
  type: constants.NET_POSITION_META_DATA,
  data: [
    { "key": "login", "displayValue": "Login", "dataType": STRING, "size": 15, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "name", "displayValue": "Name", "dataType": STRING, "size": 30, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "size": 30, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "volume", "displayValue": "Volume", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "prevVol", "displayValue": "Previous Volume", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "volDiff", "displayValue": "Difference Volume", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "avg", "displayValue": "Average", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "balance", "displayValue": "Balance", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "lastRate", "displayValue": "Last Rate", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "clientBrokTotal", "displayValue": "Client Brokarage Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "lastUpdated", "displayValue": "Last Update Time", "dataType": INT, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "subBrokerBrokTotal", "displayValue": "Sub Broker Brokarage Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "brokerBrokTotal", "displayValue": "Broker Brokarage Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "compBal", "displayValue": "Company Brokarage Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "extraVolume", "displayValue": "Extra Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "subBrokerVolume", "displayValue": "Sub Broker Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "brokerVolume", "displayValue": "Broker Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyVolume", "displayValue": "Company Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientLots", "displayValue": "Client Lots", "dataType": DOUBLE, "size": 30, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "subBrokerLots", "displayValue": "Sub Broker Lots", "dataType": DOUBLE, "size": 30, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "brokerLots", "displayValue": "Broker Lots", "dataType": DOUBLE, "size": 30, "decimalLocator": null, "editable": false, "hidden": false },
    { "key": "companyLots", "displayValue": "Company Lots", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientP&L", "displayValue": "Client P&L", "dataType": DOUBLE, "decimalLocator": 0, "editable": true, "hidden": false },
    { "key": "subBrokerP&L", "displayValue": "SubBroker P&L", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "brokerP&L", "displayValue": "Broker P&L", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyP&L", "displayValue": "Company P&L", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientTotal", "displayValue": "Client Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "subBrokerTotal", "displayValue": "Sub Broker Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "brokerTotal", "displayValue": "Broker Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyTotal", "displayValue": "Company Total", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "grossExposure", "displayValue": "Gross Exposure", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "subBrokerExposure", "displayValue": "Sub Broker Exposure", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "brokerExposure", "displayValue": "Broker Exposure", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyExposure", "displayValue": "Company Exposure", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "multiplayer", "displayValue": "Multiplayer", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "Broker Name", "displayValue": "Broker Name", "dataType": STRING, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "subBrokerName", "displayValue": "Sub Broker Name", "dataType": STRING, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "extraGroup", "displayValue": "Extra Group", "dataType": STRING, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "subbrokerRatio", "displayValue": "Subbroker Ratio", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "brokerRatio", "displayValue": "Broker Ratio", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyRation", "displayValue": "Company Ration", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientBrokerageType", "displayValue": "Client Brokerage Type", "dataType": STRING, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientBrokerage", "displayValue": "Client Brokerage", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "subBrokerBrokerage", "displayValue": "Sub Broker Brokerage", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "brokerBrokerage", "displayValue": "Broker Brokerage", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "companyBrokerage", "displayValue": "Company Brokerage", "dataType": DOUBLE, "decimalLocator": 0, "editable": true, "hidden": false },
    { "key": "maxAllowedVolume", "displayValue": "Max Allowed Volume", "dataType": DOUBLE, "decimalLocator": 2, "editable": true, "hidden": false }
  ]
};
netPositionPanelMetaData.data = netPositionPanelMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const orderDataMetaData = {
  type: constants.ORDER_META_DATA,
  data: [
    { "key": "login", "displayValue": "Login", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "time", "displayValue": "Time", "dataType": INT, "editable": false, "hidden": false },
    { "key": "order", "displayValue": "Order", "dataType": INT, "editable": false, "hidden": false },
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "size": 30, "editable": false, "hidden": false },
    { "key": "type", "displayValue": "Type", "dataType": INT, "editable": false, "hidden": false },
    { "key": "volume", "displayValue": "Volume", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "price", "displayValue": "Price", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "comment", "displayValue": "Comment", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "status", "displayValue": "Status", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "select", "displayValue": "Select", "dataType": STRING, "editable": true, "hidden": false },
    { "key": "statusSubtype", "displayValue": "Status Subtype", "dataType": STRING, "editable": true, "hidden": false },
    { "key": "relatedOrder", "displayValue": "Related Order", "dataType": STRING, "editable": true, "hidden": false },
    { "key": "tradeHappenTime", "displayValue": "Trade Happen Time", "dataType": INT, "editable": true, "hidden": false },
    { "key": "ourComment", "displayValue": "Our Comment", "dataType": STRING, "editable": true, "hidden": false }
  ]
};
orderDataMetaData.data = orderDataMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const commentChangeMetaData = {
  type: constants.COMMENT_CHANGE_META_DATA,
  data: [
    { "key": "login", "displayValue": "Login", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "time", "displayValue": "Time", "dataType": INT, "editable": false, "hidden": false },
    { "key": "deal", "displayValue": "Deal", "dataType": INT, "editable": false, "hidden": false },
    { "key": "order", "displayValue": "Order", "dataType": INT, "editable": false, "hidden": false },
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "type", "displayValue": "Type", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "volume", "displayValue": "Volume", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "price", "displayValue": "Price", "dataType": DOUBLE, "decimalLocator": 2, "editable": false, "hidden": false },
    { "key": "comment", "displayValue": "Comment", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "commentTo", "displayValue": "Comment To", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "select", "displayValue": "Select", "dataType": STRING, "editable": true, "hidden": false },
    { "key": "oppositeDeal", "displayValue": "Opposite Deal", "dataType": STRING, "editable": true, "hidden": false }
  ]
};
commentChangeMetaData.data = commentChangeMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const alertMetaData = {
  type: constants.ALERT_META_DATA,
  data: [
    { "key": "alertId", "displayValue": "Alert Id", "dataType": INT, "editable": false, "hidden": true },
    { "key": "eventType", "displayValue": "Event Type", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "time", "displayValue": "Time", "dataType": INT, "editable": false, "hidden": false },
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "condition", "displayValue": "Condition", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "exchangeVolume", "displayValue": "Exchange Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "clientVolume", "displayValue": "Client Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "profLoss", "displayValue": "Profit & Loss", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "comment", "displayValue": "Comment", "dataType": STRING, "editable": false, "hidden": false }
  ]
};
alertMetaData.data = alertMetaData.data.map((data, index) => ({ ...data, sequence: index }));

const dealingMetaData = {
  type: constants.DEALING_META_DATA,
  data: [
    { "key": "logTime", "displayValue": "Log Time", "dataType": INT, "editable": false, "hidden": false },
    { "key": "time", "displayValue": "Time", "dataType": INT, "editable": false, "hidden": false },
    { "key": "login", "displayValue": "Login", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "deal", "displayValue": "Deal", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "order", "displayValue": "Order", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "orderType", "displayValue": "Order Type", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "symbol", "displayValue": "Symbol", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "type", "displayValue": "Type", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "volume", "displayValue": "Volume", "dataType": DOUBLE, "decimalLocator": 0, "editable": false, "hidden": false },
    { "key": "price", "displayValue": "Price", "dataType": DOUBLE, "decimalLocator": 4, "editable": false, "hidden": false },
    { "key": "comment", "displayValue": "Comment", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "entryType", "displayValue": "Entry Type", "dataType": STRING, "editable": false, "hidden": false },
    { "key": "currentStatus", "displayValue": "Current Status", "dataType": STRING, "editable": false, "hidden": false }
  ]
};
dealingMetaData.data = dealingMetaData.data.map((data, index) => ({ ...data, sequence: index }));

module.exports = { clientMasterMetaData, symbolMasterMetaData, symbolWisePositionPanelMetaData, netPositionPanelMetaData, orderDataMetaData, commentChangeMetaData, alertMetaData, dealingMetaData };