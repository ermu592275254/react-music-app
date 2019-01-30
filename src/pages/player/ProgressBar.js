import React from "react";
import {connect} from "react-redux";
import {changePercent} from '../../redux/actions'
import observer from '../../redux/observer'


class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            percent: this.props.percent,
            maxLength: 1000
        }
    }

    transformTime(value) {
        if (!value)return '00:00';
        let min, sed;
        parseInt(value / 60) > 9 ? min = parseInt(value / 60) : min = '0' + parseInt(value / 60);
        (value % 60).toFixed(0) > 9 ? sed = (value % 60).toFixed(0) : sed = '0' + (value % 60).toFixed(0);
        return `${min}:${sed}`;
    }
    transformValue(percent,songLength){
        return (percent/songLength) *this.state.maxLength
    }
    handleChange(event) {
        let value = event.target.value,
            percent=(event.target.value/this.state.maxLength)*this.props.interval
        console.log(value);
        observer.$emit('audioPercent',{value,percent});
        // this.props.dispatch(changePercent(value))
        // this.setState({
        //     value: event.target.value,
        //     progressTime: this.props.interval * event.target.value / 100
        // });

    }

    render() {
        return (
            <div className="progress-bar">
                <span className="start-time">{this.transformTime(this.props.percent)}</span>
                <input type="range" max={this.state.maxLength} min="0" value={this.transformValue(this.props.percent,this.props.interval)} onChange={(e) => {
                    this.handleChange(e)
                }}/>
                <span className="end-time">{this.transformTime(this.props.interval)}</span>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {state, props}
})(ProgressBar)