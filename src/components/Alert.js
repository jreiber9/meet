// src/components/Alert.js

//superclass of Alert
import { Component } from 'react';

//superclass of Info,Warning,Error
class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.bgColor = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: this.bgColor,
            borderWidth: "2px",
            borderStyle: "solid",
            fontWeight: "bolder",
            borderRadius: "7px",
            borderColor: this.color,
            textAlign: "center",
            fontSize: "12px",
            margin: "10px 0",
            padding: "10px"
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

//inherits other properties from "Alert"
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(0, 0, 255)'; // blue
        this.bgColor = 'rgb(220, 220, 255)'; // light blue
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255, 0, 0)'; // red
        this.bgColor = 'rgb(255, 204, 203)'; // light red
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255,95,0)'; //orange
        this.bgColor = 'rgb(255,185,144)'; //light orange
    }
}



export { InfoAlert, ErrorAlert, WarningAlert };