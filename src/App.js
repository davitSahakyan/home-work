import React from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

import './App.css';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
        }
        this.initData = this.initData.bind(this);
    }

    componentDidMount() {
        this.initData()
    }

    initData() {
        this.setState({isLoading: true})
        fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
            .then(resp => resp.json())
            .then(json => {
                const slicedData = json.slice(0,600)
                console.log(slicedData)
                this.setState({isLoading: false})
                return this.setState({data: [...slicedData]})
            })
    }

    render() {
       return (
           <div>
               <div className="list-wrapper">
                   <div className="list">
                      <LineChart
                        width={1000}
                        height={600}
                        data={this.state.data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                        <XAxis dataKey="lastUpdateEt" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="positiveIncrease" stroke="#ff7300" yAxisId={0} />
                        <Line type="monotone" dataKey="death" stroke="red" yAxisId={1} />
                        <Line type="monotone" dataKey="total" stroke="grey" yAxisId={2} />
                      </LineChart>
                   </div>
               </div>
           </div>
       )
    }
}

export default App
