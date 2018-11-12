import React from "react";
import TransactionRow from "./TransactionRow";
import createData from "../createData";

function TransactionsPanel(props) {
    var transactions = [];
    transactions = props.orders.map((trans)=>{
        return <TransactionRow order={trans} />
    });
  return (
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
        </div>
        <div className="panel-body">
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Order Date</th>
                            <th>Order Time</th>
                            <th>Amount (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions}
                    </tbody>
                </table>
            </div>
            <div className="text-right">
                <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Create New</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">
    
               Date: <input id="orderDate" />
               Time: <input id="orderTime"/>
               Amount: <input id="orderAmount"/>
               <button onClick={
                ()=>{
                    let date = document.getElementById("orderDate").value;
                    let time = document.getElementById("orderTime").value;
                    let amount = document.getElementById("orderAmount").value;
                    createData.order({orderDate:date,orderTime:time,amount});
                }
               }>Create</button>
                 
            </div>
        </div>
    </div>);
}

export default TransactionsPanel;