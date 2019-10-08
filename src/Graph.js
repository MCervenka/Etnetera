import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, VerticalBarSeries, XAxis} from 'react-vis';
import "./graph.css";
import logo from "./content/vektorov_inteligentn_obje.png";
import clock from "./content/clock_kopie.png";

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 600, height: 110};
        console.log = console.warn = console.error = () => {};
        console.error('Something bad happened.');
      }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        if (window.innerWidth <= 800){
            this.setState({width: window.innerWidth - 100, height: 90});
        }

        if (window.innerWidth > 800){
            this.setState({width: 700, height: 110})
        }

    }
    render() {
        const addColor = (element) => {
            let color
            if (element.y <= 5 ) {
                color= 0;
            } else if (element.y < 8){
                color= 0.5;
            } else { color= 1;}
            return {y: element.y, x: element.x, color: color };
        }
        const data = [
            {x: 0, y: 4},
            {x: 1, y: 7},
            {x: 2, y: 7},
            {x: 3, y: 6},
            {x: 4, y: 3},
            {x: 5, y: 4},
            {x: 6, y: 6},
            {x: 7, y: 10},
            {x: 8, y: 9},
            {x: 9, y: 8},
            {x: 10, y: 7},
            {x: 11, y: 7},
            {x: 12, y: 6},
            {x: 13, y: 3},
            {x: 14, y: 4},
            {x: 15, y: 7},
            {x: 16, y: 5},
            {x: 17, y: 10},
            {x: 18, y: 8},
            {x: 19, y: 9},
            {x: 20, y: 9},
            {x: 21, y: 7},
            {x: 22, y: 7},
            {x: 23, y: 5},
            {x: 24, y: 8},
            {x: 25, y: 9},
            {x: 26, y: 6},
            {x: 27, y: 5},
            {x: 28, y: 4},
            {x: 29, y: 3}
        ];
        const coloredData = data.map(element => addColor(element));

    return (
      <div className="App" style={{marginTop: "80px"}}>
        <XYPlot height={this.state.height} width={this.state.width} colorRange={['rgb(255,197,155)', 'rgb(230,77,33)']}>
            <XAxis tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28]} hideTicks/>
            <XAxis tickFormat={v => `${v/2+8}:00`} tickLabelAngle={-90} />
            <VerticalBarSeries data={coloredData} barWidth={0.97} />
            <h3>
                Návštěvnost firmy
            </h3>
            <div id="legend">
                <div>
                    <span className="dot" style={{ backgroundColor: "rgb(255,197,155)"}} />
                    <span>bez fronty</span>
                </div>
                <div>
                    <span className="dot" style={{backgroundColor: "rgb(250, 140, 105)"}} />
                    <span>možnosť fronty</span>
                </div>
                <div>
                    <span className="dot" style={{backgroundColor:"rgb(230,77,33)"}} />
                    <span>pravděpodobné čekání ve frontě</span>
                </div>
            </div>
            <img src={logo} alt="logo" id="logo-graph"/>
            <img src ={clock} alt="clock" id="clock" />
        </XYPlot>
        
      </div>
    );
  }
}

export default Graph;